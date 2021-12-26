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
const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    marginBottom: "30px"
  },
  contextSection: {
    paddingTop: "20px"
  }
});
const CardCollection = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Grid style={{}} item md={3} xs={6}>
        <Card style={{ border: "1px solid gray" }} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="240"
            image={item}
            alt="green iguana"
          />
          <CardContent>
            <Stack sx={{ pt: 2 }} spacing={1}>
              <Rating name="read-only" value={4} readOnly />
            </Stack>
            <Typography gutterBottom variant="h6" component="div">
              Diamon Rings
            </Typography>
            <Typography
              sx={{ color: "text.primary", fontSize: 12, fontWeight: "bold" }}
              variant="body2"
              color="text.secondary"
            >
              $100.00{" "}
              <span style={{ textDecoration: "line-through" }}> $190.00</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default CardCollection;
