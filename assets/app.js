import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar";
import "./styles/app.css";

const App = () => {
  return <TopBar />;
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
export default App;
