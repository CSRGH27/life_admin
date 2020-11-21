const { Divider, Button } = require("@material-ui/core");
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Menu = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenu = (bool) => {
    setshowMenu((showMenu) => bool);
    console.log(showMenu);
  };

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

      {/* <Button
        onMouseLeave={() => handleMenu(false)}
        onMouseEnter={() => handleMenu(true)}
      >
        Test
      </Button>
      <CSSTransition
        onMouseEnter={() => handleMenu(true)}
        onMouseLeave={() => handleMenu(false)}
        in={showMenu}
        timeout={300}
        classNames="alert"
      >
        <div dismissible className="test"></div>
      </CSSTransition> */}
    </>
  );
};

export default Menu;
