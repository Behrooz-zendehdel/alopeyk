import React, { useState } from "react";

const Home2 = () => {
  const [bikes, setBikes] = useState([
    {
      title: "سریع ارسال بکنید",
      description: "با پیک موتوری مرسوله ها را آسان به مقصد برسانید",
      textBtn: "ثبت درخواست",
      detailTrip: "درباره الوپیک بیشتر بدانید",
      image: "../assets/bike.webp",
    },
  ]);
  const [taxis, setTaxis] = useState([
    {
      title: "سریع ب مقصد برسید  ",
      description: "با تاکسی موتوری به سرعت از ترافیک شهری عبور کنید",
      textBtn: "ثبت درخواست",
      detailTrip: "درباره الوتاکسی بیشتر بدانید",
      image: "../assets/taxi.webp",
    },
  ]);
  const [cargos, setCargos] = useState([
    {
      title: "بارها را جا‌به‌جا کنید",
      description: "با وانت، بار‌های سنگین را آسان و مطمئن جا‌به‌جا کنید ",
      textBtn: "ثبت درخواست",
      detailTrip: "درباره الووانت بیشتر بدانید",
      image: "../assets/cargo.webp",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefualt();
  };

  const handleChangeBike = () => {
    setBikes(bikes);
  };
  const handleChangeTaxi = () => {
    setTaxis(taxis);
  };
  const handleChangeCargo = () => {
    setCargos(cargos);
  };

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit}>
        <button value={bikes} onChange={handleChangeBike}>
          bike
        </button>
        <button value={taxis} onChange={handleChangeTaxi}>
          cargo
        </button>
        <button value={cargos} onChange={handleChangeCargo}>
          taxi
        </button>
      </form>
    </div>
  );
};

export default Home2;
