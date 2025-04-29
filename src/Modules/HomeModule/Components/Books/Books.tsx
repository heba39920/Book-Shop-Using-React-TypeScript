import axios from "axios";
import { useEffect, useState } from "react";
import { URLS } from "../../../../Constants/MAIN-END-POINTS";
import img1 from "../../../../assets/images/book3 4.png";
import img2 from "../../../../assets/images/book16 1.png";
import img3 from "../../../../assets/images/book4 4.png";
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Grid, Typography, Button, Menu, MenuItem} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { NavLink } from "react-router-dom";
import NewReleaseCard from "../NewRelease/NewReleaseCard";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import BookCard from "./BookCard";
import { RotatingLines } from "react-loader-spinner";  
import SideBarItems from "./SideBarItems";
const isDisabled = true;
const imgs = [img1, img2, img3];
export default function Books() {
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
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [fullWidth, setFullWidth] = useState(false);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
  const handleLayoutToFullWidth = () => {
    setFullWidth(true);
  };
  const handleLayoutToCards = () => {
    setFullWidth(false);
  };
  const handleSortOptionClick = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };

  const sortedBooks = () => {
    const sortedArray = [...books];

    switch (sortOption) {
      case "AtoZ":
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZtoA":
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "LowToHigh":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "HighToLow":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sortedArray;
  };

  const startIndex = page * rowsPerPage;
  const currentBooks = sortedBooks().slice(
    startIndex,
    startIndex + rowsPerPage
  );
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
          <NavLink
            style={{ color: "#393280", textDecoration: "none" }}
            to="/dashboard/home"
          >
            HOME
          </NavLink>
          {isDisabled ? (
            <span style={{ color: "#aaa", textDecoration: "none" }}>
              {" "}
              / BOOKS
            </span>
          ) : (
            <NavLink
              style={{ color: "#393280", textDecoration: "none" }}
              to="products"
            >
              / BOOKS
            </NavLink>
          )}
        </Typography>
      </Box>
      <Box component="section" sx={{ padding: "3rem" }}>
  
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item md={3} xs={12}>
            <Box sx={{marginTop:'-12px'}}>
              <SideBarItems title='Price'>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'#393280'}}>
                <Typography sx={{marginRight:'5px'}}>$</Typography>
                <TextField id="outlined-basic"  variant="outlined" />
                <Typography sx={{marginInline:'20px 15px', fontSize:'18px', fontWeight:'500', color:'#888888'}}>to</Typography>
                <Typography sx={{marginRight:'5px'}}>$</Typography>
                <TextField id="outlined-basic"  variant="outlined" />
                </Box>
                </SideBarItems>
              <SideBarItems title='Product type'>.</SideBarItems>
              <SideBarItems title='Availability'>.</SideBarItems>
              <SideBarItems title='Brand'>.</SideBarItems>
              <SideBarItems title='Color'>.</SideBarItems>
              <SideBarItems title='Material'>.</SideBarItems>
            </Box>
          </Grid>
          <Grid item  md={9} xs={12}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap:{xs:'wrap' ,md:'nowrap'}
              }}
            >
              <Button
                variant="contained"
                sx={{
                  cursor:'pointer',
                  backgroundColor: "transparent",
                  color: "#393280",
                  boxShadow: 0,
                  fontWeight: {md:700 , xs:400},
                  fontSize:{xs:'14px'}
                }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                Sort by : Alphabetically, A-Z <KeyboardArrowDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleSortOptionClick("AtoZ")}>
                  Sort by : Alphabetically, A-Z
                </MenuItem>
                <MenuItem onClick={() => handleSortOptionClick("ZtoA")}>
                  Sort by : Alphabetically, Z-A
                </MenuItem>
                <MenuItem onClick={() => handleSortOptionClick("LowToHigh")}>
                  Sort by price: Low to High
                </MenuItem>
                <MenuItem onClick={() => handleSortOptionClick("HighToLow")}>
                  Sort by price: High to Low
                </MenuItem>
              </Menu>
              <TablePagination
                sx={{ color: "#393280" }}
                component="div"
                count={books.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10]}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Typography>
                <Button sx={{ cursor:'pointer'}}>
                  <ViewComfyAltIcon
                    onClick={handleLayoutToCards}
                    sx={{
                      marginRight: "10px",
                      color: fullWidth ? "#000" : "#ED553B",
                    }}
                    fontSize="large"
                  />
                </Button>
                <Button onClick={handleLayoutToFullWidth} sx={{ cursor:'pointer'}}>
                  <ViewHeadlineIcon
                    sx={{ color: fullWidth ? "#ED553B" : "#000" }}
                    fontSize="large"
                  />{" "}
                </Button>
              </Typography>
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
              sx={{justifyContent:'center', alignItems:'center'}}
            >
              {currentBooks.map((book, index) =>
                fullWidth ? (
                  <Grid item md={12} xs={12}>
                    <BookCard 
                    key={book._id}
                      image={imgs.length > 0 ? imgs[index % imgs.length] : ""}
                      author={book?.author}
                      name={book?.name}
                      price={book.price}
                      _id={book._id}  
                    />
                  </Grid>
                ) : (
                  <Grid item md={4}  xs={6}>
                    <NewReleaseCard
                    _id={book._id}
                    key={book._id}
                      image={imgs.length > 0 ? imgs[index % imgs.length] : ""}
                      author={book?.author}
                      name={book?.name}
                      price={book.price}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>

      </Box>
    </>
  );
}
