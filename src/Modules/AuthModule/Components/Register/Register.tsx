import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { AUTH_URLS } from "../../../../Constants/END-POINTS";
import {
  emailValidation,
  first_nameValidation,
  last_nameValidation,
  passValidation,
  roleValidation,
} from "../../../../Constants/VALIDATION";
import { FormInputs } from "../Login/Login";
const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Customer",
    label: "Customer",
  },
];
const Register: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {

;
    try {
      const response = await axios.post(AUTH_URLS.register, data);
      console.log(response);

      navigate("/login");
      toast.success("Registered successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);

      toast.error("Registration failed. Please check your details.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Grid sx={{ width: "100%", marginY: "5" }}>
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ mt: 2, color: "#6B6B87" }}
        >
          Create New Account
        </Typography>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Register
        </Typography>
      </Grid>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        sx={{ mt: 2, width: "100%", marginY: "5" }}
      >
        {/* ------------------------ first name and last name ----------------------- */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              required
              fullWidth
              id="first_name"
              type="text"
              autoComplete="given-name"
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              sx={{
                backgroundColor: "#F4F4FF",
                mt: 2,
              }}
              {...register("first_name", {
                required: first_nameValidation.required,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              required
              fullWidth
              id="last_name"
              type="text"
              autoComplete="family-name"
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              sx={{
                backgroundColor: "#F4F4FF",
                mt: 2,
              }}
              {...register("last_name", {
                required: last_nameValidation.required,
              })}
            />
          </Grid>
        </Grid>

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
          {...register("email", { required: emailValidation.required })}
        />

        {/* ------------------------ password ----------------------- */}
        <TextField
          label="Password"
          required
          fullWidth
          type="password"
          id="password"
          autoComplete="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{
            backgroundColor: "#F4F4FF",
            mt: 3,
          }}
          {...register("password", { required: passValidation.required })}
        />
        {/* {----------------------------------role-----------------------------------------} */}
        <TextField
          id="role"
          required
          fullWidth
          select
          label="Role"
          defaultValue="user"
          error={!!errors.role}
          helperText={errors.role?.message}
          sx={{
            backgroundColor: "#F4F4FF",
            mt: 3,
          }}
          {...register("role", { required: roleValidation.required })}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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

        {/* Submit Buttons */}
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
              backgroundColor: "#Ee6B4C",
            },
          }}
        >
          Register
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
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
          Login
        </Button>
      </Box>
    </>
  );
};

export default Register;
