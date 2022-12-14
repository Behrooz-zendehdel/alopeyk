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

import "./home.css";


import SectionShare from "./sectionShare/SectionShare";
import SectionJoined from "./SectionJoined/SectionJoined";
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
                  <h1>???????? ?????????? ??????????</h1>
                  <p> ???? ?????? ???????????? ???????????? ???? ???? ???????? ???? ???????? ??????????????</p>
                  <button className="btn btn-primary ">?????? ??????????????</button>
                  <span>
                    ???????????? ???????????? ?????????? ???????????? <BsArrowLeft />
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
                  <h1>???????? ?? ???????? ?????????? </h1>
                  <p>???? ?????????? ???????????? ???? ???????? ???? ???????????? ???????? ???????? ????????</p>
                  <button className="btn btn-primary"> ?????? ?????????????? </button>
                  <span>
                    ???????????? ???????????? ?????????? ???????????? <BsArrowLeft />
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
                  <h1> ?????????? ???? ?????????????????? ????????</h1>
                  <p>???? ?????????? ??????????????? ?????????? ???? ???????? ?? ?????????? ?????????????????? ???????? </p>
                  <button className="btn btn-primary"> ?????? ?????????????? </button>
                  <span>
                    ???????????? ?????????????? ?????????? ???????????? <BsArrowLeft />
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
                  <h1>???????????? ?????? ????????</h1>
                  <p>???????? ???????????? ?????????? ????????????????????? ?????? ???? ?????? ????????</p>
                  <button className="btn btn-primary"> ?????? ?????????????? </button>
                  <span>
                    ???????????? ???????????? ?????????? ???????????? <BsArrowLeft />
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
                  <h1>?????????? ???? ???? ?????? ????????????</h1>
                  <p>?????????? ???????? ?? ???????????? ?????????? ???? ?????????? ???? ???? ???? ??????????????</p>
                  <button className="btn btn-primary"> ?????? ?????????????? </button>
                  <span>
                    ???????????? ?????????????? ?????????? ???????????? <BsArrowLeft />
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
                  <h1>?????????? ??????????</h1>
                  <p>????????????????????? ?????? ???? ???? ?????? ?????????? ?? ???????? ?????????? ????????</p>
                  <button className="btn btn-primary"> ?????? ?????????????? </button>
                  <span>
                    ???????????? ?????????? ?????????? ?????????? ???????????? <BsArrowLeft />
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
              <span> ????????????</span>
              <span>
                <RiEBike2Line size={"2rem"} />
              </span>
            </button>
            <button
              className="btn flexx"
              onClick={clickHandlerTaxi}
              name={taxi}
            >
              <span> ????????????????</span>
              <span>
                <GiFullMotorcycleHelmet size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerCargo}>
              <span> ??????????????</span>
              <span>
                <FaTruckPickup size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerPost}>
              <span> ????????????</span>
              <span>
                <MdLocalPostOffice size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerFrosh}>
              <span> ??????????????</span>
              <span>
                <BiReceipt size={"2rem"} />
              </span>
            </button>
            <button className="btn flexx" onClick={clickHandlerAnboh}>
              <span> ?????????? ??????????</span>
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

      <SectionShare />

      {/* joined */}

      <SectionJoined />
    </Layout>
  );
};

export default Home;
