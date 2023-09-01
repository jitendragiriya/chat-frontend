import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { getAllPeoples } from "../actions/peoples";
import Header from "../components/Header";
import Chat from "./Chat";

const peoples = [
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
];

const ChatPage = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useSelector((state) => state.User);
  const [recepient, setRecepient] = useState(peoples[0] || null);
  // const { peoples } = useSelector((state) => state.Peoples);

  useEffect(() => {
    dispatch(getAllPeoples());
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen overflow-auto w-screen h-screen min-w-full">
        <div className="h-full bg-white shadow-md rounded-md w-full overflow-hidden">
          {/* header */}
          <Header recepient={recepient}/>
          <Chat/>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
