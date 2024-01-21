import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading || !data) return <Loading />;
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <Container className={s.container}>
      <nav className={s.catalog}>
        <ul className={s.list}>
          {data.map((item, index) => (
            <li key={`item_${index}`} className={s.item}>
              <Link className={s.link} to={`/category?slug=${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
