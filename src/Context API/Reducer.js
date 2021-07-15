export const initialState = {
  user: {
    loginstatus: false,
  },
  cart: [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71FvnZxNqpL._AC_AA220_.jpg",
      title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      qty: 1,
      stock_status: true,
      price: 20.99,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71XPcJQzXnL._AC_AA220_.jpg",
      title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      qty: 3,
      stock_status: false,
      price: 55.99,
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/51GDHT0LHEL._AC_AA220_.jpg",
      title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      qty: 2,
      stock_status: true,
      price: 16.99,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71K7tmvjv4L._AC_AA220_.jpg",
      title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      qty: 1,
      stock_status: false,
      price: 16.99,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/81i2sXxvRoL._AC_AA220_.jpg",
      title: "The Evil Dead [Blu-ray]",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      qty: 5,
      stock_status: true,
      price: 16.99,
    },
  ],
  suggested_products: [
    {
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
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
      title: "Star Wars: A new Hope [Blu-ray]",
      rating: 5,
      owner: "by Kusal Mendis",
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
    default:
      return state;
  }
};

export default reducer;
