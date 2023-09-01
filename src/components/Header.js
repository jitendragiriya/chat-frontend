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
const peoples = [
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
  {
    _id: "64f17f83a5f0cf2386bdc6ec",
    name: "Jitendra Giriya",
    picture:
      "https://lh3.googleusercontent.com/a/AAcHTtcbOt5iis0rH3nV3N1EqoHqx8Uq9qrkdYPRsRHm-xHe=s96-c",
    email: "jitendragiriya71@gmail.com",
  },
];

const Header = ({ recepient }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "100%" : 250,
      }}
      role="presentation"
    >
      <List sx={{ maxHeight: "calc(100vh - 37px)", overflow: "auto" }}>
        <ListItem disablePadding>
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
        {peoples?.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={item?.picture} />
              </ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
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
        className="w-full flex justify-between h-16 py-1 border-b border-b-[#333]"
        onClick={openDrawer}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={recepient?.picture} />
            </ListItemIcon>
            <ListItemText primary={recepient?.name} />

            <ExpandMoreIcon />
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
