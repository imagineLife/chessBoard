import React from "react";
import ReactDOM from "react-dom";
import './resetNormalize.css';
import './main.css';
import Board from './components/Board'
import observe from './utils/observe'

// const App = () => {
//   return (
//   	<Board knightPosition={[2,1]}/>

//   );
// };
// export default App;

observe(knightPosition =>
	ReactDOM.render(<Board knightPosition={knightPosition}/>, 
		document.getElementById("app"))
);