import "swiper/css";
import s from "./Card.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardData } from "../../store/card/card.slice";
import { Container } from "../Container/Container";
import { Slider } from "../../components/Slider/Slider";
import { Loading } from "../../components/Loading/Loading";
import { formatPrice } from "../../helper/helper";

export const Card = () => {
  const { productId } = useParams();

  const {
    data: { article, name, price, characteristics, images },
    loading,
    error,
  } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardData(productId));
  }, [dispatch, productId]);

  if (loading) return <Loading />;
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{name}</h2>
        <div className={s.picture}>
          {images && <Slider images={images} name={name} />}
        </div>
        <div className={s.info}>
          <p className={s.price}>{formatPrice(price)}</p>
          <p className={s.article}>арт. {article}</p>

          <div className={s.characteristics}></div>
          <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
          <table className={`${s.characteristicsTable} table`}>
            <tbody>
              {characteristics &&
                Object.entries(characteristics).map(([i, [type, value]]) => (
                  <tr className="table__row" key={i}>
                    <td className="table__field">{type}</td>
                    <td className="table__value">{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className={s.btns}>
            <button className={s.btn}>Купить</button>
            <button className={s.like}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.41301 12.8733C8.18634 12.9533 7.81301 12.9533 7.58634 12.8733C5.65301 12.2133 1.33301 9.45998 1.33301 4.79332C1.33301 2.73332 2.99301 1.06665 5.03967 1.06665C6.25301 1.06665 7.32634 1.65332 7.99967 2.55998C8.67301 1.65332 9.75301 1.06665 10.9597 1.06665C13.0063 1.06665 14.6663 2.73332 14.6663 4.79332C14.6663 9.45998 10.3463 12.2133 8.41301 12.8733Z"
                  fill="white"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
