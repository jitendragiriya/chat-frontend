import { Avatar, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";

const Sidebar = ({ setRecepient }) => {
  const { peoples } = useSelector((state) => state.Peoples);
  return (
    <>
      <div className="flex gap-4 items-center h-16 px-2 border-b border-b-black">
        <Avatar>
          <SearchIcon />
        </Avatar>
        <TextField
          placeholder="Search..."
          sx={{
            width: "100%",
            "& div": {
              "& input": {
                paddingY: ".5rem !important",
                paddingX: "0",
                outline: "none !important",
              },
              "& fieldset": {
                display: "none",
              },
            },
          }}
        />
      </div>
      <List sx={{ maxHeight: "calc(100vh - 29px)", overflow: "auto" }}>
        {typeof peoples === "object" && peoples?.length
          ? peoples?.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => setRecepient(item)}
                onKeyDown={() => setRecepient(item)}
                sx={{
                  "& .MuiButtonBase-root": {
                    pl: ".5rem",
                    pr: ".5rem",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar alt="Remy Sharp" src={item?.picture} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item?.name ? item?.name : null}
                    secondary={
                        item?.username ? "@" + item?.username : null
                    } 
                  />
                </ListItemButton>
              </ListItem>
            ))
          : null}
      </List>
    </>
  );
};

export default Sidebar;
