import React from "react";
import { destinations } from "../data";
import { RatingIcon } from "../assets";

const Popular = () => {
  return (
    <section className="Popular__section">
      <div className="popular__section__info">
        <div className="popular__section__info__top">
          <h6 className="popular_h6">Popular Destinations</h6>
          <p className="popular_p">
            Explore our handpicked selection of the world's most breathtaking
            locations
          </p>
        </div>
        <div className="popular_container">
          {destinations.map((place) => (
            <div key={place.id} className="card">
              <img src={place.image} alt={place.title} className="card_image" />
              <div className="card_content">
                <h3>{place.title}</h3>
                <p>Starting from ${place.price}</p>
              </div>
              <div className="card-footer">
                <img src={RatingIcon} alt="no photo" />
                <a href="#">Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
