import React from "react";

export default function Basket({ goods }) {
  return (
    <div className="basket_container">
      <div className="basket_title">
        <p>MY BASKET</p>
      </div>
      <div className="basket_descr">
        <p>Total goods: {goods.length} </p>
        <p>
          Total amount: {goods.reduce((prev, curr) => prev + curr.price, 0)} €
        </p>
        <p>
          Total amount with discount:{" "}
          {goods
            .reduce((prev, curr) => prev + curr.priceWithDisc, 0)
            .toFixed(2)}{" "}
          €
        </p>
      </div>
    </div>
  );
}
