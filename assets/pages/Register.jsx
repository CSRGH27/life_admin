import { Button } from "@material-ui/core";
import { Facebook, MailOutline } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  return (
    <div className="bg_form_auth">
      <div className="modal_form_auth">
        <h3>Rejoignez Systeme X</h3>
        <NavLink to="/registerform">
          <Button
            color="secondary"
            className="btn_form"
            startIcon={<MailOutline />}
            variant="outlined"
          >
            S'inscrire avec un email
          </Button>
        </NavLink>
        <Button
          color="primary"
          className="btn_form"
          startIcon={<Facebook />}
          variant="contained"
        >
          S'inscrire avec Facebook
        </Button>
        <NavLink to="/login">
          <Button size="small" variant="text" color="default">
            Vous avez deja un compte ? Connectez vous !
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
