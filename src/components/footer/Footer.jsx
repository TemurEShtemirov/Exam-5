import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../img/Logo.png";
import Instagram from "../img/Instagram.png";
import VK from "../img/vk.png";
import Telegram from "../img/Telegram.png";
import WhatsApp from "../img/Whatsapp.png";
import Lang from "../img/Lang.png";
import "../css/Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col xxl-3">
            <img src={Logo} alt={Logo} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col xxl-3">
            <ul className="nav flex-column text-dark    ">
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/">
                  Избранное
                </Link>
              </li>
              <li className="nav-item">
                <li className="nav-link" to="/selected" />
                <Link to="/selected" className="text-dark"> Корзина</Link>
              </li>
              <li className="nav-item">
                <li className="nav-link" to="/contact" />
                <Link to="/contact" className="nav-link text-dark">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col xxl-3">
            <Link to="/service-requirements" className="nav-link text-dark">
              Условия сервиса
            </Link>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <img src={Lang} alt={Lang} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Каз
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Рус
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark ">Eng</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col xxl-3">
            <a href="www.vk.com">
              <img src={VK} alt={VK} className="vk" />
            </a>
            <a href="www.instagram.com">
              <img src={Instagram} alt={Instagram} className="instagram" />
            </a>
            <a href="www.telegram.com">
              <img src={Telegram} alt={Telegram} className="telegram" />
            </a>
            <a href="www.whatsapp.com">
              <img src={WhatsApp} alt={WhatsApp} className="whatsapp" />
            </a>
          </div>
        </div>
      </footer>
      <Outlet />
    </>
  );
}
