import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add_item") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "Add_item", item: item });
  };

  const removeItemhander = (id) => {
    dispatchCartAction({ type: "Remove_item", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemhander,
  };

  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
