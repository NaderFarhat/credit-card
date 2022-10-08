import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { AiOutlineWifi } from "react-icons/ai";
import { text } from "stream/consumers";
import { verifyFlag } from "../helpers/verifyFlag";

interface IFaceFrontProps {
  number: string;
  name: string;
  month: string;
  year: string;
}

const Front: React.FC<IFaceFrontProps> = ({ number, name, month, year }) => {
  useEffect(() => {
    verifyFlag(number.toString());
  }, [number]);

  return (
    <div style={{ padding: "20px 20px" }}>
      <div className="card-top">
        <div className="card-top__left">
          <img alt="chip" src="chip.png" className="chip-icon" />

          <div className="wifi-container">
            <AiOutlineWifi className="wifi-container__icon" />
          </div>
        </div>

        <div className="card-top__right">
          <div className="card-top__logo">{verifyFlag(number)}</div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__name">{name}</div>
        <div className="card-bottom__number">
          {number?.match(/.{1,4}/g)?.join(" ")}
        </div>
        <div className="card-bottom__val">{`${month}/${year}`}</div>
      </div>
    </div>
  );
};

export default Front;
