import axios from "axios";
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

    axios.post(apiEndPoint, authData).then((response) => {
      const { data } = response;
      console.log({ token: data.idToken, userId: data.localId });

      dispatch(authSuccess({ token: data.idToken, userId: data.localId }));
    });
  };
