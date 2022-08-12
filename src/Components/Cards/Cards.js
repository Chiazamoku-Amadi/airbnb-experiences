import React from "react";
import "./Cards.css";
import star from "../../assets/star.png";

function Cards(props) {
  return (
    <div className="card">
      {!props.openSlots ? (
        <h1 className="status">SOLD OUT</h1>
      ) : props.location === "Online" ? (
        <h1 className="status">ONLINE</h1>
      ) : null}
      <img src={props.img} alt="card" className="card-image" />
      <div className="card-text">
        <div className="star-rating">
          <img src={star} alt="star" className="star" />
          <span className="rating">{props.rating}</span>
          <span className="reviewCount">({props.reviewCount}).</span>
          <span className="location">{props.location}</span>
        </div>
        <div className="card-title">
          <p>{props.title}</p>
        </div>
        <div className="price">
          <p>
            From ${props.price} <span className="price-span">/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
