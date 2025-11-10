
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("menu");

    if (menu) {
      if (isOpen) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
      } else {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleMenu} className="cursor-pointer" aria-label="Abrir menú">
      <GiHamburgerMenu size={24} className="text-light" />
    </button>
  );
};

export default MenuButton;
