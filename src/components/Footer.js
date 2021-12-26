import * as React from "react";
import {
  Box,
  Link,
  CardMedia,
  Grid,
  Typography,
  Stack,
  Rating,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Chip,
  Container
} from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BlogBox from "./BlogBox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${"/assets/img/slider/footer-bg.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    minHeight: "360px"
  },

  footercopyright: {
    backgroundColor: "#000",
    color: "#fff"
  }
});
const linkList1 = [
  "About Us",
  "Customer Service",
  "Privacy Policy",
  "Site Map",
  "Advanced Search",
  "Orders and Returns",
  "Contact Us"
];
const linkList2 = [
  "Sign In",
  "View Cart",
  "My Wishlist",
  "Track My Order",
  "Private Policy",
  "Shipping & Returns",
  "Help"
];
export default function Footer() {
  const classes = useStyles();
  const Links = ({ name }) => {
    return (
      <Link
        href="#"
        underline="none"
        color="primary.contrastText"
        component="div"
        variant="body1"
      >
        {name}
      </Link>
    );
  };
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }} pt={8} pb={8}>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  About us
                </Typography>
                <Typography variant="body2" color="primary.contrastText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry.
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Information
                </Typography>

                <List>
                  {linkList1.map((link) => {
                    return <Links name={link} />;
                  })}
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  My Account
                </Typography>

                <List>
                  {linkList2.map((link) => {
                    return <Links name={link} />;
                  })}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div className={classes.footercopyright}>
        <Box sx={{ flexGrow: 1 }} pt={4} pb={4}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Typography variant="body2" textAlign="center">
                Copyright © 2021 React Theme - Jewellry and All Rights Reserved.
                Designed by Tanveer-NS
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
