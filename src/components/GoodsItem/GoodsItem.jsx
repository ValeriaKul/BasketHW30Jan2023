import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function GoodsItem({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  category,
  thumbnail,
  priceWithDisc,
  deleteProduct,
}) {
  return (
    <div className="card">
      <div className="card_img">
        <img className="card_img_img" src={thumbnail} alt={title} />
      </div>
      <div className="card_title">
        <span>{title}</span>
      </div>
      <div className="card_rating_total">
        <div className="card_rating_star">
          <span></span>
        </div>
        <div className="card_rating_count">
          <p className="card_p_raiting">{rating}</p>
        </div>
      </div>
      <div className="card_descr_container">
        <p className="card_descr_item">{description}</p>
      </div>
      <div className="card_category_link">
        <a href="./Basket.jsx">{category}</a>
      </div>
      <div className="card_price">
        <span className="card_price_with_disc">
          {priceWithDisc.toFixed(2)} €
        </span>
        <span className="card_price_without_disc">{price.toFixed(2)} €</span>
      </div>
      <div className="card_btn">
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteProduct(id)}
          className="fa-2x fa1"
        />
      </div>
    </div>
  );
}
