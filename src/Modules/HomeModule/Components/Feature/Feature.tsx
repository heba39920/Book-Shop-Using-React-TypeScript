import { Grid, Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img from "../../../../assets/images/book (1).png";
import MainButton from "../MainButton/MainButton";
import axios from "axios";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import { useEffect, useState } from "react";
import './Feature.css';
import { RotatingLines } from "react-loader-spinner";  
export default function Feature() {
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
        } finally {  
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
      sx={{
        padding: "4rem 1rem",
        background:
          "linear-gradient(78.43deg, #FBEEEE -27.34%, #F7FFFE 89.92%)",
      }}
    >
     
        <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          style={
            {
              "--swiper-pagination-color": "#ED553B",
            "--swiper-navigation-color": "#ED553B",

             
            } as React.CSSProperties
          }
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={600}
          rewind={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         {books.map((book) => (
             <SwiperSlide  key={book?._id}>
             <Grid container spacing={5} sx={{marginBottom:'4rem'}}>  
                 <Grid item md={6} xs={12}  sx={{ justifyContent: { xs: "center" }}}>  
                   <img src={img} alt={book?.name} className="feature-img"   />  
                 </Grid>  
            
                 <Grid item md={6} xs={12} sx={{textAlign:{md:'left',xs:'center'},justifyContent:{md:'left', xs:'center'}, flexDirection:{md:'row',xs:'column'}}}>  
                   <Typography  
                     component="h2"  
                     variant="h2"  
                     sx={{  
                       fontSize: {md:"48px" , xs: '35px'},  
                       color: "#393280",  
                       fontWeight: "600",  
                       marginTop: "7rem",  
                     }}  
                   >  
                     Featured Book  
                   </Typography>  
                   <Box sx={{display:{md:'block', xs:'flex'}, justifyContent:'center'}}>
               <Box sx={{width:'101px', height:'2px', backgroundColor:'#ED553B', marginTop:'4rem'}}/>

                   </Box>
               <Typography  
                     
                     variant="body2"  
                     sx={{  
                       fontSize: "13px",  
                       color: "#888888",  
                       fontWeight: "500",   
                       marginTop:'1rem',
                       textTransform:'uppercase'
                     }}  
                   >  
                 {book?.author}
                   </Typography>  
                   <Typography  
                     component="h3"  
                     variant="h3"  
                     sx={{  
                       fontSize: "28px",  
                       color: "#393280",  
                       fontWeight: "600",  
                       marginTop: "2rem",  
                         textTransform:'capitalize'
                     }}  
                   >  
                  {book.name}
                   </Typography> 
                   <Typography  
                     
                     variant="body2"  
                     sx={{  
                       fontSize: "16px",  
                       color: "#7A7A7A",  
                       fontWeight: "400",   
                       marginTop:'2rem',
                       textTransform:'uppercase'
                     }}  
                   >  
                  {book?.description}
                   </Typography>  
                   <Typography  
                     component="h4"  
                     variant="h4"  
                     sx={{  
                       fontSize: "23px",  
                       color: "#ED553B",  
                       fontWeight: "700",  
                       marginTop: "3rem",  
                        
                     }}  
                   >  
                   ${book?.price}
                   </Typography> 
                
                   <Typography  
                    
                     sx={{  
                      
                       marginTop: "4rem",  
                     
                        
                     }}  
                   >  
                                  <MainButton text="view more"/>
                   </Typography> 
                 </Grid>  
               </Grid> 
             </SwiperSlide>
         ))}
        </Swiper>
      </Container>
    </Box>
  );
}

