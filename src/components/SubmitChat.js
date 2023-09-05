import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const SubmitChat = ({ recepient, socket }) => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.User);

  // Function to send a private message
  const sendPrivateMessage = () => {
    socket.emit("privateMessage", {
      senderId: user?._id,
      receiverId: recepient?._id,
      message,
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