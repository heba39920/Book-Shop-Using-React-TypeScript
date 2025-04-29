import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import axios from "axios";
import { toast } from "react-toastify";
import { AUTH_URLS } from "../../../../Constants/END-POINTS";
import { emailValidation } from "../../../../Constants/VALIDATION";
import { FormInputs } from "../Login/Login";

const ForgetPassword : React.FC = (): JSX.Element =>{
    const navigate = useNavigate();
   const {register, handleSubmit , formState: {errors} } = useForm<FormInputs>();
   const onSubmit = async (data:FormInputs) => { 
   
    try {
       
        const response = await axios.post(AUTH_URLS.forgotPassword, data);
        console.log(response);
        
      
        navigate("/reset_password");
        toast.success("OTP has been sent successfully",{
            position: "top-center",
            autoClose: 2000,
        });
    } catch (error) {
        console.log(error);
        toast.error("Invalid email or password",{
            position: "top-center",
            autoClose: 2000,
        });
        
    }
   }
   
  return (
    <>
            <Grid sx={{ width: "100%" }}>
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ mt: 2, color: "#6B6B87" }}
        >
          Welcome Back!
        </Typography>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Forget Password !
        </Typography>
      </Grid>
  
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        sx={{ mt: 2, width: "100%" }}
      >
        {/* ------------------------ email ----------------------- */}
  
        <TextField
          label="Email"
          required
          fullWidth
          id="email"
          type="email"
          autoComplete="email"
        
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            backgroundColor: "#F4F4FF",
            mt: 2,
          }}
          placeholder="john@mail.com"
          {...register("email", { required: emailValidation.required })}
        />
        <Typography variant="body2"
        sx={{
          mt: 1,
          color: "#757575", 
        }} />
  
 
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
            fontSize: "18px",
            py: 1,
            mt: 1,
            mb: 2,
            color: "#6251DD",
            borderColor: "#6251DD",
            "&:hover": {
              borderColor: "#6251DD",
              backgroundColor: "rgba(98, 81, 221, 0.08)",
            },
          }}
        >
          Send
        </Button>
        {/* {loading? <Typography sx={{
          textAlign:"center"
        }}
        >
         Logging in...
        </Typography>:""} */}
      </Box>
    </>
  )
}
export default  ForgetPassword;