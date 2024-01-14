import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { Loading } from "../../components/Loading/Loading";
import { fetchCardsData } from "../../store/cards/cards.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);
  const {
    data: dataCards,
    loading: loadingCards,
    error: errorCards,
  } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCardsData());
  }, [dispatch]);

  if (loadingCategories || loadingCards) return <Loading />;
  if (errorCategories || errorCards) {
    return <div>Ошибка: {errorCategories}</div>;
  }

  return (
    <main>
      <Catalog catalog={dataCategories} />
      <Goods cards={dataCards} />
    </main>
  );
};
