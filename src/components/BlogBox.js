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
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  contextSection: {
    paddingTop: "20px"
  }
});

export default function BlogBox() {
  const classes = useStyles();
  return (
    <>
      <Grid item md={4} xs={12}>
        <Card maxWidth="sm">
          <CardMedia
            className={classes.root}
            component="img"
            height="140"
            image="/assets/img/Products/blog1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              sx={{ display: "flex" }}
              gutterBottom
              variant="body2"
              component="div"
            >
              <CalendarTodayOutlinedIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: "medium"
                }}
              />
              Jan 16 2021
              <ChatBubbleOutlineOutlinedIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: "medium"
                }}
              />
              12 Comments
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
