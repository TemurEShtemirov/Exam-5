import React, { useState, useEffect } from "react";
import "../../components/css/Card.css";



const Card = () => {
  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;


  

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }else{
        componentMounted = false ;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="spinner-border text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  };

  const Showproducts = () => {
    return (
      <>
        {filter.map((products) => {
          return (
            <>
              <div
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 card mt-3 mb-3 ms-3 me-3 Card"
                style={{ width: "18rem" }}
              >
                <img
                  src={products.thumbnail}
                  className="card-img-top"
                  alt={products.brand}
                />
                <div className="card-body">
                  <h5 className="card-title fs-2 ">{products.brand}</h5>
                  <h4 className="card-title ">{products.title}</h4>
                  <p className="card-text">{products.description}</p>
                  <p className="card-title text-secondary">
                    {products.category}
                  </p>
                  <p className="card-text">{products.price} $</p>
                 
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>
    </div>
  );
};

export default Card;
