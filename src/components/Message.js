import React from "react";
import { useSelector } from "react-redux";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const Message = ({ message }) => {
  const { user } = useSelector((state) => state.User); 
  return (
    <>
      <div
        className={`relative w-full flex flex-col my-2 ${
          message?.senderId !== user?._id ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`relative max-w-[80%] w-fit rounded px-3 ${
            message?.senderId !== user?._id
              ? "text-black bg-blue-100"
              : "text-black bg-blue-100"
          }`}
        >
          {message?.message}
        </div>
        <span className="text-xs">
          {timeAgo.format(new Date( message?.sentAt))}
        </span>
      </div>
    </>
  );
};

export default Message;
