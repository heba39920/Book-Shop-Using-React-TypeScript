import { Card, CardMedia, Typography } from "@mui/material";




interface CategSlideProps {
  img: string;
  title: string;
}

export default function CategSlide({ img, title }: CategSlideProps) {
  return (
    
    <Card
      sx={{
     
        boxShadow: 0,
        textAlign: "center",
        marginBlockStart: "3rem",
        color: "#393280",
      }}
    >
      <CardMedia
        sx={{ height: 240.64, borderRadius: 10 }}
        image={img}
      />
      <Typography
        gutterBottom
        variant="h5"
        sx={{ marginBlock: "2.1rem" , fontSize:{md:'24px', xs:'16px'}, fontWeight:'600'}}
        component="div"
      >
       {title}
      </Typography>
    </Card>
  
  )
}
