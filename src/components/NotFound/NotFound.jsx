import { Link } from "react-router-dom";
import s from "./NotFound.module.scss";
import { Container } from "../../views/Container/Container";

export const NotFound = () => (
  <Container className={s.container}>
    <h1>Ошибка 404. Страница не найдена.</h1>
    <Link to="/" className={s.link}>
      Вернуться на главную
    </Link>
  </Container>
);
