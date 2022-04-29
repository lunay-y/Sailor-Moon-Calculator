import "./App.css";
import Calculator from "../Calculator/Calculator.js";
import { useState } from "react";

function App() {
   const [currentCalculation, setCalculation] = useState([]);

   function calculation(num) {
      setCalculation([...currentCalculation, num]);
   }

   function calculateTotal() {
      return [...currentCalculation];
   }
   return (
      <div className="App">
         <Calculator
            calculation={calculation}
            total={currentCalculation}
            calculateTotal={calculateTotal}
         />
      </div>
   );
}

export default App;
