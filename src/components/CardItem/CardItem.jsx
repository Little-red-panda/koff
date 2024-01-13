import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <a className={`${s.link} ${s.link_img}`} href="#">
      <picture>
        <source
          media="(min-width: 820px)"
          type="image/webp"
          srcSet="img/armchair_desktop.png"
        />
        <source
          media="(min-width: 580px)"
          type="image/webp"
          srcSet="img/armchair_tablet.png"
        />
        <source
          media="(max-width: 579px)"
          type="image/webp"
          srcSet="img/armchair_mobile.png"
        />
        <img
          src="img/armchair_mobile.png"
          alt="Кресло с подлокотниками"
          className={s.img}
        />
      </picture>
      <button className={s.favorite}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.41325 12.8733C8.18658 12.9533 7.81325 12.9533 7.58659 12.8733C5.65325 12.2133 1.33325 9.45998 1.33325 4.79332C1.33325 2.73332 2.99325 1.06665 5.03992 1.06665C6.25325 1.06665 7.32658 1.65332 7.99992 2.55998C8.67325 1.65332 9.75325 1.06665 10.9599 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41325 12.8733Z"
            fill="white"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </a>
    <div className={s.info}>
      <h3 className={s.title}>
        <a className={s.link} href="#">
          Кресло с подлокотниками
        </a>
      </h3>
      <p className={s.price}>5 000 ₽</p>
    </div>
    <button className={s.button}>В корзину</button>
  </article>
);
