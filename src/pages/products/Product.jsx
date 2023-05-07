import React from "react";
import "../../components/css/Product.css";
import { Col, Row } from "antd";
import Img1 from "../../components/img/1_1.png";
import Img2 from "../../components/img/2.png";
import Img3 from "../../components/img/3.png";
import Img4 from "../../components/img/4.png";
import Img5Logo from "../../components/img/5Logo.png";
import Img6 from "../../components/img/6.png";
import CartImg from "../../components/img/CartImg.png";
import { Collapse } from "antd";
import Footer from "../../components/footer/Footer";

const { Panel } = Collapse;
const text = `
Активное шумоподавление: Нет

`;
const text2 = `
  Вес: 10 гр
`;

const text3 = `
  Влагозащита: Нет
`;

const text4 = `
  Длина кабеля: 1.2 м
`;

const text5 = `
  Комплектация: Наушники
`;
const text6 = `
  Материал корпуса: Пластик, резина
`;
const text7 = `
  Микрофон: Да
`;

const text8 = `
  Назначение: Проводные наушники
`;
const text9 = `
  Ответить/закончить разговор: Да
`;
const text10 = `
  Разъем наушников: Lightning
`;
const text11 = `
  Регулятор громкости: Да
`;
const text12 = `Тип крепления: Без крепления`;
const text13 = `Тип наушников: Вкладыши ("таблетки")`;
const text14 = `Тип подключения: Проводное`;
const text15 = `Частотный диапазон: 20 Гц - 20000 Гц`;
const text16 = `Чувствительность: 109 дБ`;
export default function Product() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
 
      <main classname="main" style={{backgroundColor:"rgba(234, 234, 234, 1)"}}>
        <p
          classname="Avtoderjatel"
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingLeft: "200px",
            color: " #838383",
            marginTop: "50px",
          }}
        >
          Автодержатель
        </p>
        <section
          classname="products "
          style={{
            width: "1110px",
            height: "668px",
            borderRadius: " 30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            marginLeft: "150px",
            marginTop: "20px",
            marginBottom: "23px",
          }}
        >
          {/* <div
            classname="row "
         
            style={{
              width: "1110px",
              height: "668px",
              borderRadius: " 30px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
              marginLeft: "150px",
              marginTop: "20px",
              marginBottom: "23px",
            }}
          >
            <div classname="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <img src={Img1} alt={Img1} />
            </div>
            <div classname="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <img src={Img2} alt={Img2} />
            </div>
            <div classname="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <img src={Img3} alt={Img3} />
            </div>
            <div classname="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <img src={Img5Logo} alt={Img5Logo} />
            </div>

            <div classname="cols-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <img src={Img4} alt={Img4} />
            </div>
            <div classname="cols-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <img src={Img6} alt={Img6} />
            </div>

            <h1 classname="h1Poduct">BOROFONE BH32</h1>
            <p classname="p1Product">2 927 ₸</p>
            <p classname="p2Product">-20%</p>
          </div> */}

          <Row>
            <Col span={6}>
              <img src={Img1} alt={Img1} />
            </Col>
            <Col span={6}>
              <img src={Img2} alt={Img2} />
            </Col>
            <Col span={6}>
              <img src={Img3} alt={Img3} />
            </Col>
            <Col span={6}>
              <img src={Img5Logo} alt={Img5Logo} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <img src={Img4} alt={Img4} />
            </Col>
            <Col span={12}>
              <img src={Img6} alt={Img6} />
            </Col>
          </Row>

          <h1
            classname="h1Poduct"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "30px",
              color: "#1C1C27",
              paddingLeft: "50px",
              paddingTop: "20px",
            }}
          >
            BOROFONE BH32
          </h1>
          <p
            classname="p1Product"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "28px",
              lineHeight: "34px",
              textAlign: "center",
              marginLeft: "850px",
              color: " #DF6464",
            }}
          >
            2 927 ₸
          </p>
          <p
            classname="p2Product"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              marginLeft: " 950px",
              color: "#DF6464",
            }}
          >
            -20%
          </p>
        </section>
        <section classname="section2Product">
          <div classname=" row">
            <div
              className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 "
              style={{
                marginLeft: "126px",
              }}
            >
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel
                  header="Описание и характеристики"
                  key="1"
                  style={{
                    backgroundColor: "#F9F9F9",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "15px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",

                    color: " #1C1C27",
                  }}
                >
                  <p className="acordionP">{text}</p>
                  <p className="acordionP">{text2}</p>
                  <p className="acordionP">{text3}</p>
                  <p className="acordionP">{text4}</p>
                  <p className="acordionP">{text5}</p>
                  <p className="acordionP">{text6}</p>
                  <p className="acordionP">{text7}</p>
                  <p className="acordionP">{text8}</p>
                  <p className="acordionP">{text9}</p>
                  <p className="acordionP">{text10}</p>
                  <p className="acordionP">{text11}</p>
                  <p className="acordionP">{text12}</p>
                  <p className="acordionP">{text13}</p>
                  <p className="acordionP">{text14}</p>
                  <p className="acordionP">{text15}</p>
                  <p className="acordionP">{text16}</p>
                </Panel>
              </Collapse>
            </div>

            <div
              classname="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 col2"
              style={{
                marginLeft: "1222px",
                top: "-100px",
              }}
            >
              <a
                href
                classname="aBuy"
                style={{
                  backgroundColor: " #101010",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  paddingTop: "13px",
                  paddingBottom: "14px",
                  paddingLeft: "87.77px",
                  paddingRight: "86.44px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "-100px",
                  fontSize: "15px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#FFFFFF",
                  marginBottom: "100px",
                }}
              >
                Купить!
              </a>
              <br />
              <a
                href
                classname="aAdToCart"
                style={{
                  marginTop: "20px",
                  backgroundColor: " #101010",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  paddingTop: "13px",
                  paddingBottom: "14px",
                  paddingLeft: "53.11px",
                  paddingRight: "16.16px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                <img src={CartImg} alt={CartImg} /> Добавить в корзину
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
