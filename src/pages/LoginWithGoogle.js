import React from "react";
import { GoogleLogin } from "react-google-login";
import { loginWithGoogleAction } from "../actions/auth";
import { useDispatch } from "react-redux";

const LoginWithGoogle = () => {
  const dispatch = useDispatch();
  const successResponse = (response) => {
    dispatch(loginWithGoogleAction(response?.tokenId));
  };

  const failureResponse = (response) => {
    console.log(response);
  };

  return (
    <>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`}
        buttonText="Login With Google"
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default LoginWithGoogle;
