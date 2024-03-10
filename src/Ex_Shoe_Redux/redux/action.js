import { ADD_SHOE, DELETE_SHOE, VIEW_DETAIL } from "./constant";

export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};
export const addShoeAction = (payload) => ({
  type: ADD_SHOE,
  payload,
});
export const deleteShoe = (id) => ({
  type: DELETE_SHOE,
  payload: id,
});
