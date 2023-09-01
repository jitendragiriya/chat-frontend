import React from "react"; 
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = (props) => {
  return (
    <> 
      <div className="bg-[#3f3f3f] min-h-screen w-full p-4 flex items-center justify-center googleLoginButtonContainer">
        <LoginWithGoogle />
      </div>
    </>
  );
};

export default LoginPage;
