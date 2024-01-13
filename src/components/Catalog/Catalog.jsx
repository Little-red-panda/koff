import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";

export const Catalog = (props) => {
  const catalogList = props.catalog;
  const catalogItems = catalogList.map((item, index) => (
    <li key={`item_${index}`} className={s.item}>
      <a className={s.link} href="#">
        {item}
      </a>
    </li>
  ));
  return (
    <Container className={s.container}>
      <nav className={s.catalog}>
        <ul className={s.list}>{catalogItems}</ul>
      </nav>
    </Container>
  );
};
