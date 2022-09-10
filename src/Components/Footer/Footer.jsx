import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { FcCallback } from "react-icons/fc";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.webp";

import googlePlay from "../../assets/googlePlay.svg";
import bazar from "../../assets/bazar.svg";
import alopeyk from "../../assets/alopeyk.svg";
const Footer = () => {
  return (
    <div className="header-footer">
      <div className="title-footer">
        <div className="title-footer-service">
          <h5>سرویس ها</h5>
          <Link to="/services/alopeyk">
            <h6>الوپیک</h6>
          </Link>

          <Link to="/services/alotaxi">
            <h6>الوتاکسی</h6>
          </Link>
          <Link to="/services/alovanet">
            <h6>الووانت</h6>
          </Link>
          <Link to="/services/alopost">
            <h6>الوپست</h6>
          </Link>
          <Link to="/services/aloforosh">
            <h6>الوفروش</h6>
          </Link>
        </div>
        <div className="title-footer-bizines">
          <h5>کسب و کارها</h5>
          <Link to="/bizines/sefaresh">
            <h6>سفارش انبوه</h6>
          </Link>
          <Link to="/bizines/webservice">
            <h6>وب سرویس</h6>
          </Link>
        </div>
        <div className="title-footer-invated">
          <h5>همراه با ما</h5>
          <Link to="/about">
            <h6>درباره ما</h6>
          </Link>
          <Link to="/register">
            <h6>ثبت نام سفیران</h6>
          </Link>
          <Link to="about/jobs">
            <h6>فرصت های شغلی</h6>
          </Link>
          <Link to="/weblog">
            <h6>وبلاگ الوپیک</h6>
          </Link>
          <Link to="about/contact">
            <h6>تماس با ما</h6>
          </Link>
        </div>
        <div className="title-footer-learned">
          <h5>آموزش</h5>
          <Link to="/education/question">
            <h6>سوالات متداول</h6>
          </Link>
          <Link to="/education/terms">
            <h6>شرایط و ظوابط</h6>
          </Link>
        </div>
        <div className="title-footer-linked">
          <div>
            <a href="#" style={{ marginLeft: "8px" }}>
              Contact@alopeyk.com
            </a>
            <MdOutlineLocalPostOffice color="#0d6efd" />
          </div>
          <div>
            <a href="#" style={{ marginLeft: "8px" }}>
              021-92004134
            </a>
            <FcCallback style={{ color: "#0d6efd" }} />
          </div>
          <div className="linked">
            <a href="https://www.instagram.com/alopeyk/" className="a-link">
              <FiInstagram size="1.5rem" color="#0d6efd" />
            </a>
            <a href="https://twitter.com/alopeyk" className="a-link">
              <FiTwitter size="1.5rem" color="#0d6efd" />
            </a>
            <a
              href="https://www.linkedin.com/company/alopeyk"
              className="a-link"
            >
              <FaLinkedin size="1.5rem" color="#0d6efd" />
            </a>
            <a href="https://telegram.me/alopeyk" className="a-link">
              <FaTelegramPlane size="1.5rem" color="#0d6efd" />
            </a>
            <a href="https://www.aparat.com/alopeyk" className="a-link">
              <SiAparat size="1.5rem" color="#0d6efd" />
            </a>
          </div>
          <div className="logoshaparak">
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
          </div>
        </div>
      </div>
      <div className="bazar-linked">
        <div className="google-bazar-alopeyk-linked ">
          <div className="right-linekd">
            <span>مناسب برای کاربران اندروید</span>
            <div className="right-linked-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.alopeyk.customer"
                target="blank"
              >
                <img src={googlePlay} alt="" />
              </a>
              <a
                href="https://cafebazaar.ir/app/com.alopeyk.customer"
                target="blank"
              >
                <img src={bazar} alt="" />
              </a>
            </div>
          </div>
          <div className="left-linekd">
            <span>مناسب برای کاربران وب و ios</span>
            <a
              href="https://cafebazaar.ir/app/com.alopeyk.customer"
              target="blank"
            >
              <img src={alopeyk} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="mean">
        <span>کلیه حقوق معنوی این وب‌سایت متعلق به الوپیک می‌باشد
</span>
      </div>
    </div>
  );
};

export default Footer;
