import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";

export const Goods = ({ cards }) => (
  <section className={s.goods}>
    <Container>
      <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
      <ul className={s.list}>
        {cards.map((item) => (
          <li key={item.id}>
            <CardItem card={item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
