import { useState } from "react";
import "./Main.css";

export default function Counter() {
  const [newClick, setClick] = useState(0);

  const increment = () => setClick(newClick + 1);
  const decrement = () => setClick(newClick - 1);
  const reset = () => setClick(0);
  const disabledBtn = () => true;
  const disabledBtnIncrement = () => true;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Счетчик чисел от 0 до 100</h1>
      <div className="click">
        <button
          disabled={newClick === 0 && disabledBtn()}
          onClick={decrement}
          className="click_BTN"
        >
          -
        </button>
        <p className="click_text">{newClick}</p>

        <button
          disabled={newClick === 100 && disabledBtnIncrement()}
          onClick={increment}
          className="click_BTN"
        >
          +
        </button>
        <button onClick={reset} className="click_BTN">
          Заново
        </button>
      </div>
    </>
  );
}
