import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navList">
          <nav>
            <ul>
              <li className="logo">
                <img src={logo} alt="" />
              </li>
              <li>
                <Link to="/services">خدمات</Link>
              </li>
              <li>
                <Link to="/bizines">کسب و کارها</Link>
              </li>
              <li>
                <Link to="/register">ثبت نام سفیران</Link>
              </li>
              <li>
                <Link to="/education">آموزش</Link>
              </li>
              <li>
                <Link to="/weblog">وبلاگ</Link>
              </li>
              <li>
                <Link to="/about">تماس با ما</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logins">
          <button className="btns login">
            <Link to="/login">ورود</Link>
          </button>
          <button className=" btns signup">
            <Link to="/signup">ثبت نام</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
