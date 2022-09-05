import React from "react";
import image1 from "../../../assets/image1.webp";
import image3 from "../../../assets/image3.webp";
import image4 from "../../../assets/image4.webp";
import image5 from "../../../assets/image5.webp";
import image6 from "../../../assets/image6.webp";
import image7 from "../../../assets/image7.webp";
import image8 from "../../../assets/image8.webp";
import image9 from "../../../assets/image9.webp";
import image10 from "../../../assets/image10.webp";
const Bizines = () => {
  return (
    <section>
      <div className="bizines">
        <div className="row">
          <div className="right col-6">
            <div className="image-item">
              <div>
                <img src={image5} alt="" />
              </div>
              <div>
                <img src={image1} alt="" style={{ marginTop: "-3rem" }} />
              </div>
              <div>
                <img src={image4} alt="" />
              </div>
              <div>
                <img src={image7} alt="" />
              </div>
              <div className="center">
                <img src={image10} alt="" />
              </div>
              <div>
                <img src={image6} alt="" />
              </div>
              <div>
                <img src={image9} alt="" />
              </div>
              <div>
                <img src={image3} alt="" />
              </div>
              <div>
                <img src={image8} alt="" />
              </div>
            </div>
          </div>
          <div className=" left col-6">
            <h1>الوپیک برای کسب‌و‌کار‌ها</h1>
            <p>
              با خدمات کسب‌و‌کار الوپیک مرسوله‌های خود را ارزان و سریع به دست
              مشتریان برسانید.
            </p>
            <button>بیشتر بدانید</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bizines;
