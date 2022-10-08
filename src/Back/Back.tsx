import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { AiOutlineWifi } from "react-icons/ai";
import { text } from "stream/consumers";

interface IFaceBackProps {
  pin: string;
}

const Back: React.FC<IFaceBackProps> = ({ pin }) => {
  return (
    <div className="card-back">
      <div className="card-line"></div>
      <div>
        <div className="card__label__back">CVV</div>
      </div>

      <div className="card-line__bottom">
        <div className="card-line_bottom_number">{pin}</div>
      </div>
    </div>
  );
};

export default Back;
