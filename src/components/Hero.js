import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import Icon from "@mui/material/Icon";

function Hero(props) {
  var items = [
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing  ",
      img_src: "./assets/img/slider/slider1.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider2.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider3.jpg"
    }
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  img_responsive: {
    maxHeight: "560px",
    width: "100%"
  },
  sec: {
    position: "absolute",
    top: "30%",
    left: "10%",
    color: "#fff"
  }
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec}>
        <Typography variant="h3">{props.item.name}</Typography>
        <Typography variant="subtitle1">{props.item.description}</Typography>
        <Button
          sx={{
            ":hover": {
              color: "white"
            }
          }}
          color="info"
          variant="contained"
          className="CheckButton"
        >
          Shop Now
        </Button>
      </div>

      <img className={classes.img_responsive} src={props.item.img_src} />
    </Paper>
  );
}

export default Hero;
