import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const movieCard = ({Data}) => {
  return (
    <>
      { Data.map(({title,description,rating,posterURL}) => (
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
            <a href="https://www.imdb.com/title/tt5363918/mediaviewer/rm504141569/" className="btn btn-outline-warning">Watch Now</a>
          </div>
        </div>
      </div>

      ))}
    </>
      );
}

export default movieCard;
