import React from "react";
import { services } from "../data";
const Service = () => {
  return (
    <section className="service__section">
      <div className="service__section__info">
        <div className="service__section__info__top">
          <h6 className="services_our">Our Services</h6>
          <p>
            We provide comprehensive travel services to make your journey
            seamless
          </p>
        </div>
        <div className="service__tables">
          {services.map((service, index) => (
            <div className="table" key={index}>
              {service.icon}
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
