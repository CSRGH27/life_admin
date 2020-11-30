import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React from "react";
import { toast } from "react-toastify";
import AuthApi from "../services/AuthApi";

const HomePage = ({ authenticated, onLogin }) => {
  const handleLogout = () => {
    AuthApi.logout();
    onLogin(false);
    toast.info("Vous etes desormais deconnecte ! 😎");
  };

  return (
    <>
      {authenticated ? (
        <>
          <h1>Vous etes connecte</h1>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="secondary"
            startIcon={<ExitToApp />}
          >
            Deconnexion
          </Button>
        </>
      ) : (
        <h1>vous êtes déconnecté,</h1>
      )}
    </>
  );
};

export default HomePage;
