import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import classNames from "classnames";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Loading } from "../../components/Loading/Loading";
import { Link, useSearchParams } from "react-router-dom";
import { ErrorScreen } from "../../components/ErrorScreen/ErrorScreen";

export const Catalog = () => {
  const [searchParam] = useSearchParams();
  const currentCatalogItem = searchParam.get("category");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading || !data) return <Loading />;
  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <Container className={s.container}>
      <nav className={s.catalog}>
        <ul className={s.list}>
          {data.map((item, index) => (
            <li key={`item_${index}`} className={s.item}>
              <Link
                className={classNames(s.link, {
                  [s.link_active]: item === currentCatalogItem,
                })}
                to={`/category?category=${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
