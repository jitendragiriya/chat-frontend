import React, { useEffect } from "react";
import "./App.css";
import store from "./store";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import { authUser } from "./actions/auth";
import ChatPage from "./pages/ChatPage";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { getAllPeoples } from "./actions/peoples";

function App() {
  const { isAuthenticated, loading } = useSelector((state) => state.User);
  const { loading: peopleLoading } = useSelector((state) => state.Peoples);
  const { auth } = useSelector((state) => state.GoogleAuth);
  useEffect(() => {
    store.dispatch(authUser());
    store.dispatch(getAllPeoples());
  }, [auth]);

  return (
    <>
      <Helmet>
        <title>Chat</title>
      </Helmet>
      <div className="bg-[#4f4f4f] min-h-screen overflow-auto w-screen h-screen min-w-full">
        {loading || peopleLoading ? null : (
          <>{isAuthenticated ? <ChatPage /> : <LoginPage />}</>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
