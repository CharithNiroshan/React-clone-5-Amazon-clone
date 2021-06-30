export const initialState = {
  cart: {
    no_of_items: 5,
    items: [
      {
        image: "https://m.media-amazon.com/images/I/71FvnZxNqpL._AC_AA220_.jpg",
        title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
        owner: "by Liam Nesson",
        type: "Blu-Ray",
        stock_status: true,
        price: 16.99,
      },
      {
        image: "https://m.media-amazon.com/images/I/71XPcJQzXnL._AC_AA220_.jpg",
        title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
        owner: "by Liam Nesson",
        type: "Blu-Ray",
        stock_status: false,
        price: 16.99,
      },
      {
        image: "https://m.media-amazon.com/images/I/51GDHT0LHEL._AC_AA220_.jpg",
        title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
        owner: "by Liam Nesson",
        type: "Blu-Ray",
        stock_status: true,
        price: 16.99,
      },
      {
        image: "https://m.media-amazon.com/images/I/71K7tmvjv4L._AC_AA220_.jpg",
        title: "STAR WARS: THE PHANTOM MENACE [Blu-ray]",
        owner: "by Liam Nesson",
        type: "Blu-Ray",
        stock_status: false,
        price: 16.99,
      },
      {
        image: "https://m.media-amazon.com/images/I/81i2sXxvRoL._AC_AA220_.jpg",
        title: "The Evil Dead [Blu-ray]",
        owner: "by Liam Nesson",
        type: "Blu-Ray",
        stock_status: true,
        price: 16.99,
      },
    ],
    last_added: {
      image: "https://m.media-amazon.com/images/I/81i2sXxvRoL._AC_AA220_.jpg",
      title: "The Evil Dead [Blu-ray] ",
      owner: "by Liam Nesson",
      type: "Blu-Ray",
      stock_status: true,
      price: 16.99,
    },
    last_added_type_products: [
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
        title: "Star Wars: A new Hope [Blu-ray]",
        rating: 4.5,
        no_of_reviews: 22,
        type: "Blu-Ray",
        price: 24.78,
      },
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
        title: "Star Wars: A new Hope [Blu-ray]",
        rating: 4,
        no_of_reviews: 45,
        type: "Blu-Ray",
        price: 32.78,
      },
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
        title: "Star Wars: A new Hope [Blu-ray]",
        rating: 3.5,
        no_of_reviews: 78,
        type: "Blu-Ray",
        price: 102.78,
      },
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51Sa1iQRqOL._AC_UL100_SR100,84_.jpg",
        title: "Star Wars: A new Hope [Blu-ray]",
        rating: 5,
        no_of_reviews: 109,
        type: "Blu-Ray",
        price: 89.78,
      },
    ],
    subtotal: 84.95,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
