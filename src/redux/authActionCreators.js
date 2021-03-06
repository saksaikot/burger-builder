import axios from "axios";
import { fetchOrders } from "./actionCreators";
import * as actionTypes from "./actionTypes";

const API_KEY = "AIzaSyAq99GLVWPqHfNWgL4NPw0_pDpaDv4s-VU";

export const authSuccess = ({ userId, token }) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: { userId, token },
});

export const auth =
  ({ email, password, isLogin }) =>
  (dispatch) => {
    const authData = { email, password, returnSecureToken: true };

    const apiAction = isLogin ? "signInWithPassword" : "signUp";

    const apiEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:${apiAction}?key=${API_KEY}`;
    dispatch(authLoading(true));
    axios
      .post(apiEndPoint, authData)
      .then((response) => {
        dispatch(authLoading(false));
        dispatch(authLoadingFailedMessage(null));

        const { data } = response;
        const { idToken, localId, expiresIn } = data;
        localStorage.setItem("token", idToken);
        localStorage.setItem("userId", localId);
        const expires = new Date(new Date().getTime() + expiresIn * 1000);
        localStorage.setItem("expires", expires);
        dispatch(authSuccess({ token: idToken, userId: localId }));
        dispatch(fetchOrders(localId, idToken));
      })
      .catch((error) => {
        console.log("auth loading error", error);
        dispatch(authLoading(false));
        dispatch(authLoadingFailedMessage(error.response.data.error.message));
      });
  };

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expires");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const localAuthCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const expires = localStorage.getItem("expires");
  const userId = localStorage.getItem("userId");
  // console.log("calling localAuthCheck");
  if (!token && !expires) return dispatch(logout());
  if (new Date() > new Date(expires)) return dispatch(logout());
  // console.log("calling localAuthCheck");
  dispatch(authSuccess({ token: token, userId: userId }));

  dispatch(fetchOrders(userId, token));
};

export const authLoading = (isLoading) => {
  return {
    type: actionTypes.AUTH_LOADING,
    payload: isLoading,
  };
};

export const authLoadingFailedMessage = (message) => ({
  type: actionTypes.AUTH_FAILED_MESSAGE,
  payload: message,
});
