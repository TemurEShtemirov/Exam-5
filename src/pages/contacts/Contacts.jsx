import React from 'react'
import Map2 from "../../components/img/map2.png";
import "../../components/css/contacts.css";
import Location from "../../components/img/loaction.png"
import Big1 from "../../components/img/Big1.png"
import Big2 from "../../components/img/Big2.png"
import Big3 from "../../components/img/Big3.png"
import Big from "../../components/img/Big.png";
import Alyo from "../../components/img/Allo.png"

import Footer from '../../components/footer/Footer';

export default function Contacts() {
  return (
    <>
      <main>
        <div className="row">
          <div
            className="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 box1"
            style={{
              paddingBottom: "50px",
            }}
          >
            <p className="ourOffice">Наш офис</p>
            <img src={Map2} alt={Map2} />
            <p className="addres">Аксай-3а, 62ф, Алматы, Казахстан </p>
            <img className="location" src={Location} alt={Location} />
            <p className="etaj">3 этаж 35 кабинет</p>
          </div>
          <div
            className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 media"
            style={{
              marginTop: "50px",
              marginLeft: "500px",
            }}
          >
            <a href="www.whatsapp.com" className="whatsappContact">
              <img src={Big1} alt={Big2} />
            </a>

            {/* <br /> */}
            <a href="www.vk.com" className="vkContact">
              <img src={Big2} alt={Big2} />
            </a>
            {/* <br /> */}
            <a href="www.instagram.com" className="instagramContact">
              <img src={Big3} alt={Big3} />
            </a>
            {/* <br /> */}
            <a href="www.telegram.com" className="telegramContact">
              <img src={Big} alt={Big} />
            </a>
          </div>
        </div>
        <div
          className="teNomer"
          style={{
            marginTop: "59.999px",
            marginLeft: "580px",
          }}
        >
          <a href="te:me +7 777 777 77 77" className="text-dark Alyo">
            <img src={Alyo} alt={Alyo} /> +7 777 777 77 77
          </a>
        </div>
      </main>
      <div className="footerContact" style={{
        marginTop:"100px"
      }}>
         <Footer />
      </div>
    </>
  );
}


