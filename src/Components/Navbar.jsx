import React from "react";
import logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "E-books",
      path: "/ebook/guitarmastery",
    },
    {
      name: "Guitar Level 1",
      path: "/guitar-level-1",
    },
  ];

  return (
    <>
      <div className="px-[90px] flex justify-between items-center">
        <div className="py-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-7 py-3">
          {menu &&
            menu.map((nav, i) => {
              return (
                <div key={i}>
                  <p
                    onClick={() => navigate(`${nav.path}`)}
                    className="font-medium cursor-pointer"
                    id={i}
                  >
                    {nav.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
