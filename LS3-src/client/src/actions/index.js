import reviews from "../apis/reviews";
import history from "../history";
import {
  CREATE_REVIEW,
  FETCH_REVIEWS,
  FETCH_REVIEW,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "./types";

export const createReview = (formValues) => async (dispatch) => {
  const response = await reviews.post("/reviews", { ...formValues });
  dispatch({ type: CREATE_REVIEW, payload: response.data });
  // Programmatic Navigation to take the user back to the root route
  history.push("/");
};

export const fetchReviews = () => async (dispatch) => {
  const response = await reviews.get("/reviews");
  dispatch({ type: FETCH_REVIEWS, payload: response.data });
};

export const fetchReview = (id) => async (dispatch) => {
  const response = await reviews.get(`/reviews/${id}`);
  dispatch({ type: FETCH_REVIEW, payload: response.data });
};

export const editReview = (id, formValues) => async (dispatch) => {
  const response = await reviews.patch(`/reviews/${id}`, formValues);
  dispatch({ type: EDIT_REVIEW, payload: response.data });
  history.push("/");
};

export const deleteReview = (id) => async (dispatch) => {
  await reviews.delete(`/reviews/${id}`);
  dispatch({ type: DELETE_REVIEW, payload: id });
  // Programmatic Navigation to take the user back to the root route
  history.push("/");
};
