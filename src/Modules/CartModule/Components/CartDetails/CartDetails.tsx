import {  
  Box,  
  Divider,  
  Grid,  
  List,  
  ListItem,  
  ListItemText,  
  Paper,  
  Table,  
  TableBody,  
  TableCell,  
  TableContainer,  
  TableHead,  
  TableRow,  
  Typography,  
} from "@mui/material";  
import axios from "axios";  
import { useEffect, useState } from "react";  
import { NavLink } from "react-router-dom";  
import { URLS } from "../../../../Constants/MAIN-END-POINTS";  
import { RotatingLines } from "react-loader-spinner";  

const isDisabled = true;  
interface Product {  
  _id: string;  
  quantity: number;  
  book: string;  
  subtotal?: number;  
  price?:number;
}  

export default function CartDetails() {  
  const [products, setProducts] = useState<Product[]>([]);  
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState<string | null>(null);  

  const getBooks = async () => {  
    setIsLoading(true);  
    try {  
      const token = localStorage.getItem("userToken");  
      const response = await axios.get(URLS.getAllItems, {  
        headers: {  
          Authorization: `Bearer ${token}`,  
        },  
      });  
    
      setProducts(response?.data?.items);  
    } catch (error) {  
      console.error(error);  
      setError("Failed to fetch products. Please try again.");  
    } finally {  
      setIsLoading(false);  
    }  
  };  

  useEffect(() => {  
    getBooks();  
  }, []);  

  if (isLoading) {  
    return (  
      <Box  
        sx={{  
          display: "flex",  
          justifyContent: "center",  
          alignItems: "center",  
          height: "100vh",  
        }}  
      >  
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

  if (error) {  
    return <Typography color="error">{error}</Typography>;  
  }  

  return (  
    <>  
      <Box  
        component="div"  
        sx={{  
          height: "98px",  
          background: "linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)",  
          display: "flex",  
          justifyContent: "center",  
          alignItems: "center",  
        }}  
      >  
        <Typography sx={{ textDecoration: "none" }}>  
          <NavLink style={{ color: "#393280", textDecoration: "none" }} to="/dashboard/home">  
            HOME  
          </NavLink>  
          {isDisabled ? (  
            <span style={{ color: "#aaa", textDecoration: "none" }}>  
              {" "}  
              / CART  
            </span>  
          ) : (  
            <NavLink style={{ color: "#393280", textDecoration: "none" }} to="cart">  
              / CART  
            </NavLink>  
          )}  
        </Typography>  
      </Box>  
      <Box component="section" sx={{ padding: "3rem" }}>  
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>  
          <Grid item md={9} xs={12}>  
            <TableContainer component={Paper}>  
              <Table sx={{ minWidth: "736px" }} aria-label="simple table">  
                <TableHead>  
                  <TableRow>  
                    <TableCell align="center">Book</TableCell>  
                    <TableCell align="center">Quantity</TableCell>  
                    <TableCell align="center">Cost</TableCell>  
                    <TableCell align="center">Subtotal</TableCell>  
                    <TableCell align="center"></TableCell>  
                  </TableRow>  
                </TableHead>  
                <TableBody>  
                  {products.map((product) => (  
                    <TableRow  
                      key={product._id}  
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}  
                    >  
                      <TableCell component="th" scope="row">  
                        {product.price}  
                      </TableCell>  
                      <TableCell align="right">{product.quantity}</TableCell>  
                      <TableCell align="right"></TableCell>  
                      <TableCell align="right"></TableCell>  
                    </TableRow>  
                  ))}  
                </TableBody>  
              </Table>  
            </TableContainer>  
          </Grid>  
          <Grid item md={3} xs={12}>  
            <List aria-label="mailbox folders">  
              <ListItem>  
                <ListItemText primary="Inbox" />  
              </ListItem>  
              <Divider component="li" />  
              <ListItem>  
                <ListItemText primary="Drafts" />  
              </ListItem>  
              <Divider component="li" />  
              <ListItem>  
                <ListItemText primary="Trash" />  
              </ListItem>  
              <Divider component="li" />  
              <ListItem>  
                <ListItemText primary="Spam" />  
              </ListItem>  
            </List>  
          </Grid>  
        </Grid>  
      </Box>  
    </>  
  );  
}