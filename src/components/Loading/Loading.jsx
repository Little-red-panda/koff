import s from "./Loading.module.scss";

export const Loading = () => (
  <div className={s.wrap}>
    <div className={s.spinner}></div>
  </div>
);
