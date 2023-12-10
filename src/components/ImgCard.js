import React from "react";
import pxfuel from "../assets/pxfuel.jpg";
const ImgCard = () => {
  return (
    <div className="image-card">
      <img
        // src="https://www.escapistmagazine.com/wp-content/uploads/2023/05/guardians-of-the-galaxy-ode-imperfection.jpg?resize=800%2C400"
        src={pxfuel}
        alt="photo"
      />
      <div className="details">
        <h3>React Movies</h3>
        <p>
          your favorite movies and series search engine <br />
          you can search by name , type or year in our vast database for the
          last 50 years Lorem, ipsum dolor domm.
        </p>
      </div>
    </div>
  );
};

export default ImgCard;
