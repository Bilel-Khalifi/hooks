import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const movieCard = ({Data}) => {
  return (
    <>
      { Data.map(({id,title,description,rating,posterURL}) => (
      <div className="col-sm">
        <div className="card" style={{ width: "18rem" }}>
          <img src={posterURL} className="card-img-top" alt="bill" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <StarRatingComponent 
              name="rate1" 
              starCount={rating}
              value="rate1"
            />

          <Link to={`description/${id}`} className="btn btn-outline-warning">Watch Now</Link>
         
          </div>
        </div>
      </div>

      ))}
    </>
      );
}

export default movieCard;
