import s from "./Navigation.module.scss";

export const Navigation = () => (
  <nav className={s.navigation}>
    <a className={s.link} href="/favorite">
      <span className={s.text}>Избранное</span>
      <span className={s.icon}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
    <a className={s.link} href="/cart">
      <span className={s.text}>Корзина</span>
      <span>(2)</span>
      <span className={s.icon}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.87329 1.33325L3.45996 3.75325"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.127 1.33325L12.5403 3.75325"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33301 5.23324C1.33301 3.9999 1.99301 3.8999 2.81301 3.8999H13.1863C14.0063 3.8999 14.6663 3.9999 14.6663 5.23324C14.6663 6.66657 14.0063 6.56657 13.1863 6.56657H2.81301C1.99301 6.56657 1.33301 6.66657 1.33301 5.23324Z"
            stroke="currentColor"
          />
          <path
            d="M6.50684 9.33325V11.6999"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M9.57324 9.33325V11.6999"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M2.33301 6.66675L3.27301 12.4267C3.48634 13.7201 3.99967 14.6667 5.90634 14.6667H9.92634C11.9997 14.6667 12.3063 13.7601 12.5463 12.5067L13.6663 6.66675"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </a>
  </nav>
);