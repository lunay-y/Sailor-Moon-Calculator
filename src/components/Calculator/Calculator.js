import React from "react";
import Button from "../Button/Button.js";
import css from "./Calculator.module.css";
//import { useReducer } from "react";

//function reducer() {}

function Calculator({ total, calculateTotal }) {
   //const [{}, dispatch] = useReducer(reducer, {});
   return (
      <div className={css.calculator}>
         <div className={css.output}>
            <h5 className={css.previousOperation}>hey</h5>
            <h2 className={css.currentOperation}>{total}</h2>
         </div>
         <Button text="AC" className={css.spanGridTwo} />
         <Button text="DEL" />
         <Button text="÷" />
         <Button text="1" />
         <Button text="2" />
         <Button text="3" />
         <Button text="*" />
         <Button text="4" />
         <Button text="5" />
         <Button text="6" />
         <Button text="+" />
         <Button text="7" />
         <Button text="8" />
         <Button text="9" />
         <Button text="-" />
         <Button text="." />
         <Button text="0" />
         <Button
            text="="
            className={css.spanGridTwo}
            onClick={calculateTotal}
         />
      </div>
   );
}

export default Calculator;
