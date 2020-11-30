import { TextField, Button } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import "csshake/dist/csshake.min.css";
import { LOG_URL_API } from "../config";
import $ from "jquery";
import { toast } from "react-toastify";
import AuthApi from "../services/AuthApi";

const LoginForm = ({ history, onLogin }) => {
  const shakeError = () => {
    $(".modal_register_form").addClass("shake-horizontal shake-constant");
    setTimeout(() => {
      $(".modal_register_form").removeClass("shake-horizontal shake-constant");
    }, 500);
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthApi.authenticate(credentials);
      history.replace("/home");
      onLogin(true);
      toast.success(
        "Bonjour " + username + " vous etes maintenant connecte ! 😎"
      );
    } catch (error) {
      if (error.response) {
        toast.error(
          "Aucun compte trouve ou les informations ne correspondent pas ! 😵"
        );
        shakeError();
      }
    }
  };

  /**
   *
   * Ici on transforme l'input en object (currentTarget) en lepasant dasn les {} puis avec la destructuration on recupere les valeur name et value de cette objet
   * Puis ensuite abec les trois point on bouvle sur le state pour attribuer la vlaue quon a rcupere ddu champs voir: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
   */
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="bg_form_auth">
      <div className="modal_register_form ">
        <h3>Connectez-vous en un clic !</h3>
        <form action="" className="form_display">
          <TextField
            value={credentials.username}
            required
            onChange={handleChange}
            id="standard-required"
            label="Email"
            name="username"
            color="secondary"
          />
          <TextField
            value={credentials.password}
            id="standard-password-input"
            label="Mot de passe "
            onChange={handleChange}
            type="password"
            required
            name="password"
            color="secondary"
          />
          <Button
            className="btn_form_register"
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Connexion
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
