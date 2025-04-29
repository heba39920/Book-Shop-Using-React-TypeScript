import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { AUTH_URLS } from "../../../../Constants/END-POINTS";
import {
  emailValidation,
  passValidation,
} from "../../../../Constants/VALIDATION";
import { useAuthContext } from "../../../../Context/AuthContext/AuthContext";
import { useState } from "react";

export interface FormInputs {
  email?: string;
  password?: string;
  otp?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
}
export interface AuthContextType {  
    saveData: () => void;
  
} 
const Login: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false); 
const {saveData}= useAuthContext() as AuthContextType;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = async (data: FormInputs) => {
    setLoading(true);
    try {
         
    
      const response = await axios.post(AUTH_URLS.login, data);
      localStorage.setItem("userToken", response?.data?.data?.accessToken);
      saveData();
      navigate("/dashboard");
      toast.success("Logged in successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 2000,
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Grid sx={{ width: "100%" }}>
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ mt: 2, color: "#6B6B87" }}
        >
          Welcome back!
        </Typography>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Login to your account
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
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>

        {/* ------------------------ password ----------------------- */}

        <TextField
          required
          fullWidth
          type="password"
          id="password"
          autoComplete="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{
            backgroundColor: "#F4F4FF",
            mt: 3,
          }}
          placeholder="**********"
          {...register("password", { required: passValidation.required })}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>
        {/* ------------------------ remember me and forgot password ----------------------- */}
        <Grid container alignItems="center">
          <Grid item xs>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
              sx={{
                color: "#6251DD",
              }}
            />
          </Grid>
          <Grid item onClick={() => navigate("/forget_password")}>
            <Typography
              variant="body2"
              sx={{
                color: "#6251DD",
                cursor: "pointer",
              }}
            >
              Forgot Password ?
            </Typography>
          </Grid>
        </Grid>
        {/* ==================================== */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: "18px",
            py: 1,
            mt: 6,
            backgroundColor: "#EF6B4A",
            "&:hover": {
              backgroundColor: "#Ee6B4c",
            },
          }}
        >
         
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"} 
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
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
          Register
        </Button>
      </Box>
    </>
  );
};

export default Login;
