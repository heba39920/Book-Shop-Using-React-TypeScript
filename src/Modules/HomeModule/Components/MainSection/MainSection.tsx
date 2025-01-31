import 'swiper/swiper-bundle.css'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {  Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import { useEffect, useState } from "react";
import bookImage from "../../../../assets/images/E-raamatud ja audioraamatud sisselogimata 1.png";
import "./MainSection.css";
import MainButton from "../MainButton/MainButton";
import { RotatingLines } from "react-loader-spinner";  

const MainSection = () => {
  interface Book {
    name: string;
    description: string;
    image: string;
    _id: string;
  }

  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = async () => {
    setIsLoading(true);  

    try {
      const response = await axios.get(URLS.getAllBooks);
      console.log(response);

      setBooks(response?.data?.data);
    } catch (error) {
      console.log(error);
    }finally {  
      setIsLoading(false);  
    } 
  };
  useEffect(() => {
    getBooks();
  }, []);
  if (isLoading) {  
    return (  
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , height:'100vh'}}>  
        <RotatingLines  
          visible={true}  
          height="96"  
          width="96"  
          color="grey"  
          strokeWidth="5"  
          animationDuration="0.75"  
          ariaLabel="rotating-lines-loading"  
        />  
      </Box>  
    );  
  }  
  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(78.83deg, #FFE6E6 8.52%, #F5FFFE 68.88%, #FFFFFF 101.74%)",
      }}
    >
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#ED553B",
            "--swiper-pagination-color": "#ED553B",
          } as React.CSSProperties
        }
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <Grid
              sx={{
                alignItems: "center",
                paddingInline: "3rem",
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
                      xs: "30px",
                      md: "50px",
                    },

                    paddingBlock: {
                      xs: ".5rem",
                    },

                    fontWeight: "700",
                    textTransform: "uppercase",
                    marginTop: {
                      xs: "20px",
                    },
                  }}
                  className="title"
                  data-swiper-parallax="-300"
                  variant="h1"
                  component="h1"
                >
                  {book?.name}
                </Typography>
                <Typography
                  sx={{ marginTop: "10px", fontSize: "25px" }}
                  className="subtitle"
                  data-swiper-parallax="-200"
                >
                  {book?.description}
                </Typography>
                <Typography sx={{ marginTop: "20px", fontSize: "18px" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                  vel molestias perspiciatis magni doloremque obcaecati, animi
                  dicta eos eligendi ipsa, modi, debitis autem ea fuga possimus
                  optio dolore cum excepturi.
                </Typography>
              <MainButton text='Read More'/>
              </Grid>
              <Grid
                item
                sx={{ justifyContent: { xs: "center" }, paddingTop: "10px" }}
                md={6}
                xs={6}
              >
                <img className="book-img" src={bookImage} alt={book?.name} />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default MainSection;
