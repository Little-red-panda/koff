import s from "./CartPlace.module.scss";

export const CartPlace = ({ totalPrice, totalCount }) => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Оформление</h3>
    <div className={s.placeInfo}>
      <p>{totalCount} товара на сумму:</p>
      <p>{totalPrice}&nbsp;₽</p>
    </div>
    <p className={s.placeDelivery}>Доставка 0 р</p>
    <button className={s.placeBtn}>Оформить заказ</button>
  </div>
);
