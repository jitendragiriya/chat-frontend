import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Chat from "./Chat";
import { getAllMessages } from "../actions/chat";
import io from "socket.io-client";
import { USER_MESSAGES_SUCCESS } from "../constants";
import Sidebar from "../components/Sidebar";

const socket = io(`${process.env.REACT_APP_BASE_URL}`, {
  withCredentials: true,
});

const ChatPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.User);
  const { peoples } = useSelector((state) => state.Peoples);
  const [recepient, setRecepient] = useState({});
  const { messages } = useSelector((state) => state.Messages);

  //connect to the socket

  useEffect(() => {
    if (user?._id) socket.emit("setUser", user?._id);
  }, [user?._id]);

  useEffect(() => {
    socket.on("privateMessage", (message) => {
      dispatch({
        type: USER_MESSAGES_SUCCESS,
        payload: messages?.length ? [...messages, message] : [message],
      });
    });
  }, [messages]);

  //set first user as recepient by default
  useEffect(() => {
    if (peoples?.length > 0) {
      setRecepient(peoples[0]);
    }
  }, [peoples]);

  //get recepient chats
  useEffect(() => {
    if (recepient?._id) {
      dispatch(getAllMessages(recepient?._id));
    }
  }, [recepient]);

  return (
    <>
      <div className="h-full bg-white w-full overflow-hidden mx-auto md:flex">
        <div className="hidden md:block min-w-[300px] max-w-[300px]">
          <Sidebar setRecepient={setRecepient} />
        </div>
        <div className="w-full">
          <Header recepient={recepient} setRecepient={setRecepient} />
          <Chat socket={socket} recepient={recepient} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
