import { ADD_POSITION } from "./consts-positions";

export const addPosition = (position) => ({
  type: ADD_POSITION,
  payload: position
});
