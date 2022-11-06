import { ADD_POSITION } from "./consts-positions";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
