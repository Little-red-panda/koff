import { Container } from "../../views/Container/Container";
import s from "./ErrorScreen.module.scss";

export const ErrorScreen = ({ error }) => (
  <Container>
    <div className={s.error}>Ошибка: {error}</div>
  </Container>
);
