import { Container } from "../Container/Container";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import s from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cart.slice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalPrice, totalCount } = useSelector(
    (state) => state.cart,
  );
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts products={products}></CartProducts>
        <CartPlace totalPrice={totalPrice} totalCount={totalCount}></CartPlace>
        <CartForm></CartForm>
      </Container>
    </section>
  );
};
