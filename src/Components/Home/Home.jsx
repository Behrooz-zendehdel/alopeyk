import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import bikeimage from "../../assets/bike.webp";
import taxiImage from "../../assets/taxi.webp";
import cargoImage from "../../assets/cargo.webp";
import postImage from "../../assets/post.webp";
import forshImage from "../../assets/frosh.webp";
import anbohImage from "../../assets/anboh.webp";
import { BsArrowLeft } from "react-icons/bs";
import { RiEBike2Line } from "react-icons/ri";
import { FaTruckPickup } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { BiReceipt, BiUnite } from "react-icons/bi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import Bizines from "./SectionBizines/Bizines";
import Types from "./SectionTypes/Types";
import share from "../../assets/share.webp";
import googlePlay from "../../assets/googlePlay.svg";
import bazar from "../../assets/bazar.svg";
import alopeyk from "../../assets/alopeyk.svg";

import "./home.css";
import SwiperImage from "../../Hooks/Swiper";
const Home = () => {
  const [bike, setBike] = useState(true);
  const [taxi, setTaxi] = useState(false);
  const [cargo, setCaro] = useState(false);
  const [post, setPost] = useState(false);
  const [frosh, setFrosh] = useState(false);
  const [anboh, setAnboh] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const clickHandlerBike = () => {
    setBike(true);
    setTaxi(false);
    setCaro(false);
    setPost(false);
    setFrosh(false);
    setAnboh(false);
    setIsActive(!isActive);
  };
  const clickHandlerTaxi = () => {
    setBike(false);
    setTaxi(true);
    setCaro(false);
    setPost(false);
    setFrosh(false);
    setAnboh(false);
  };
  const clickHandlerCargo = () => {
    setBike(false);
    setTaxi(false);
    setCaro(true);
    setPost(false);
    setFrosh(false);
    setAnboh(false);
  };
  const clickHandlerPost = () => {
    setBike(false);
    setTaxi(false);
    setCaro(false);
    setPost(true);
    setFrosh(false);
    setAnboh(false);
  };
  const clickHandlerFrosh = () => {
    setBike(false);
    setTaxi(false);
    setCaro(false);
    setPost(false);
    setFrosh(true);
    setAnboh(false);
  };
  const clickHandlerAnboh = () => {
    setBike(false);
    setTaxi(false);
    setCaro(false);
    setPost(false);
    setFrosh(false);
    setAnboh(true);
  };

  return (
    <Layout>
      {/* Home section  */}
      <section>
        <div className="home">
          <div className="home-section">
            {bike && (
              <>
                <div className="home-right">
                  <h1>سریع ارسال بکنید</h1>
                  <p> با پیک موتوری مرسوله ها را آسان به مقصد برسانید</p>
                  <button className="btn btn-primary ">ثبت درخواست</button>
                  <span>
                    درباره الوپیک بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={bikeimage} alt="" />
                  </div>
                </div>
              </>
            )}
            {taxi && (
              <>
                <div className="home-right">
                  <h1>سریع ب مقصد برسید </h1>
                  <p>با تاکسی موتوری به سرعت از ترافیک شهری عبور کنید</p>
                  <button className="btn btn-primary"> ثبت درخواست </button>
                  <span>
                    درباره الوپیک بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={taxiImage} alt="" />
                  </div>
                </div>
              </>
            )}

            {cargo && (
              <>
                <div className="home-right">
                  <h1> بارها را جا‌به‌جا کنید</h1>
                  <p>با وانت، بار‌های سنگین را آسان و مطمئن جا‌به‌جا کنید </p>
                  <button className="btn btn-primary"> ثبت درخواست </button>
                  <span>
                    درباره الووانت بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={cargoImage} alt="" />
                  </div>
                </div>
              </>
            )}
            {post && (
              <>
                <div className="home-right">
                  <h1>آنلاین پست کنید</h1>
                  <p>بدون مراجعه حضوری مرسوله‌های خود را پست کنید</p>
                  <button className="btn btn-primary"> ثبت درخواست </button>
                  <span>
                    درباره الوپست بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={postImage} alt="" />
                  </div>
                </div>
              </>
            )}
            {frosh && (
              <>
                <div className="home-right">
                  <h1>هزینه را در محل بگیرید</h1>
                  <p>تحویل کالا و دریافت هزینه از مشتری را به ما بسپارید</p>
                  <button className="btn btn-primary"> ثبت درخواست </button>
                  <span>
                    درباره الوفروش بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={forshImage} alt="" />
                  </div>
                </div>
              </>
            )}
            {anboh && (
              <>
                <div className="home-right">
                  <h1>سفارش انبوه</h1>
                  <p>مرسوله‌های خود را یک جا، ارزان و سریع ارسال کنید</p>
                  <button className="btn btn-primary"> ثبت درخواست </button>
                  <span>
                    درباره سفارش انبوه بیشتر بدانید <BsArrowLeft />
                  </span>
                </div>
                <div className="home-left">
                  <div className="home-left-image">
                    <img src={anbohImage} alt="" />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="buttons">
            <button
              className="btn flexx "
              onClick={clickHandlerBike}
              name={bike}
            >
              <span> الوپیک</span>
              <span>
                <RiEBike2Line size={"2rem"} />
              </span>
            </button>
            <button
              className="btn flexx"
              onClick={clickHandlerTaxi}
              name={taxi}
            >
              <span> الوتاکسی</span>
              <span>
                <GiFullMotorcycleHelmet size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerCargo}>
              <span> الووانت</span>
              <span>
                <FaTruckPickup size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerPost}>
              <span> الوپست</span>
              <span>
                <MdLocalPostOffice size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerFrosh}>
              <span> الوفروش</span>
              <span>
                <BiReceipt size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerAnboh}>
              <span> سفارش انبوه</span>
              <span>
                <BiUnite size={"2rem"} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Biznes section */}
      <Bizines />

      {/* types section */}
      <Types />

      {/* share section */}
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
      {/* joined */}
      <section>
        <div className="section-joined">
          <div className="joined-right">
            <div className="joined-right-title">
              <h1>عضوی از ما شوید</h1>
              <p>
                الوپیک با بیش از
                <b> 4 میلیون کاربر</b> و<b> 150 هزار سفیر</b> بزرگترین سامانه
                حمل‌و‌نقل در ایران است. شما هم عضوی از این خانواده بزرگ شوید.
              </p>
            </div>
            <div className="joined-right-btn">
              <button className="btn btn-primary ms-3">ثبت نام کاربران</button>
              <button className="btn btn-info">ثبت نام سفیران</button>
            </div>
          </div>
          <div className="joined-left">
            <div className="joined-left-img">
              <SwiperImage />
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Home;
