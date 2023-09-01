import React from "react";
import Message from "./Message";

const OurChats = () => {
  return (
    <>
      <div className="h-full min-h-[calc(100vh-164px)] max-h-[calc(100vh-164px)] p-2 overflow-y-auto">{[...Array(10)].map((message, index)=>(
        <Message key={index} index={index}/>
      ))}</div>
    </>
  );
};

export default OurChats;
