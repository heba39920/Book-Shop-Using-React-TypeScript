import {
  Box,
  Button,
  Checkbox,
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
  otpValidation,
  passValidation,
} from "../../../../Constants/VALIDATION";
import { FormInputs } from "../Login/Login";

const ResetPassword: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = async (data: FormInputs) => {
    try {
 
      const response = await axios.post(AUTH_URLS.resetPassword, data);
      console.log(response);

      navigate("/login");
      toast.success("password has been reset successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 2000,
      });
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
          Reset Your Password Now !
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
        {/* {--------------------------OTP-----------------------------} */}
        <TextField
          label="OTP"
          required
          fullWidth
          id="OTP"
          type="text"
          autoComplete="OTP"
          sx={{
            backgroundColor: "#F4F4FF",
            mt: 2,
          }}
          {...register("otp", { required:otpValidation.required })}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#757575",
          }}
        ></Typography>
        {/* {-------------------------------------------------------} */}

        {/* ------------------------ password ----------------------- */}

        <TextField
          required
          fullWidth
          type="password"
          id="password"
          autoComplete="password"
          label="New Password"
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
          Send
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
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
          login
        </Button>
        {/* {loading? <Typography sx={{
        textAlign:"center"
      }}
      >
       Logging in...
      </Typography>:""} */}
      </Box>
    </>
  );
};

export default ResetPassword;
