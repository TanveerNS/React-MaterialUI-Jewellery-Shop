import * as React from "react";
import {
  Box,
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
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  contextSection: {
    paddingTop: "20px"
  },
  divider_img_section: {
    display: "flex",
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    border: "1px solid #f97141",
    margin: "0 auto"
  },
  divider_img_responsive: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: "4px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default function Blog() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        <Typography variant="h4" align="center" pb={2} pt={2}>
          Our Blog
        </Typography>
        <Divider>
          <div className={classes.divider_img_section}>
            <img
              className={classes.divider_img_responsive}
              src={`./assets/img/svg_rings/diamon_ring.svg`}
              alt="ah"
            />
          </div>
        </Divider>
        <Typography
          variant="body2"
          align="center"
          sx={{ mx: "auto" }}
          maxWidth="sm"
          pb={4}
          pt={2}
          gutterBottom
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid mb={8} container spacing={2}>
            <BlogBox />
            <BlogBox />
            <BlogBox />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
