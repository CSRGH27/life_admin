import { Fab, IconButton, Tooltip, Typography, Box } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import React from "react";

const TopBar = () => {
  return (
    <header className="top-header bg-primary">
      <div className="top_header-ctn_logo">X</div>
      <div className="top-header_ctn_heading">
        <Typography className="color-white" component="div">
          <Box fontSize={28} fontWeight="fontWeightBold">
            SYSTEME X
          </Box>
        </Typography>
      </div>
      <div className="top-header-ctn-icn">
        <Tooltip title="Mon compte">
          <IconButton className="color-secondary" color="inherit">
            <AccountCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mon panier">
          <IconButton className="color-secondary" color="inherit">
            <ShoppingCart />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default TopBar;
