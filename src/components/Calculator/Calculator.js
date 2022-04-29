import React from "react";
import css from "./Calculator.module.css";
//import { useReducer } from "react";

//function reducer() {}

function Calculator({ total, calculateTotal }) {
   //const [{}, dispatch] = useReducer(reducer, {});
   return (
      <div className={css.calculator}>
         <div className={css.output}>
            <h5 className={css.previousOperation}>111111</h5>
            <h2 className={css.currentOperation}>11111</h2>
         </div>
         <button className={css.spanGridTwo}>AC</button>
         <button>D</button>
         <button>÷</button>
         <button>1</button>
         <button>2</button>
         <button>3</button>
         <button>*</button>
         <button>4</button>
         <button>5</button>
         <button>6</button>
         <button>+</button>
         <button>7</button>
         <button>8</button>
         <button>9</button>
         <button>-</button>
         <button>.</button>
         <button>0</button>
         <button className={css.spanGridTwo}>=</button>
      </div>
   );
}

export default Calculator;
