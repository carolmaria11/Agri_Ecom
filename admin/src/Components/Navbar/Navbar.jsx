import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import navProfile from "../../assets/nav-profile.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"https://agri-home.vercel.app/"}><img src={logo} alt="" className="nav-logo" /></Link>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
