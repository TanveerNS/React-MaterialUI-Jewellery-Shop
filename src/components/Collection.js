import {
  Container,
  Divider,
  Chip,
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Rating,
  Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import CardCollection from "./CardCollection";
import CardProduct from "./CardProduct";

import { CollectionData } from "../data";
console.log(CollectionData[0].src);
const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    marginBottom: "30px"
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
const Collection = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        <Box mt={2} mb={8} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <CardProduct />
          </Grid>
        </Box>
        <Typography variant="subtitle1" color="secondary" align="center">
          Special Offers
        </Typography>
        <Typography variant="h4" align="center">
          Top Collections
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
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>

        <Box mt={6} mb={8} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <CardCollection item={CollectionData[0].src} />
            <CardCollection item={CollectionData[1].src} />
            <CardCollection item={CollectionData[2].src} />
            <CardCollection item={CollectionData[3].src} />
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Collection;
