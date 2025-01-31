const initialStore = [
  //   {
  //     id: 1,
  //     title: "Range Rover Sport",
  //     price: 150,
  //   },
  //   {
  //     id: 2,
  //     title: "Porsche Panamera",
  //     price: 250,
  //   },
];

export const productReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return state;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      return state.filter(p=> p.id !== action.id)
    default:
      return state;
  }
};
