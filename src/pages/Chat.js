import React from "react";
import SubmitChat from "../components/SubmitChat";
import OurChats from "../components/OurChats";

const Chat = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between">
        <OurChats />
        <SubmitChat />
      </div>
    </>
  );
};

export default Chat;
