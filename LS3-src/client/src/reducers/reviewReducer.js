import _ from "lodash";
import {
  FETCH_REVIEW,
  FETCH_REVIEWS,
  CREATE_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_REVIEW:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
