import React from "react";

const Demolist = ({ title, products }) => {
  console.log(products);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {products && products.length > 0 ? (
          products.map((data) => {
            return (
              <div key={data.id}>
                <ul>
                  <li>{data.title}</li>
                  <li>{data.price}</li>
                  <li>{data.rating.rate}</li>
                  <li>{data.description}</li>
                </ul>
                <img
                  style={{ width: "200px" }}
                  src={data.image}
                  alt="product image"
                />
              </div>
            );
          })
        ) : (
          <p>products not available</p>
        )}
      </div>
    </div>
  );
};

export default Demolist;
