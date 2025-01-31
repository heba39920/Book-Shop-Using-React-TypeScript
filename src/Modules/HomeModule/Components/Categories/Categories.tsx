import { Box, Container, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import img1 from "../../../../assets/images/Rectangle 11.png";
import img2 from "../../../../assets/images/Rectangle 11 (1).png";
import img3 from "../../../../assets/images/Rectangle 11 (2).png";
import { Autoplay, Navigation } from "swiper/modules";
import "./Categories.css";
import CategSlide from "./CategSlide";
import MainButton from "../MainButton/MainButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import { RotatingLines } from "react-loader-spinner";  

const fallbackImages = [img1, img2, img3];
const Categories = () => {
  interface Category {
    title: string;
    description: string;
    image: string;
    _id: string;
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = async () => {
    setIsLoading(true);  
    try {
      const response = await axios.get(URLS.getAllCategories);
      console.log(response);

      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }finally {  
      setIsLoading(false);  
    } 
  };
  useEffect(() => {
    getCategories();
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
    <Box component="section" sx={{ paddingBlock: "4.3rem" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{ color: "#ED553B", display: "flex", alignItems: "center" }}
        >
          <Typography
            component="p"
            sx={{
              width: "32.15px",
              height: "1.95px",
              backgroundColor: "#ED553B",
              marginInlineEnd: "10px",
            }}
          ></Typography>
          <Typography>Categories</Typography>
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: "32px", color: "#393280", fontWeight: "700" }}
        >
          Explore our Top Categories
        </Typography>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          style={
            {
              "--swiper-navigation-color": "#ED553B",
            } as React.CSSProperties
          }
          speed={600}
          rewind={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper categSwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category._id}>
              <CategSlide
                img={
                  category.image ||
                  fallbackImages[index % fallbackImages.length]
                }
                title={category.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ textAlign: "center" }}>
          <MainButton text="view more" />
        </Box>
      </Container>
    </Box>
  );
};
export default Categories;
