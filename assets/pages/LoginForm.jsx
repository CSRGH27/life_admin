import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { ShakeLittle } from "reshake";
const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("initialState");

  const [freeze, setFreeze] = useState(false);

  const handleSubmit = () => {
    setFreeze(true);
    setTimeout(() => {
      setFreeze(false);
    }, 400);
  };
  const handleChange = () => {};

  return (
    <div className="bg_form_auth">
      <ShakeLittle active={freeze} fixed={true}>
        <div className="modal_register_form">
          <h3>Connectez-vous en un clic !</h3>
          <form action="" className="form_display">
            <TextField
              // value={credentials.username}
              required
              //   onChange={handleChange}
              id="standard-required"
              label="Email"
              name="email"
              color="secondary"
            />
            <TextField
              // value={credentials.password}
              id="standard-password-input"
              label="Mot de passe "
              //onChange={handleChange}
              type="password"
              required
              name="password"
              color="secondary"
            />
          </form>
          <Button
            className="btn_form_register"
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Connexion
          </Button>
        </div>
      </ShakeLittle>
    </div>
  );
};

export default LoginForm;
