import React from "react";
import {Modal,Button,InputGroup,FormControl} from  "react-bootstrap";
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const AddMovie = (props)=>{
const AddtoList= (movie) => {
  setShow(false);
  console.log(movie)
   props.Add(movie);
}
  const [rate, setRate] =  useState(1)
  const [movie,setMovie] = useState({title: "", description: "", posterURL: ""})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);;
  const handleShow = () => setShow(true);
  // console.log(movie.val);
  return (
    <>
      <Button variant="btn btn-success" onClick={handleShow}>
        Add Movie 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
              <FormControl
                name="title"
                placeholder="Movie title"
                onChange={e => setMovie({...movie, title: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                name="description"
                placeholder="Movie description"
                onChange={e => setMovie({ ...movie,description: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                name="posterURL"
                placeholder="Movie poster"
                onChange={e => setMovie({ ...movie,posterURL: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
            <StarRatingComponent 
              name="Movie rating" 
              value={rate}
              onStarClick={(nextValue, prevValue) => {
                setRate(nextValue)
                setMovie({ ...movie, rating: nextValue })}}
            />
            </InputGroup>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>AddtoList({...movie, id: Date.now()})}>
            Add to list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;