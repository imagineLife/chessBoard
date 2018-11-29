import React from "react";
import ReactDOM from "react-dom";
import './resetNormalize.css';
import './main.css';
import Board from './components/Board'

const App = () => {
  return (
  	<Board knightPosition={[0,0]}/>

  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));