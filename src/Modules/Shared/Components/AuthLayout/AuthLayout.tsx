import { Outlet } from "react-router-dom";
import { Grid, Paper, Box } from "@mui/material";
import booksLogo from '../../../../assets/images/Logo.png';
import bookStoreImg from '../../../../assets/images/Picture.png';

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <Grid container component="main" sx={{  height: '100vh', overflowY: 'hidden' }}>
      {/* Left Image Section */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundImage: `url(${bookStoreImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: ({ palette }) =>
            palette.mode === "light" ? palette.grey[50] : palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Right Form Section */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "85%", md: "75%" },
            maxWidth: "500px",
          }}
        >
          <img src={booksLogo} alt="Bookstore Logo" style={{ marginBottom: 20 }} />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;