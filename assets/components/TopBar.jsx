import { Fab, IconButton, Tooltip } from "@material-ui/core";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import React from "react";

const TopBar = () => {
  return (
    <header className="top-header bg-primary">
      <div className="top-header-ctn-icn">
        <Tooltip title="Mon compte">
          <IconButton className="color_secondary" color="inherit">
            <AccountCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mon panier">
          <IconButton className="color_secondary" color="inherit">
            <ShoppingCart />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default TopBar;
