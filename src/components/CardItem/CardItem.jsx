import { Link } from "react-router-dom";
import { API_URL } from "../../const";
import s from "./CardItem.module.scss";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { CartButton } from "../CartButton/CartButton";

export const CardItem = ({ name, images: [image], price, id }) => (
  <article className={s.card}>
    <Link className={`${s.link} ${s.link_img}`} to={`/product/${id}`}>
      <img src={API_URL + image} alt={name} className={s.img} />
    </Link>
    <FavoriteButton className={s.favorite} id={id} />
    <div className={s.info}>
      <h3 className={s.title}>
        <Link className={s.link} to="#">
          {name}
        </Link>
      </h3>
      <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
    </div>
    <CartButton className={s.button} id={id} />
  </article>
);
