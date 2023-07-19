import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-5 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={""}>
            <img src={logo} alt="the site logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"categories"}
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"brands"}>
                  Brands
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-baseline ">
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-facebook"></i>
              </li>
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-twitter"></i>
              </li>
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-instagram"></i>
              </li>
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-tiktok"></i>
              </li>
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-linkedin"></i>
              </li>
              <li className="nav-item">
                <i className="fa-brands cursor-pointer  px-2 fa-youtube"></i>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"register"}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"login"}
                >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"logout"}>
                  logOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
