import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem/CardItem";
import { Container } from "../Container/Container";
import s from "./Goods.module.scss";
import { useEffect } from "react";
import { fetchCardsData } from "../../store/cards/cards.slice";
import { Loading } from "../../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");

  const { data, loading, error } = useSelector((state) => state.cards);
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const isFavoriteScreen = location.pathname === "/favorite";
  const isSearchScreen = location.pathname === "/search";
  let screenTitle = "";
  if (isFavoriteScreen) {
    screenTitle = "Избранное";
  }
  if (isSearchScreen) {
    screenTitle = `Результаты поиска: ${searchParam.get("q")}`;
  }

  useEffect(() => {
    if (isFavoriteScreen) {
      dispatch(fetchCardsData({ list: favoriteList.join(",") }));
    }
    return;
  }, [dispatch, favoriteList, isFavoriteScreen]);

  useEffect(() => {
    if (!isFavoriteScreen) {
      dispatch(fetchCardsData({ category, q }));
    }
  }, [category, dispatch, isFavoriteScreen, q]);

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
        {isFavoriteScreen || isSearchScreen ? (
          <h2 className={`${s.title}`}>{screenTitle}</h2>
        ) : (
          <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        )}
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
