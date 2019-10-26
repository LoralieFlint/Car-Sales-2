const initialState = {
    additionalPrice: 0,
    car: {
      price: 22990,
      name: "2019 Kia Soul",
      image:
        "https://images.hgmsites.net/hug/2019-kia-soul_100658719_h.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "2.0L DOHC GDI 4-cylinder engine", price: 3000 },
      { id: 3, name: "Deluxe sterio", price: 500 },
      { id: 5, name: "Backup camera", price: 200 },
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_FEATURE":
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: state.car.features.filter(item => {
                        return item.id !== action.payload.id
                    })
                }
            }
      case "BUY_ITEM":
        if (state.car.features.find(item => item.id === action.payload.id)) {
          return state;
        } else {
          return {
            ...state,
            car: {
              ...state.car,
              price: state.car.price + action.payload.price,
              features: [...state.car.features, action.payload]
            }
          };
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;