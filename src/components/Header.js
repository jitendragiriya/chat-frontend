import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ recepient, setRecepient }) => {
  const [open, setOpen] = useState(false);
  const { peoples } = useSelector((state) => state.Peoples);

  const openDrawer = () => {
    if (window.innerWidth < 768) setOpen(true);
    else setOpen(false);
  };
  const closeDrawer = () => setOpen(false);
  const changeRecepient = (user) => {
    setRecepient(user);
    closeDrawer();
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "100%" : 250,
      }}
      role="presentation"
    >
      <List sx={{ maxHeight: "calc(100vh - 29px)", overflow: "auto" }}>
        <ListItem
          disablePadding
          sx={{
            "& .MuiButtonBase-root": {
              pl: ".5rem",
              pr: ".5rem",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <SearchIcon />
              </Avatar>
            </ListItemIcon>

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
          </ListItemButton>
        </ListItem>
        {typeof peoples === "object" && peoples?.length
          ? peoples?.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => changeRecepient(item)}
                onKeyDown={() => changeRecepient(item)}
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
                    primary={item?.name}
                    secondary={"@" + item?.username}
                  />
                </ListItemButton>
              </ListItem>
            ))
          : null}
      </List>
      <Box
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
        sx={{
          width: "70px",
          height: "5px",
          backgroundColor: "gray",
          borderRadius: "10px",
          marginX: "auto",
          marginY: "1rem",
        }}
      ></Box>
    </Box>
  );
  return (
    <>
      <div
        className="w-full flex justify-between h-16 border-b border-b-[#333]"
        onClick={openDrawer}
      >
        <ListItem
          disablePadding
          sx={{
            "& .MuiButtonBase-root": {
              padding:0,
              pl: ".5rem",
              pr: ".5rem",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={recepient?.picture} />
            </ListItemIcon>
            <ListItemText
              primary={recepient?.name}
              secondary={"@" + recepient?.username}
            />
            <div className="md:hidden">
              <ExpandMoreIcon />
            </div>
          </ListItemButton>
        </ListItem>
      </div>
      <Drawer anchor="top" open={open} onClose={closeDrawer}>
        {list("top")}
      </Drawer>
    </>
  );
};

export default Header;
