import CountdownTimer from "./CountDownTimer";
import { Grid, Typography } from "@mui/material";

interface DealSlideProps {
  img: string;
}

export default function DealSlide({ img }: DealSlideProps) {
  const targetDate = new Date("2025-12-31T00:00:00");
  return (
    <Grid
      sx={{
        alignItems: "center",

        textTransform: "capitalize",
        color: "#393280",
      }}
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item md={6} xs={12}>
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "45px",
            },

            paddingBlock: {
              xs: ".5rem",
            },

            fontWeight: "700",
            textTransform: "capitalize",
            marginTop: {
              xs: "20px",
            },
          }}
          className="title"
          variant="h2"
          component="h2"
        >
          All books are 50% off now! Don't miss such a deal!
        </Typography>
        <Typography
          sx={{ marginTop: "10px", fontSize: "18px", fontWeight: "400" }}
          className="subtitle"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac.
        </Typography>
        <Typography sx={{ marginTop: "20px" }}>
          <CountdownTimer targetDate={targetDate} />
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ justifyContent: { xs: "center" }, paddingTop: "10px" }}
        md={6}
        xs={6}
      >
        <img className="book-img" src={img} alt="books img" />
      </Grid>
    </Grid>
  );
}
