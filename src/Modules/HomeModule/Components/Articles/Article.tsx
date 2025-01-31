import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
interface ArticleProps {
  image: string;
}

export default function Article({ image }: ArticleProps) {
  return (
    <Grid item md={4} xs={12}>
      <Card
        sx={{
          marginBlock: "63px",
          backgroundColor: "transparent",
          boxShadow: 0,
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={image} alt="article" />

          <CardContent>
            <Typography
              variant="body2"
              sx={{
                color: "#74642F",
                fontSize: "15px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
            >
              2 aug, 2021
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "26px",
                color: "#173F5F",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
            >
              Reading books always makes the moments happy
            </Typography>

            <Divider />
            <Box
              sx={{ marginTop: "20px", textAlign: "right", fontSize: "5px" }}
            >
              <FacebookIcon />
              <InstagramIcon sx={{ marginInline: "5px" }} />
              <TwitterIcon />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
