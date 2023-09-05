import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message, index }) => {
  const { user } = useSelector((state) => state.User);
  return (
    <>
      <div
        className={`relative w-full flex flex-col ${
          message?.senderId !== user?._id ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`relative max-w-[80%] w-fit rounded shadow-sm my-2 px-3 ${
            message?.senderId !== user?._id
              ? "text-black bg-blue-100"
              : "text-black bg-blue-100"
          }`}
        >
          {message?.message}
        </div>
      </div>
    </>
  );
};

export default Message;
