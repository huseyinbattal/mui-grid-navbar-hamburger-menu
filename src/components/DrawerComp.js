import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "seagreen" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Typography>
          <ShoppingCartCheckoutIcon
            sx={{ padding: "10%", color: "wheat" }}
            fontSize="large"
          />
        </Typography>
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "gold" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(true)}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
