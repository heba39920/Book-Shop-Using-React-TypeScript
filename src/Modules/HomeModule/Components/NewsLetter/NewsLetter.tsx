import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
export default function NewsLetter() {
  return (
    <Box
    component="section"
    sx={{ paddingBottom: "4rem", backgroundColor: "#FCECEC ",display:'flex',justifyContent:'center'}}
  >
    <Box sx={{width:{md:'1261px', xs:'100%'} ,height:{md:'333px', xs:'100%'},backgroundColor:'#ED553B', textAlign:'center', color:'#fff',marginBottom:'7rem'}}>
    <Typography
        sx={{
          fontSize: {
            xs: "30px",
            md: "56px",
          },

          paddingBlock: {
            xs: "3rem 0",
          },

          fontWeight: "700",
          textTransform: "capitalize",
          marginTop: {
            xs: "20px",
          },
        }}
          
        variant="h2"
        component="h2"
      >
      Subscribe to Our Newsletter
      </Typography>
      <Typography   sx={{ marginTop: "10px", fontSize: "20px" , fontWeight:'500'}}>
      Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,<br/> consectetur. Elit adipiscing enim pharetra hac.
      </Typography>
     <Typography sx={{marginTop:'80px'}}>
     <FormControl sx={{ m: 1,width:{md:'698px', xs:'97.2%'}, backgroundColor:'#fff' ,  }} variant="outlined">
          <OutlinedInput
          
          sx={{ 
       
           padding:{
            md:'10px',
            xs:'0 5px'
           }
          }
          }
        placeholder="youremail123@gmail.com"
            id="email"
            type='email'
            endAdornment={
              <InputAdornment position="end">
                    <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: {md:"18px", xs:'14px'},
            py: 1,
           
            backgroundColor: "#ED553B",
            "&:hover": {
              backgroundColor: "#ED553B",
            },
          }}
        >
         
     subscribe
        </Button>
              </InputAdornment>
            }
            startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                      <EmailIcon/>
                  </IconButton>
                </InputAdornment>
              }
            
          />
           
        
        </FormControl>
     </Typography>
    </Box>
  </Box>
  )
}
