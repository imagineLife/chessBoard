import React from "react";
import ReactDOM from "react-dom";
import Knight from './components/Knight'
const App = () => {
  return (
    <Knight /> 
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));