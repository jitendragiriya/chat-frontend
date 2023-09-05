import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { USER_MESSAGES_SUCCESS } from "../constants";

const SubmitChat = ({ recepient, socket }) => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.User);
  const { messages } = useSelector((state) => state.Messages);
  const dispatch = useDispatch();

  // Function to send a private message
  const sendPrivateMessage = () => {
    const chat = {
      senderId: user?._id,
      receiverId: recepient?._id,
      message,
      time: new Date(),
    };
    socket.emit("privateMessage", chat);
    dispatch({
      type: USER_MESSAGES_SUCCESS,
      payload: messages?.length ? [...messages, chat] : [chat],
    });
    setMessage("");
  };

  return (
    <>
      <div className="w-full h-[100px] flex items-center justify-between p-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          className="w-full bg-blue-100 p-2 rounded-md h-full"
        />
        <Button sx={{ minWidth: "0" }} onClick={sendPrivateMessage}>
          <SendIcon />
        </Button>
      </div>
    </>
  );
};

export default SubmitChat;
