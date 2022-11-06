import { useState } from "react";
import "./App.css";
import Front from "./Front/Front";
import Back from "./Back/Back";

function App() {
  const [number, setNumber] = useState<string>("");
  const [flipped, setFlipped] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <div className="card">
        <div className={flipped ? "card-info flipped" : "card-info"}>
          <div className="pin">
            <Front number={number} name={name} month={month} year={year} />
          </div>
          <div className="pin back">
            <Back pin={pin} />
          </div>
        </div>
      </div>
      <div className="container-input">
        <div>
          <div style={{ float: "left" }}>
            <label htmlFor="cnn">CNN</label>
            <input
              id="ccn"
              type="tel"
              className="input"
              data-testid="input-cc"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength={16}
              placeholder="xxxx xxxx xxxx xxxx"
              onChange={(e) => setNumber(e?.target?.value)}
            />
          </div>

          <div style={{ float: "left" }}>
            <label htmlFor="pin">pin</label>
            <input
              name="pin"
              inputMode="numeric"
              maxLength={3}
              pattern="\d{3}"
              onFocus={() => {
                flip();
              }}
              onBlur={() => {
                flip();
              }}
              data-testid="input-pin"
              onChange={(e) => setPin(e?.target?.value)}
              className="input"
            />
          </div>
        </div>
        <div>
          <div style={{ float: "left" }}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              onChange={(e) => setName(e?.target?.value)}
              maxLength={36}
            />
          </div>
          <div style={{ float: "left" }}>
            <label htmlFor="val" style={{ marginLeft: "20px" }}>
              Val
            </label>
            <div className="exp-wrapper">
              <input
                className="exp"
                id="month"
                maxLength={2}
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="MM"
                type="text"
                data-pattern-validate
                onChange={(e) => setMonth(e?.target?.value)}
              />
              <input
                className="exp"
                id="year"
                maxLength={2}
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="YY"
                type="text"
                data-pattern-validate
                onChange={(e) => setYear(e?.target?.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
