import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import MainButton from "../MainButton/MainButton";
import Article from "./Article";
import img1 from "../../../../assets/images/Rectangle 45.png";
import img2 from "../../../../assets/images/Rectangle 38.png";
import img3 from "../../../../assets/images/Rectangle 44.png";

export default function Articles() {
  return (
    <Box
      component="section"
      sx={{
        padding: "3.8rem 1rem",
        backgroundColor: "#F7FCFC ",
      }}
    >
      <Container>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "13px",
            color: "#7A7A7A",
            textAlign: "center",
          }}
        >
          Read our articles
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: "48px",
            color: "#173F5F",
            fontWeight: "400",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <Divider> Latest Articles</Divider>
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Article image={img1} />

          <Article image={img2} />

          <Article image={img3} />
        </Grid>
        <Typography
          component="div"
          sx={{ textAlign: "center", marginTop: "30px" }}
        >
          <MainButton text="read all articles" />
        </Typography>
      </Container>
    </Box>
  );
}
