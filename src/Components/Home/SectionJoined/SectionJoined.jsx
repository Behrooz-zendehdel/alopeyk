import React from "react";
import SwiperImage from "../../../Hooks/Swiper";
const SectionJoined = () => {
  return (
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
  );
};

export default SectionJoined;
