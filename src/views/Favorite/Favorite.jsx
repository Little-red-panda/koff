import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "../Goods/Goods.module.scss";
import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { fetchFavorite } from "../../store/favorite/favorite.slice";
import { CardItem } from "../../components/CardItem/CardItem";

export const Favorite = () => {
  const dispatch = useDispatch();
  const { data, favoriteList, loading, error } = useSelector(
    (state) => state.favorite,
  );

  useEffect(() => {
    dispatch(fetchFavorite(favoriteList));
  }, [dispatch, favoriteList]);

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
        <h2 className={s.title}>Избранное</h2>
        {data.length && favoriteList.length > 0 ? (
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
          <p>Добавьте товары в избранное</p>
        )}
      </Container>
    </section>
  );
};
