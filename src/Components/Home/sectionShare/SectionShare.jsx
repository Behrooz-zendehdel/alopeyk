import React from "react";
import share from "../../../assets/share.webp";
import googlePlay from "../../../assets/googlePlay.svg";
import bazar from "../../../assets/bazar.svg";
import alopeyk from "../../../assets/alopeyk.svg";
const SectionShare = () => {
  return (
    <section>
      <div className="shares">
        <div className="share-right">
          <div className="share-image">
            <img src={share} alt="" />
          </div>
        </div>
        <div className="share-left">
          <div className="share-detail">
            <h2>تجربه بهتر با اپلیکیشن الوپیک </h2>
            <h4>مناسب برای کاربران اندروید</h4>
            <div className="share-img-link">
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
            <div className="web-app">
              <h2>مناسب برای کاربران وب و ios</h2>
              <a href="https://app.alopeyk.com/login" target="blank">
                <img src={alopeyk} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionShare;
