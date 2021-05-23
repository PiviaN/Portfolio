import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = ({ translate }) => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>{translate ? "Testemunhos" : "Testimonials"}</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel translate={translate} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
