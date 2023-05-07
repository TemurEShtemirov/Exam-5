import React, { useState } from "react";
import { Spin } from "antd";
import "../../components/css/ServiceRequirements.css";
import Footer from "../../components/footer/Footer";

export default function ServiceRequirements() {
  const [loadUslovia, setLoadUslovia] = useState(false);

  function LoaderUslovia() {
    return (
      <>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </>
    );
  }

  function ShowUslovia() {
    return (
      <>
    
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cols " style={{
            marginTop:"100px"
          }}>
            <p className="p1">Условия сервиса</p>
            <p className="p2">
              Задача организации, в особенности же курс на
              социально-ориентированный национальный проект требует от <br />
              нас системного анализа модели развития! Таким образом, постоянное
              информационно-техническое обеспечение <br /> нашей деятельности
              требует от нас анализа системы масштабного изменения ряда
              параметров! С другой стороны <br /> социально-экономическое
              развитие напрямую зависит от всесторонне сбалансированных
              нововведений?
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cols" style={{
            marginTop:"100px"
          }}>
            <p className="p1">Условия доставки</p>
            <p className="p2">
              Задача организации, в особенности же курс на
              социально-ориентированный национальный проект требует от <br />
              нас системного анализа модели развития! Таким образом, постоянное
              информационно-техническое обеспечение <br /> нашей деятельности
              требует от нас анализа системы масштабного изменения ряда
              параметров! С другой стороны <br /> социально-экономическое
              развитие напрямую зависит от всесторонне сбалансированных
              нововведений?
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cols" style={{
            marginTop:"100px"
          }}>
            <p className="p1">Условия возврата</p>
            <p className="p2">
              Задача организации, в особенности же курс на
              социально-ориентированный национальный проект требует от <br />
              нас системного анализа модели развития! Таким образом, постоянное
              информационно-техническое обеспечение <br /> нашей деятельности
              требует от нас анализа системы масштабного изменения ряда
              параметров! С другой стороны <br /> социально-экономическое
              развитие напрямую зависит от всесторонне сбалансированных
              нововведений?
            </p>
          </div>
        </div>

        <div className="">
          <Footer/>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        {loadUslovia ? <LoaderUslovia /> : <ShowUslovia/>}
      </div>
    </>
  );
}
