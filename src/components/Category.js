import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Chip
} from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  img_root: {
    display: "flex",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    border: "1px solid #f97141",
    margin: "0 auto",
    transition: "ease 0.7s",
    cursor: "pointer",
    "&:hover ": {
      border: "4px dotted #f97141"
    }
  },
  img_responsive: {
    maxHeight: "100px",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px 16px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  gridItem: {
    margin: "20px",
    transition: "ease 2s"
  }
});

const Category = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Box mt={4} mb={2} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={2} xs={4}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={`./assets/img/svg_rings/diamon_ring.svg`}
                    alt="ah"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Diamonds
                </Typography>
                <Typography variant="subtitle1" align="center">
                  38 Items
                </Typography>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={`./assets/img/svg_rings/svg-ring.svg`}
                    alt="ah"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Rings
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={`./assets/img/svg_rings/watch.svg`}
                    alt="ah"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Watches
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.img_root}>
                <img
                  className={classes.img_responsive}
                  src={`./assets/img/svg_rings/neckles.svg`}
                  alt="ah"
                />
              </div>
              <Typography variant="h5" align="center">
                Neckles
              </Typography>
              <Typography variant="subtitle1" align="center">
                52 Items
              </Typography>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.img_root}>
                <img
                  className={classes.img_responsive}
                  src={`./assets/img/svg_rings/tiara.svg`}
                  alt="ah"
                />
              </div>
              <Typography variant="h5" align="center">
                Tiara
              </Typography>
              <Typography variant="subtitle1" align="center">
                52 Items
              </Typography>
            </Grid>
            <Grid item md={2} xs={4}>
              <div className={classes.img_root}>
                <img
                  className={classes.img_responsive}
                  src={`./assets/img/svg_rings/pearing.svg`}
                  alt="ah"
                />
              </div>
              <Typography variant="h5" align="center">
                Earings
              </Typography>
              <Typography variant="subtitle1" align="center">
                52 Items
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider light />
    </>
  );
};
export default Category;
