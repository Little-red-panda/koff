import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";

export const Goods = () => {
  const goodsItems = [...Array(12)].map((index) => (
    <li key={`item_${index}`}>
      <CardItem />
    </li>
  ));
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>{goodsItems}</ul>
      </Container>
    </section>
  );
};
