import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

export const Logo = () => (
  <Link className={s.link} to="/">
    <img className={s.img} src="/img/logo.svg" alt="Логотип Koff" />
  </Link>
);
