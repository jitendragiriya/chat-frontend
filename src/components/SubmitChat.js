import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const SubmitChat = () => {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="w-full h-[100px] flex items-center justify-between p-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          className="w-full bg-blue-100 p-2 rounded-md h-full"  
        />
        <Button sx={{minWidth:"0"}}>
          <SendIcon />
        </Button>
      </div>
    </>
  );
};

export default SubmitChat;
