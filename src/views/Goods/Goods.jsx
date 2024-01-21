import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem/CardItem";
import { Container } from "../Container/Container";
import s from "./Goods.module.scss";
import { useEffect } from "react";
import { fetchCardsData } from "../../store/cards/cards.slice";
import { Loading } from "../../components/Loading/Loading";
import { useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");

  const { data, loading, error } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCardsData({ category, q }));
  }, [category, dispatch, q]);

  if (loading || !data) return <Loading />;
  if (error) {
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );
  }

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <>
            <ul className={s.list}>
              {data.map((item) => (
                <li key={item.id}>
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </Container>
    </section>
  );
};
