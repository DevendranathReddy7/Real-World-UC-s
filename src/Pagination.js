import React from "react";
import "./Pagination.css";
const Pagination = ({ data }) => {
  return (
    <div>
      {data?.products.map((prd) => (
        <div className="products" key={prd.id}>
          <div>
            <img src={prd.images[1] || prd.images[0]} />
            <p>
              {prd.title.length > 13
                ? `${prd.title.slice(0, 13)}... `
                : prd.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Pagination;
