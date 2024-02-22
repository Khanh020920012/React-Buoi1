import { GIAM, TANG } from "./constant";

let initialState = {
  value: 100,
};

// tạo reducer
export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      console.log("up");
      state.value++;
      return { ...state };
    }
    case GIAM: {
      state.value -= action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
