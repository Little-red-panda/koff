import { Link } from "react-router-dom";
import { API_URL } from "../../const";
import { formatPrice } from "../../helper/helper";
import s from "./CardItem.module.scss";

export const CardItem = ({ name, images: [image], price, id }) => (
  <article className={s.card}>
    <Link className={`${s.link} ${s.link_img}`} to={`/product/${id}`}>
      <img src={API_URL + image} alt={name} className={s.img} />
      <button className={s.favorite}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.41325 12.8733C8.18658 12.9533 7.81325 12.9533 7.58659 12.8733C5.65325 12.2133 1.33325 9.45998 1.33325 4.79332C1.33325 2.73332 2.99325 1.06665 5.03992 1.06665C6.25325 1.06665 7.32658 1.65332 7.99992 2.55998C8.67325 1.65332 9.75325 1.06665 10.9599 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41325 12.8733Z"
            fill="white"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Link>
    <div className={s.info}>
      <h3 className={s.title}>
        <Link className={s.link} to="#">
          {name}
        </Link>
      </h3>
      <p className={s.price}>{formatPrice(price)}</p>
    </div>
    <button className={s.button}>В корзину</button>
  </article>
);
