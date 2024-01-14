import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { Loading } from "../../components/Loading/Loading";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) return <Loading />;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;

  return (
    <main>
      <Catalog catalog={dataCategories} />
      <Goods />
    </main>
  );
};
