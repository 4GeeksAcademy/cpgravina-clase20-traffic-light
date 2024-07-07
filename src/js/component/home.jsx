import React, { useState } from "react";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");

  function handleClick(color) {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color); 
    }
  }

  return (
    <div className="container" id="main-container">
      <div
        id="traffic-top"
        className="bg-dark d-flex justify-content-center m-auto"
        style={{ height: "10rem", width: "3rem" }}
      ></div>
      <div
        id="traffic-lights-container"
        className="m-auto bg-dark d-flex flex-column justify-content-center align-items-center"
        style={{ height: "30rem", width: "15rem" }}
      >
        <div
          className={`my-2 btn rounded-circle shadow-lg btn-success ${selectedColor === "green" ? "border-light border-3" : ""}`}
          style={{ height: "10rem", width: "13rem" }}
          onClick={() => handleClick("green")}
        >
        </div>
        <div
          className={`my-2 btn rounded-circle btn-warning ${selectedColor === "orange" ? "border-light border-3" : ""}`}
          style={{ height: "10rem", width: "13rem" }}
          onClick={() => handleClick("orange")}
        >
        </div>
        <div
          className={`my-2 btn rounded-circle btn-danger ${selectedColor === "red" ? "border-light border-3" : ""}`}
          style={{ height: "10rem", width: "13rem" }}
          onClick={() => handleClick("red")}
        >
        </div>
      </div>
    </div>
  );
};

export default Home;
