import React from "react";
import Button from "../Button/Button.js";
import css from "./Calculator.module.css";

function Calculator({ total, calculateTotal }) {
   return (
      <div className={css.Calculator}>
         <h5>hey</h5>
         <h2>{total}</h2>
         <div className={css.numbersContainer}>
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="0" />
            <Button text="." />
            <Button text="=" onClick={calculateTotal} />
            <Button text="÷" />
            <Button text="*" />
            <Button text="-" />
            <Button text="+" />
         </div>
      </div>
   );
}

export default Calculator;
