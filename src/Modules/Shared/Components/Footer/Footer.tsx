import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/sample logo 1.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const links = [
    { title: "HOME", path: "" },
    { title: "ABOUT US", path: "" },
    { title: "BOOKS", path: "" },
    { title: "NEW RELEASES", path: "" },
    { title: "CONTACT US", path: "" },
    { title: "BLOG", path: "" },
  ];

  const importantLinks = [
    { title: "PRIVACY POLICY", path: "" },
    { title: "FAQS", path: "" },
    { title: "TERMS OF SERVICE", path: "" },
  ];

  return (
    <Box
      component="section"
      sx={{
        padding: "3.8rem 1rem",
        backgroundColor: "#ED553B",
      }}
    >
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ color: "#fff" }}
        >
          <Grid item md={6} xs={12}>
            <img src={img} alt="logo" />
            <Typography sx={{ color: "#fff", marginBottom: "18px" }}>
              Nostrud exercitation ullamco laboris nisi ut aliquip
              <br /> ex ea commodo consequat.
            </Typography>
            <Typography sx={{ display: "flex", gap: "20px" }}>
              <FacebookIcon fontSize="large" aria-label="Facebook" />
              <LinkedInIcon fontSize="large" aria-label="LinkedIn" />
              <TwitterIcon fontSize="large" aria-label="Twitter" />
              <InstagramIcon fontSize="large" aria-label="Instagram" />
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: 600,
              }}
            >
              COMPANY
            </Typography>
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              {links.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.3s",
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: 600,
              }}
            >
              IMPORTANT LINKS
            </Typography>
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              {importantLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.3s",
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          sx={{
            color: "#fff",
            fontSize: { xs: "14px", sm: "18px" },
            marginBlock: "5rem 30px",
          }}
        >
          <Grid item md={6} xs={12}>
            <Typography sx={{ fontWeight: 400 }}>
              © 2022 Arihant. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{ fontWeight: 700, textAlign: { xs: "left", sm: "right" } }}
            >
              Privacy | Terms of Service
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
