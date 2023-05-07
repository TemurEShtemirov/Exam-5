import React, { useState } from "react";
import "../css/Main.css";
import BannerIphone from "../img/IphoneBanneer.png";
import Card from "../../pages/card/Card";

import { Spin } from "antd";

export default function Main() {
  const [loader, setLoader] = useState(false);

  const LoaderMain = () => {
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    );
  };
  const ShowMain = () => {
    return (
      <>
        <div
          className="container"
          style={{ backgroundColor: "rgba(234, 234, 234, 1)" }}
        >
          <section className="section1">
            <div className="banner">
              <img
                className="BannerIphone"
                src={BannerIphone}
                alt={BannerIphone}
              />
            </div>
          </section>
          <section className="section2">
            <div className="row">
              <p className="chexli">Чехлы</p>
              <Card />
            </div>
          </section>
          <section className="section3">
            <div className="row">
              <p className="Naushniki">Наушники</p>
              <Card />
            </div>
          </section>
          <section className="section4">
            <div className="row">
              <p className="BesprovodniyiNaushniki">Беспроводные наушники</p>
              <Card />
            </div>
          </section>
        </div>
      </>
    );
  };

  return (
    <div className="container">{loader ? <LoaderMain /> : <ShowMain />}</div>
  );
}
