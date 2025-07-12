import React from "react";
import { Input1, Input2 } from "../assets/index";

const inputsData = [
  {
    label: "Destination",
    placeholder: "Where to go?",
    icon: Input1,
  },
  {
    label: "Check in",
    placeholder: "Add date",
    icon: Input2,
  },
  {
    label: "Check out",
    placeholder: "Add date",
    icon: Input2,
  },
];
const Testimonials = () => {
  return (
    <section className="Testimonial__section">
      <div className="Testimonial__section__info">
        {inputsData.map((input, index) => (
          <div className="testimonial__inputs" key={index}>
            <h6>{input.label}</h6>
            <div className="input__div">
              <img src={input.icon} alt="icon" />
              <input type="text" placeholder={input.placeholder} />
            </div>
          </div>
        ))}
        <button className="global_button">Search</button>
      </div>
    </section>
  );
};

export default Testimonials;
