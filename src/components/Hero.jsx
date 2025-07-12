import React from "react";
import { Button } from "./UI/index";
import "./Pages.css";
const Hero = () => {
  return (
    <section className="section__hero">
      <div className="section__hero__info">
        <h2 className="section__hero__info__h2">
          Discover the World's Most Amazing Places
        </h2>
        <p className="section__hero__info__p">
          Experience unforgettable journeys to breathtaking destinations. Let us
          take care of your travel dreams.
        </p>
        <div className="section__hero__info__buttons">
          <Button text={"Explore destinations"} />
          <button className="transparent__button">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
