import React from "react";

const Message = ({ message, index }) => {
  return (
    <>
      <div
        className={`relative max-w-[80%] w-fit rounded-md shadow-sm my-3 px-3 ${
          index % 2 == 0
            ? "bg-green-400 text-white"
            : "bg-blue-400 text-white ml-[20%]"
        }`}
      >
        this is the message I have sent to the user okk
        <div
          className={`absolute h-3 w-3 rotate-45  -bottom-[4px] ${
            index % 2 == 0 ? "left-1.5 bg-green-400" : "right-1.5 bg-blue-400"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Message;
