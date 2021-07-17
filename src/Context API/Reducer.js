export const initialState = {
  user: null,
  cart: [],
  suggested_products: [
    {
      id: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
      title: "Star Wars: A new Hope [Blu-ray]",
      rating: 4.5,
      owner: "by Liam Nesson",
      no_of_reviews: 22,
      qty: 1,
      stock_status: false,
      type: "Blu-Ray",
      price: 24.78,
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
      title: "Star Wars: A new Hope [Blu-ray]",
      rating: 4,
      owner: "by Charith Niroshan",
      no_of_reviews: 22,
      stock_status: true,
      type: "Blu-Ray",
      qty: 1,
      price: 32.78,
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
      title: "Star Wars: A new Hope [Blu-ray]",
      rating: 3.5,
      owner: "by Janith Lakshan",
      no_of_reviews: 22,
      stock_status: false,
      qty: 1,
      type: "Blu-Ray",
      price: 102.78,
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
      title: "Star Wars: A new Hope [Blu-ray]",
      owner: "by Kusal Mendis",
      rating: 5,
      no_of_reviews: 22,
      stock_status: true,
      qty: 1,
      type: "Blu-Ray",
      price: 89.78,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      let newcart = [...state.cart];
      newcart.splice(action.index, 1);
      return {
        ...state,
        cart: newcart,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "CHANGE_QUANTITY":
      let newcart2 = [...state.cart];
      newcart2[action.item.index].qty = action.item.value;
      return {
        ...state,
        cart: newcart2,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
