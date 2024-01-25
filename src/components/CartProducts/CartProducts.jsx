import { API_URL } from "../../const";
import s from "./CartProducts.module.scss";

export const CartProducts = ({ products }) => (
  <ul className={s.products}>
    {products.map((product) => (
      <li key={product.id} className={s.product}>
        <img
          className={s.img}
          src={API_URL + product.images[0]}
          alt={product.name}
        />

        <h3 className={s.titleProduct}>{product.name}</h3>
        <p className={s.price}>{product.price.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>{product.article}</p>

        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>{product.quantity}</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    ))}
  </ul>
);
