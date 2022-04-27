import React from "react";
import Button from "../Button/Button.js";
import css from "./Calculator.module.css";

function Calculator({ calculation, total, calculateTotal }) {
   const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
   const operators = ["/", "*", "-", "+"];
   return (
      <div className={css.Calculator}>
         <h1>{total}</h1>
         <div className={css.numbersContainer}>
            {numbers.map(function (number) {
               return (
                  <Button
                     key={number}
                     text={number}
                     onClick={() => calculation(number)}
                  />
               );
            })}
            <Button text="." />
            <Button text="=" onClick={calculateTotal} />
            <div className={css.operators}>
               {operators.map(function (operator) {
                  return <Button key={operator} text={operator} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default Calculator;
