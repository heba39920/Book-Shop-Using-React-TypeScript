import { Box, Button, Divider, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import NewReleaseCard from "./NewReleaseCard";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import img1 from "../../../../assets/images/book3 4.png";
import img2 from "../../../../assets/images/book16 1.png";
import img3 from "../../../../assets/images/book4 4.png";
import { RotatingLines } from "react-loader-spinner";  

 const imgs=[img1,img2,img3]
export default function NewRelease() {
  interface Book {
    name: string;
    description: string;
    image: string;
    _id: string;
    price: number;
    author: string;
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
      component="section"
      sx={{ padding: "3.8rem 1rem", backgroundColor: "#FCECEC ",textAlign: "center"}}
    >
    
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "13px",
            color: "#7A7A7A",
          }}
        >
          Some quality items
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: "32px",
            color: "#393280",
            fontWeight: "700",
            marginTop: "1.5rem",
          }}
        >
          New Release Books
        </Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          style={
            {
              "--swiper-pagination-color": "#ED553B",
              
              
            } as React.CSSProperties
            
          }
          speed={600}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper categSwiper"
        >
       
            {books.map((book,index) => (
                <>
                
                   <SwiperSlide key={book._id}>
              <NewReleaseCard
                    image={imgs[index % imgs.length]}
                    author={book?.author}
                    name={book?.name}
                    price={book.price} 
                    _id={book._id}                
              />
                  </SwiperSlide>
                 
                   </>
            ))}
                  <Divider />   
      
        </Swiper>
<Typography component='div' sx={{textAlign:'right', marginTop:'30px'}}>
<Button
          type="submit"
          fullWidth
          variant="contained"
           className="hover-button"
          sx={{
            fontWeight:'700',
            fontSize: "16px",
            py: 1,
          color: "#EF6B4A",
          backgroundColor:'transparent',
         boxShadow:0,
         maxWidth:'20%'
         
          }}
        >
          View all products
          <EastIcon sx={{ marginInlineStart: "5px" }} />
        </Button>
</Typography>
  
    </Box>
  );
}
