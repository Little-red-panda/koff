import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/cart/cart.slice";

export const CartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const hasInCart = products.find((product) => product.id === id);

  const handleCartClick = () => {
    if (hasInCart) {
      dispatch(removeProductFromCart(id));
    } else {
      dispatch(addProductToCart({ productId: id, quantity: 1 }));
    }
  };
  return (
    <button className={className} onClick={handleCartClick}>
      {hasInCart ? "Из корзины" : "В корзину"}
    </button>
  );
};
