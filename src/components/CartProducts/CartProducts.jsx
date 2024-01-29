import { useDispatch } from "react-redux";
import { API_URL } from "../../const";
import s from "./CartProducts.module.scss";
import {
  removeProductFromCart,
  updateProductToCart,
} from "../../store/cart/cart.slice";

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();
  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateProductToCart({ productId: id, quantity: quantity - 1 }));
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(updateProductToCart({ productId: id, quantity: quantity + 1 }));
  };

  return (
    <ul className={s.products}>
      {products.map((product) => (
        <li key={product.id} className={s.product}>
          <img
            className={s.img}
            src={API_URL + product.images[0]}
            alt={product.name}
          />

          <h3 className={s.titleProduct}>{product.name}</h3>
          <p className={s.price}>{product.price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {product.article}</p>

          <div className={s.productControl}>
            <button
              className={s.productBtn}
              onClick={() => handleMinus(product.id, product.quantity)}>
              -
            </button>
            <p className={s.productCount}>{product.quantity}</p>
            <button
              className={s.productBtn}
              onClick={() => handlePlus(product.id, product.quantity)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
