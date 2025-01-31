import { Box } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import booksImage from '../../../../assets/images/Unsplash.png'
import DealSlide from "./DealSlide";

export default function Deal() {
  return (
    <Box
      component="section"
      sx={{ padding: "3.8rem 1rem", margin:{md:'4rem',xs:'0'}, backgroundColor: "#FCECEC "}}
    >
            <Swiper
        style={
          {
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
      
        modules={[Pagination , Autoplay]}
        className="mySwiper "
      >
       
          <SwiperSlide>
         <DealSlide img={booksImage}/>
          </SwiperSlide>
          <SwiperSlide>
         <DealSlide img={booksImage}/>
          </SwiperSlide>
          <SwiperSlide>
         <DealSlide img={booksImage}/>
          </SwiperSlide>
          <SwiperSlide>
         <DealSlide img={booksImage}/>
          </SwiperSlide>
      </Swiper>
    
  

  
    </Box>
  )
}
