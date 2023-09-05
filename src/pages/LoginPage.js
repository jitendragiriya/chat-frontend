import React from "react";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = (props) => {
  return (
    <>
      <div className="bg-white w-full h-full p-4 flex items-center justify-center googleLoginButtonContainer mx-auto">
        <LoginWithGoogle />
      </div>
    </>
  );
};

export default LoginPage;
