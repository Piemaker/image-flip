import React from 'react'
import {
  RiArrowUpCircleFill,
  RiArrowDownCircleFill,
  RiArrowLeftCircleFill,
RiArrowRightCircleFill} from "react-icons/ri";
export default function Controls({imageRef}) {
    const handleClick = (name)=>{
      let orientation = ""
      if(name === "up"){
        orientation = "scaleY(-1)";
      }
      if (name === "left"){
        orientation = "scaleX(-1)";
      }
      if (name === "right") {
        orientation = "scaleX(1)";
      }if (name === "down") {
        orientation = "scaleY(1)";
      }
      imageRef.current.style.transform = orientation;
    }
    return (
      <div className="control-section">
        <div className="row">
          <RiArrowUpCircleFill
            onClick={() => handleClick("up")}
          ></RiArrowUpCircleFill>
        </div>
        <div className="row">
          <RiArrowLeftCircleFill
            onClick={() => handleClick("left")}
          ></RiArrowLeftCircleFill>
          <RiArrowRightCircleFill
            onClick={() => handleClick("right")}
          ></RiArrowRightCircleFill>
        </div>
        <div className="row">
          <RiArrowDownCircleFill
            onClick={() => handleClick("down")}
          ></RiArrowDownCircleFill>
        </div>
      </div>
    );
}

