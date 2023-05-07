import React, { useState } from "react";
import KorzinkaBosh from "../../components/img/KorzinkaBosh.png";
import { Link } from "react-router-dom";
import Map from "../../components/img/Map.png";
import { Collapse } from 'antd';
import Footer from "../../components/footer/Footer";
const { Panel } = Collapse;
const text = `
 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officia nihil impedit quam molestias. Voluptatibus a libero, odio temporibus odit nisi ab asperiores. Facilis suscipit totam placeat provident deserunt soluta?
`;

export default function Selected() {
  const [cart, setCart] = useState([]);
 const onChange = (key) => {
    console.log(key);
  };
  function DontShow() {
   
      return (
        <>
          <img style={{
            marginLeft:"560px"
          }} className="text-center" src={KorzinkaBosh} alt={KorzinkaBosh} />
          <p className="fs-1 text-center">Корзина пуста</p>
          <p className="text-secondary text-center" style={{
            marginBottom:"100px"
          }}>
            Но это никогда не поздно исправить {":)"}
          </p>
          <Link
            to="/"
            className="text-center mt-5"
            style={{
              paddingBottom: "20px",
              paddingTop: "21px",
              paddingLeft: "40px",
              paddingRight: "40px",
              backgroundColor: "#101010",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
              borderRadius: " 20px",
              marginTop: "40px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#FFFFFF",
              marginLeft:"625px",
  
            }}
          >
            В каталог товаров
          </Link>


          <Footer className="mt-5"/>
        </>
      );
    }
    
   function ShowCart() {
      return (
        <>
          <div
            className=""
            style={{
              backgroundColor: "rgba(234, 234, 234, 1)",
            }}
          >
            <main
              style={{
                marginBottom: "150px",
              }}
            >
              <p>Корзина</p>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  {/* <img src={} alt="" />
                <img src={} alt="" /> */}
                <h1> </h1>
                <p></p>
                <p></p> 

                  <button>minus</button>
<button >plus</button>
<p></p>
                </div>
                <div
                  className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
                  style={{
                    width: "348.98px",
                    height: "114px",
                    borderRadius: "30px",
                    marginLeft: "130px",
                    backgroundColor: " #FFFFFF",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h1> ИТОГО : </h1>
                  <Link
                    className="/pay"
                    style={{
                      paddingTop: "22px",
                      paddingBottom: "22px",
                      paddingLeft: "14.22px",
                      paddingRight: "12.92px",
                      backgroundColor: "#101010",
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                      borderRadius: "20px",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "17px",
                      lineHeight: "21px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Перейти к оформлению
                  </Link>
                </div>
              </div>
              <div
                className="dostavka"
                style={{
                  width: "633px",
                  height: "288px",
                  borderRadius: "30px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "40px",
                  marginLeft: "165px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: " #000000",
                  }}
                >
                  Доставка
                </p>
                <img src={Map} alt={Map} />

                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel
                    header="Доставка курьером  "
                    key="1"
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: " #000000",
                    }}
                  >
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </div>
            </main>
            <div
              style={{
                marginTop: "50px",
              }}
            >
              <Footer />
            </div>
          </div>
        </>
      );
    }
  

  return (
    <>
    {cart ? <DontShow/> : <ShowCart/>}  
    </>
  );
}
