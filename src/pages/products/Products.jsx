import React from 'react'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
// import Layout from "../../pages/layout/Layout";
export default function Home() {
  return (

<>
<div className="Navbar">
  {/* <Layout/> */}
</div>

    <div
      style={{
        backgroundColor: "rgba(234, 234, 234, 1)",
      }}
    >
      <Main />
      <div className="" style={{marginTop:"150px" , paddingBottom:"100px"}}>
      </div>
        <Footer />
    </div>
</>

  );
}
