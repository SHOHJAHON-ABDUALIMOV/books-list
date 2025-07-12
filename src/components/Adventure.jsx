import React from "react";

const Adventure = () => {
  return (
    <section className="adventure">
      <div className="adventure__info">
        <div className="adventure__info__top">
          <strong>Ready for Your Next Adventure?</strong>
          <p>
            Sign up for our newsletter to receive exclusive travel deals and
            inspiration.
          </p>
        </div>
        <div className="adventure__inputs">
          <input
            className="black__input"
            placeholder="Enter your email"
          ></input>
          <input className="white__input" placeholder="Subscribe"></input>
        </div>
        <p className="grey-color">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default Adventure;
