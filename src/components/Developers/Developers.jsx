import s from "./Developers.module.scss";

export const Developers = () => (
  <ul>
    <li className={s.designer}>
      Designer:{" "}
      <a className={s.link} href="#" target="_blank" rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li>
      Developer:{" "}
      <a className={s.link} href="#" target="_blank" rel="noreferrer">
        Daria Pianova
      </a>
    </li>
  </ul>
);
