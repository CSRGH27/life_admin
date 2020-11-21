import { Button, makeStyles, TextField } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { REG_URL_API } from "../config";

const RegisterForm = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiErrors = {};

    if (credentials.password !== credentials.passwordConfirm) {
      setErrors({ passwordConfirm: "Vos mots de passe ne correspondent pas" });

      return;
    }
    try {
      await Axios.post(REG_URL_API, credentials);
      setErrors({});
      history.replace("/login");
      toast.success("Vous etes desormais inscrit, vous puvez vous connecte !");
    } catch (error) {
      toast.error("Des erreurs dasn votre formulaire ! 🙁");
      const { violations } = error.response.data;
      if (violations) {
        violations.forEach((violation) => {
          apiErrors[violation.propertyPath] = violation.message;
        });
        setErrors(apiErrors);
      }
    }
  };

  return (
    <div className="bg_form_auth">
      <div className="modal_register_form">
        <h3>Formulaire d'inscription</h3>
        <form onSubmit={handleSubmit} className="form_display">
          {errors.email ? (
            <TextField
              error
              id="standard-error-helper-text"
              label="Erreur"
              value={credentials.username}
              onChange={handleChange}
              required
              helperText={errors.email}
              name="email"
              color="secondary"
            />
          ) : (
            <TextField
              value={credentials.username}
              required
              onChange={handleChange}
              id="standard-required"
              label="Email"
              name="email"
              color="secondary"
            />
          )}

          <TextField
            value={credentials.password}
            id="standard-password-input"
            label="Mot de passe "
            onChange={handleChange}
            type="password"
            name="password"
            color="secondary"
          />
          <TextField
            id={
              errors.passwordConfirm
                ? "standard-error-helper-text"
                : "standard-password-input"
            }
            label="Repetez le mot de passe"
            type="password"
            onChange={handleChange}
            name="passwordConfirm"
            color="secondary"
            helperText={
              errors.passwordConfirm
                ? "Les mots de passes ne sont pas identiques"
                : ""
            }
          />
          <Button
            className="btn_form_register"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Inscription
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
