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
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import "./home.css";
const Home = () => {
  const [bike, setBike] = useState(true);
  const [taxi, setTaxi] = useState(false);
  const [cargo, setCaro] = useState(false);
  const [post, setPost] = useState(false);
  const [frosh, setFrosh] = useState(false);
  const [anboh, setAnboh] = useState(false);

  const clickHandlerBike = () => {
    setBike(true);
    setTaxi(false);
    setCaro(false);
    setPost(false);
    setFrosh(false);
    setAnboh(false);
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
      <div className="home">
        <div className="home-section">
          {bike && (
            <>
              <div className="home-right">
                <h1>سریع ارسال بکنید</h1>
                <p> با پیک موتوری مرسوله ها را آسان به مقصد برسانید</p>
                <button className="btn btn-primary">ثبت درخواست</button>
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
          <button className="btn flexx " onClick={clickHandlerBike} name={bike}>
            <span> الوپیک</span>
            <span>
              <RiEBike2Line size={"2rem"} />
            </span>
          </button>
          <button
            className="btn flexx active"
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
              <RiEBike2Line size={"2rem"} />
            </span>
          </button>
          <button className="btn flexx" onClick={clickHandlerFrosh}>
            <span> الوفروش</span>
            <span>
              <RiEBike2Line size={"2rem"} />
            </span>
          </button>
          <button className="btn flexx" onClick={clickHandlerAnboh}>
            <span> سفارش انبوه</span>
            <span>
              <RiEBike2Line size={"2rem"} />
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
