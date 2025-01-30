const initialStore = [
  {
    id: 1,
    title: "Range Rover Sport",
    price: 150,
  },
  {
    id: 2,
    title: "Porsche Panamera",
    price: 250,
  },
];

export const productReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return state;
    default:
      return state;
  }
};
