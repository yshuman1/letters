import React from "react";
import "./MainPic.css";
import { Button } from "reactstrap";
import fawzi from "./fawzi.jpg";

const MainPic = props => {
  return (
    <div className="bg">
      <img className="image" src={fawzi} alt="main pic" />
      <div className="image-text-box">
        <p className="image-text">Show The Kids You Care</p>
        <Button color="primary">Send A Free Letter</Button>{" "}
      </div>
    </div>
  );
};

export default MainPic;
