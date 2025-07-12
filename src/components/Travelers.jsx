import React from "react";
import { User1, User2, User3, RatingUserIcon } from "../assets";
const Travelers = () => {
  return (
    <section className="travelers">
      <div className="travelers__info">
        <div className="travelers__info__top">
          <h5>What Our Travelers Say</h5>
          <p>Read testimonials from our satisfied customers</p>
        </div>
        <div className="travel__cards">
          <div className="cards">
            <img className="cards_image" src={RatingUserIcon} alt="" />
            <p>
              "The trip to Bali was absolutely perfect. Every detail was taken
              care of, and the local guides were exceptional."
            </p>
            <div className="user">
              <img src={User1} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travelers;
