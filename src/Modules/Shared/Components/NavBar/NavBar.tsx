import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const drawerWidth = 230;
const navItems = [
  { title: "HOME", path: "home" },
  { title: "ABOUT US", path: "" },
  { title: "BOOKS", path: "books" },
  { title: "NEW RELEASES", path: "" },
  { title: "CONTACT US", path: "" },
  { title: "BLOG", path: "" },
];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink style={{color:'#111', textDecoration:'none'}}  to={item.path}>{item.title}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundColor: "#393280" }}
          className="appBar"
          position="static"
        >
          <Toolbar sx={{ alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "15px", sm: "18px" },
              }}
            >
              <LocalPhoneIcon sx={{ marginInlineEnd: "5px" }} />
              +91 8374902234
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <FacebookIcon />
              <InstagramIcon sx={{ marginInline: "5px" }} />
              <LinkedInIcon />
              <TwitterIcon sx={{ marginInline: "5px" }} />
              <PinterestIcon />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "122px ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "0",
            color: "#000",
            position: "static",
          }}
          component="nav"
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Avatar alt="Cindy Baker" />
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                alignItems: "center",
                borderColor: "divider",
                borderRadius: 2,
                bgcolor: "background.paper",
                color: "text.secondary",
                "& svg": {
                  m: 2,
                },
              }}
            >
              {navItems.map((item) => (
                <>
                  <Button key={item.title} sx={{ color: "#111", fontSize: "18px" }}>
                    <NavLink style={{color:'#111', textDecoration:'none'}} to={item.path}> {item.title}</NavLink>
                  </Button>
                  <Divider orientation="vertical" variant="middle" flexItem />
                </>
              ))}
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                borderColor: "divider",
                borderRadius: 2,
                bgcolor: "background.paper",
                color: "text.secondary",
                "& svg": {
                  m: 1,
                },
              }}
            >
               <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'#393280'}}
      >
                    <PersonIcon sx={{fontSize:'1.9rem'}}/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
              
              <Divider orientation="vertical" variant="middle" flexItem />
              <ShoppingBagOutlinedIcon sx={{fontSize:'1.9rem' , color:"#393280"}}/>
              <Divider orientation="vertical" variant="middle" flexItem />
              <FavoriteBorderOutlinedIcon sx={{fontSize:'1.9rem'  , color:'#393280'}}/>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}
