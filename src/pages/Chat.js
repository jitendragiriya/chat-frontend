import React from "react";
import SubmitChat from "../components/SubmitChat";
import OurChats from "../components/OurChats";

const Chat = ({socket, recepient} ) => {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between">
        <OurChats />
        <SubmitChat socket={socket} recepient={recepient} />
      </div>
    </>
  );
};

export default Chat;
