import React from "react";
import "../../components/css/Ordering.css";
import Map3 from "../../components/img/Map3.png";
import { Col, Row } from "antd";
import Location from "../../components/img/loaction.png";
import Visa from "../../components/img/visa.png";
import CreditCard from "../../components/img/Credit.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";


export default function Ordering() {
  return (
    <>

      <main>
        <div className="row OrderingRow">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xll-6 col2Ordering">
            <div className="div1">
              <p className="p1OrderCol2">Ваш заказ</p>
              <p className="p2OrderCol2">Доставка :</p>
              <p className="p3OrderCol2">К оплате :</p>
            </div>
            <div className="div2">
              <p className="p4OrderCol2">Способ оплаты</p>
              <img src={Visa} alt="Visa Card" />
              <p className="VisaP">Счет на kaspi.kz</p>
              <select className="Cardlar">
                <option selected value="card" className="card">
                  <img src={CreditCard} alt={CreditCard} />
                  выбрать карту
                </option>
                <option value="uzcard" className="uzcard">
                  UzCard
                </option>
                <option value="humo" className="humo">
                  Humo
                </option>
                <option value="anorbank" className="anorbank">
                  Anorbank
                </option>
                <option value="mastercard" className="mastercard">
                  MasterCard
                </option>
              </select>
            </div>
            <div className="div3">
              <p>Номер получателя</p>
              <input
                type="number"
                placeholder="+7 ___ ___ __ __"
                className="Nomer"
              />
            </div>
            <div className="knopka">
              <Link
                to="/ordered"
                className="text-light"
              >
                Закончить оформление
              </Link>
            </div>
          </div>
          <p className="orderringP mt-5">Оформление заказа</p>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xll-6 colOrdering">
            <p className="dostavka">Доставка курьером</p>
            <img className="map3" src={Map3} alt={Map3} />
            <img className="lakatsiya" src={Location} alt={Location} />
            <p className="adres">Адрес доставки</p>

            <select className="selectCity">
              <option value="city " selected className="citySelect">
                Город
              </option>
              <option value="manhattan" className="manhattan">
                Manhattan
              </option>
              <option value="boston" className="boston">
                Boston
              </option>
              <option value="Los Angeles" className="LosAngeles">
                Los Angeles
              </option>
              <option value="California" className="California">
                California
              </option>
            </select>
            <br />
            <input type="text" placeholder="Улица / Район" className="Street" />
            <Row>
              <Col span={12}>
                <input type="number" placeholder="Дом" className="Dom" />
              </Col>
              <Col span={12}>
                <input
                  type="number"
                  placeholder="Подъезд"
                  className="Podeyzd"
                />
              </Col>
            </Row>
          </div>
        </div>
      </main>
      <div className="footerOrdering">
        <Footer />
      </div>
      <Outlet />
    </>
  );
}
