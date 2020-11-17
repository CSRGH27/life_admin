const { Divider, Button } = require("@material-ui/core");
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Menu = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenu = () => {
    setshowMenu((showMenu) => !showMenu);
  };
  console.log(showMenu);
  return (
    <>
      <div className="big_ctn_menu">
        <ul className="ctn_menu">
          <li className="item-menu">Idee cadeaux</li>
          <li className="item-menu">Collection</li>
          <li className="item-menu">Creation / Personalisation album photo</li>
          <li className="item-menu">Creer et partager son template</li>
        </ul>
      </div>

      <Button onClick={() => handleMenu()}>Test</Button>
      <CSSTransition in={showMenu} timeout={300} classNames="alert">
        <div dismissible className="test"></div>
      </CSSTransition>
    </>
  );
};

export default Menu;
