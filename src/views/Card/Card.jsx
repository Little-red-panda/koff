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
import { FavoriteButton } from "../../components/Favorite/FavoriteButton";

export const Card = () => {
  const { productId } = useParams();

  const { data, loading, error } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardData(productId));
  }, [dispatch, productId]);

  if (loading || !data) return <Loading />;
  if (error) {
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );
  }

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{data.name}</h2>
        <div className={s.picture}>
          <Slider images={data.images} name={data.name} />
        </div>
        <div className={s.info}>
          <p className={s.price}>{formatPrice(data.price)}</p>
          <p className={s.article}>арт. {data?.article}</p>

          <div className={s.characteristics}></div>
          <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
          <table className={`${s.characteristicsTable} table`}>
            <tbody>
              {data.characteristics.map(([type, value], i) => (
                <tr className="table__row" key={i}>
                  <td className="table__field">{type}</td>
                  <td className="table__value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={s.btns}>
            <button className={s.btn}>Купить</button>
            <FavoriteButton className={s.like} id={data.id} />
          </div>
        </div>
      </Container>
    </section>
  );
};
