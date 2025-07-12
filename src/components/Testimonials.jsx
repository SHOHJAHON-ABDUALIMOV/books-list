import React from "react";
import { Input1 } from "../assets/index";
import { Input2 } from "../assets/index";
const Testimonials = () => {
  return (
    <section className="Testimonial__section">
      <div className="Testimonial__section__info">
        <div className="testimonial__inputs">
          <h6>Destination</h6>
          <div className="input__div">
            <img src={Input1} alt="this is photo" />
            <input type="text" placeholder="Where to go?" />
          </div>
        </div>
        <div className="testimonial__inputs">
          <h6>Check in</h6>
          <div className="input__div">
            <img src={Input2} alt="this is photo" />
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        <div className="testimonial__inputs">
          <h6>Check out</h6>
          <div className="input__div">
            <img src={Input2} alt="this is photo" />
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        <button className="global_button">Search</button>
      </div>
    </section>
  );
};

export default Testimonials;
