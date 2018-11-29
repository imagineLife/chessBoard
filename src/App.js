import React from "react";
import ReactDOM from "react-dom";
import './resetNormalize.css'
import Knight from './components/Knight'
import Square from './components/Square'
const App = () => {
  return (
  	<Square black>
    	<Knight />
    </Square> 
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));