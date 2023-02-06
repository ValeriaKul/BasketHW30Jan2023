import React from "react";
import { useEffect, useState } from "react";
import Basket from "../Basket/Basket";
import GoodsItem from "../GoodsItem/GoodsItem";

export default function GoodsContainer() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const newData = data.products;
      const goodsDB = newData.map(
        ({
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          category,
          thumbnail,
          images,
        }) => ({
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          category,
          thumbnail,
          images,
          count: 1,
          priceWithDisc: price - (price * discountPercentage) / 100,
        })
      );
      setGoods(goodsDB);
    })();
  }, []);

  const deleteProduct = (value) => {
    setGoods(goods.filter((el) => el.id !== value));
  };

  return (
    <div className="main">
      <div className="container">
        {goods.map((item) => (
          <GoodsItem key={item.id} {...item} deleteProduct={deleteProduct} />
        ))}
      </div>
      <div className="basket">
        <Basket goods={goods} />
      </div>
    </div>
  );
}
