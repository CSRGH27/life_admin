import { Button } from "@material-ui/core";
import { Facebook, MailOutline } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <div className="bg_form_auth">
      <div className="modal_form_auth">
        <h3>Connectez vous a Systeme X</h3>
        <Button
          color="secondary"
          className="btn_form"
          startIcon={<MailOutline />}
          variant="outlined"
        >
          Connexion avec un email
        </Button>
        <Button
          color="primary"
          className="btn_form"
          startIcon={<Facebook />}
          variant="contained"
        >
          Connexion avec Facebook
        </Button>
        <NavLink to="/register">
          <Button size="small" variant="text" color="default">
            Vous n'avez pas encore de compte ? Créez-en un
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
