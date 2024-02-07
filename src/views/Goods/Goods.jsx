import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem/CardItem";
import { Container } from "../Container/Container";
import s from "./Goods.module.scss";
import { useEffect } from "react";
import { fetchCardsData } from "../../store/cards/cards.slice";
import { Loading } from "../../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { ErrorScreen } from "../../components/ErrorScreen/ErrorScreen";

export const Goods = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.cards,
  );
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const category = searchParam.get("category");
  const q = searchParam.get("q");
  const page = searchParam.get("page");

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
      dispatch(fetchCardsData({ list: favoriteList.join(","), page }));
    }
    return;
  }, [dispatch, favoriteList, isFavoriteScreen, page]);

  useEffect(() => {
    if (!isFavoriteScreen) {
      dispatch(fetchCardsData({ category, q, page }));
    }
  }, [category, dispatch, isFavoriteScreen, page, q]);

  if (loading || !data) return <Loading />;
  if (error) {
    return <ErrorScreen error={error} />;
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
            {pagination && <Pagination pagination={pagination} />}
          </>
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </Container>
    </section>
  );
};
