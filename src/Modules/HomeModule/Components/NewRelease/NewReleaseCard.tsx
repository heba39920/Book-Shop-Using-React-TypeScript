import {  
  Box,  
  Button,  
  Card,  
  CardActionArea,  
  CardContent,  
  CardMedia,  
  Typography,  
} from "@mui/material";  
import axios from "axios";  
import { URLS } from "../../../../Constants/MAIN-END-POINTS";  
import { toast } from "react-toastify";  
import { RotatingLines } from "react-loader-spinner";  
import { useState } from "react";  

interface NewReleaseCardProps { 
  _id:string; 
  image: string;  
  name: string;  
  author: string;  
  price: number;  
}  



export default function NewReleaseCard({  
  _id,
  image,  
  name,  
  author,  
  price,  
}: NewReleaseCardProps) {  
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
        marginBlock: '20px',  
        backgroundColor: 'transparent',  
        boxShadow: 0,  
        textTransform: 'capitalize',  
        '&:hover .hover-button': {  
          opacity: 1,  
          transform: 'translateY(-20px)',  
        }  
      }}  
    >  
      <CardActionArea>  
        <Box  
          sx={{  
            padding: '20px',  
            border: '1px sol_id #EAE8DF',  
            boxShadow: '0px 4px 10px 0px #00000026',  
            backgroundColor: '#fff',  
            position: 'relative'  
          }}  
        >  
          <CardMedia component="img" image={image} alt={name} />  
          <Button  
            type="button"  
            fullWidth  
            variant="contained"  
            className="hover-button"  
            sx={{  
              fontWeight: '500',  
              fontSize: "16px",  
              py: 1,  
              position: 'absolute',  
              top: '50%',  
              right: 0,  
              left: 0,  
              transition: 'all .9s',  
              backgroundColor: "#EF6B4A",  
              transform: 'translateY(0)',  
              opacity: 0,  
            }}  
    onClick={(e) => {  
      e.stopPropagation();

      const quantity = 0; 
      addToCart(_id, quantity);    
    }}  
          >  
            Add to Cart  
          </Button>  
        </Box>  
        <CardContent sx={{textAlign:'center'}}>  
          <Typography gutterBottom variant="h5" sx={{ fontSize: '22px', color: '#393280', fontWeight: '600' }}>  
            {name}  
          </Typography>  
          <Typography variant="body2" sx={{ color: "#888888", fontSize: '14px' }}>  
            {author}  
          </Typography>  
          <Typography variant="h6" sx={{ color: "#ED553B", fontSize: '18px', fontWeight: 700 }}>  
            ${price}  
          </Typography>  
        </CardContent>  
      </CardActionArea>  
    </Card>  
  );  
}