import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import "./styles/app.css";
const App = () => {
  return (
    <HashRouter>
      <TopBar />
      <Menu />
      <Switch>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registerform" component={RegisterForm}></Route>
        <Route path="/loginform" component={LoginForm}></Route>
      </Switch>
      <ToastContainer position={toast.POSITION.TOP_LEFT} />
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
export default App;
