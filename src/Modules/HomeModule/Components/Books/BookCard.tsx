import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

interface BookCardProps {
  image: string;
  name: string;
  author: string;
  price: number;
  _id:string;
}

export default function BookCard({
  image,
  name,
  author,
  price,
  _id
}: BookCardProps) {
    const [isLoading, setIsLoading] = useState(false);  
  
  const addToCart = async (_id: string, quantity:number) => {  
    setIsLoading(true);  


    try {  
      const token = localStorage.getItem('userToken'); 
      const response = await axios.post(URLS.addItem, {
        book:_id,
        quantity
      }, {  
        headers: {  
          Authorization: `Bearer ${token}`
        }  });  
      console.log(response);  
      toast.success("Book added to cart successfully!", {  
        position: "top-center",  
        autoClose: 3000,  
      });  
    } catch (error) {  
      console.error(error);  
      toast.error((error as Error).message || "Failed to add book", {  
        position: "top-center",  
        autoClose: 3000,  
      });  
    } finally {  
      setIsLoading(false);  
    }  
  }; 
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
                textAlign: "center",

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
                onClick={(e) => {  
                  e.stopPropagation();
            
                  const quantity = 0; 
                  addToCart(_id, quantity);    
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
