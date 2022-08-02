import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add_item") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const ExistingCart = state.item[existingCartItem];
    let updatedItems;

    if (ExistingCart) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "Remove_item") {
    const existingCartItem = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItem];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
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
