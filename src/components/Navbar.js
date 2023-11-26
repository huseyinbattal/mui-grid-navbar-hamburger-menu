import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";

const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ backgroundColor: "green" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartCheckoutIcon fontSize="large" />
            </Typography>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon fontSize="large" />
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: "auto", background: "rgba(187,100,13,1)" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(141,57,73,1)" }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
