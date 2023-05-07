import React from "react";
import "../../components/css/Ordered.css";
import Footer from "../../components/footer/Footer";


export default function Ordered() {
  return (
    <>
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 OrderedDiv"
          style={{
            width: " 830px",
            height: "95px",
            backgroundColor: "#FFFFFF",
            boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "30px",
            marginTop: "200px",
            marginLeft: "355px",
            paddingTop: "33px",
            paddingBottom: "41px",
            paddingLeft: "150px",
            fontfamily: "Montserrat ",
            fontstyle: "normal",
            fontweight: 600,
            fontsize: "17px",
            lineheight: "21px",
            textalign: " center",
            color: "#1C1C27",
          }}
        >
          <p>Номер вашего заказа №1, с Вами свяжется наш менеджер.</p>
        </div>
      </div>
      <div className="footerOrdered">
        <Footer />
      </div>
    </>
  );
}
