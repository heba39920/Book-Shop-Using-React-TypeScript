import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

interface BookCardProps {
  image: string;
  name: string;
  author: string;
  price: number;
}

export default function BookCard({
  image,
  name,
  author,
  price,
}: BookCardProps) {
  return (
    <Card
      sx={{
        marginBlock: "20px",
        backgroundColor: "transparent",
        boxShadow: 0,
        textTransform: "capitalize",
      }}
    >
      <CardActionArea>
        <Grid
          container
          sx={{ alignItems: "center" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        >
          <Grid item md={4}>
            <Box
              sx={{
                border: "1px solid #EAE8DF",
                boxShadow: "0px 4px 10px 0px #00000026",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item md={8}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  color: "#393280",
                  fontWeight: "600",
                  marginBlock: "20px",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#888888", fontSize: "14px" }}
              >
                {author}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ED553B",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBlock: "20px",
                }}
              >
                ${price}
              </Typography>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "16px",
                  py: 1,
                  backgroundColor: "#EF6B4A",
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
