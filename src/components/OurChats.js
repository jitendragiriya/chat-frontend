import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const OurChats = () => {
  const { messages } = useSelector((state) => state.Messages);
  useEffect(() => {
    document.querySelector(".scrollToThisdiv").scrollIntoView(true);
  }, [messages]);

  return (
    <>
      <div className="h-full max-h-[calc(100vh-170px)] p-2 overflow-y-auto">
        {typeof messages === "object" && messages?.length
          ? messages?.map((message, index) => (
              <Message key={index} index={index} message={message} />
            ))
          : null}
        <div className="scrollToThisdiv"></div>
      </div>
    </>
  );
};

export default OurChats;
