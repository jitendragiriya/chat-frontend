import React, { useEffect } from "react";
import "./App.css";
import store from "./store";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import { authUser } from "./actions/auth";
import ChatPage from "./pages/ChatPage";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.User);
  useEffect(() => {
    store.dispatch(authUser());
  }, []);

  return (
    <>
      <Helmet>
        <title>Chat</title>
      </Helmet>
      {/* {isAuthenticated ? <ChatPage /> : <LoginPage />} */}
      <ChatPage />
      <ToastContainer />
    </>
  );
}

export default App;
