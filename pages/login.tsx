import React from "react";
import styles from "@/styles/View.module.css";

//Sweetalert
import Swal from "sweetalert2";

//React Hook Form
import { Controller, useForm } from "react-hook-form";
//Yup
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//MUI
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { isAbsolute } from "path";

type Props = {};

interface User {
  username: string;
  password: string;
}

interface UserModal {
  forgot_password: string;
}

const Login = ({}: Props) => {
  const errorColor = red[500];
  const defaultValue: User = { username: "", password: "" };
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: defaultValue,
    resolver: yupResolver(formValidateSchema),
  });

  const onSubmit = async (data: User) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      const URL = process.env.NEXT_PUBLIC_BASE_URL_API;
      await fetch(`${URL}/auth/login`, {
        method: "POST",
        body: formData,
      })
        .then(async (rawResponse) => {
          rawResponse.json().then((data) => {
            if (data.status == "success") {
              Swal.fire("Success!", "", "success").then(function () {
                location.href = "/";
              });
              return false;
            } else {
              Swal.fire("Error!", "", "error").then(function () {
                return false;
              });
            }
          });
        })
        .catch((error) => {
          Swal.fire("Error!", "", "error").then(function () {
            return false;
          });
          return false;
        });
    } catch (e) {
      console.log("error!");
    }
  };

  // Modal
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [forgot_password, setForgotPassword] = React.useState("");

  const onSubmitModal = async (event: any) => {
    event.preventDefault();
    setOpen(false);
    try {
      const formData = new FormData();
      formData.append("forgot_password", `${forgot_password}`);
      const URL = process.env.NEXT_PUBLIC_BASE_URL_API;
      await fetch(`${URL}/auth/forgot_password`, {
        method: "POST",
        body: formData,
      })
        .then(async (rawResponse) => {
          rawResponse.json().then((data) => {
            if (data.status == "success") {
              Swal.fire("Success!", "", "success").then(function () {
                location.href = "/login";
              });
              return false;
            } else {
              Swal.fire("Error!", "", "error").then(function () {
                return false;
              });
            }
          });
        })
        .catch((error) => {
          Swal.fire("Error!", "", "error").then(function () {
            return false;
          });
          return false;
        });
    } catch (e) {
      console.log("error!");
    }
  };
  // End Modal

  const [type, setType] = React.useState<string>("password");
  const [icon, setIcon] = React.useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 10,
          borderRadius: 5,
          px: 7,
          py: 7,
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Printing Web Platform
        </Typography>
        <br />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: 500 }}
          autoComplete="off"
        >
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                id="username"
                label="Username"
                type="text"
                fullWidth
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            name="username"
            control={control}
            defaultValue=""
          />
          {errors.username?.message && (
            <Typography sx={{ color: errorColor }}>
              {errors.username?.message}
            </Typography>
          )}
          <br />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                label="Password"
                type={type}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                autoComplete="new-password"
                sx={{ marginTop: "10px" }}
              />
            )}
            name="password"
            control={control}
            defaultValue=""
          />
          <span className="password-toogle-icon" onClick={handleToggle}>
            <Icon icon={icon} size={25} />
          </span>
          {errors.password?.message && (
            <Typography sx={{ color: errorColor }}>
              {errors.password?.message}
            </Typography>
          )}
          {/* <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onClick={handleToggle}
              />
            }
            label="View password"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Button onClick={handleOpen}>
                <u>Forgot password</u>
              </Button>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </Box>

        {/* Modal */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} style={{ textAlign: "center" }}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Please input your e-mail address *
              </Typography>
              <br />
              <Box
                component="form"
                onSubmit={onSubmitModal}
                style={{ width: 500 }}
                autoComplete="off"
              >
                <TextField
                  required
                  fullWidth
                  id="forgot_password"
                  name="forgot_password"
                  value={forgot_password}
                  type="email"
                  label="example@xxx.com"
                  onChange={(event) => setForgotPassword(event.target.value)}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  size="large"
                  sx={{ marginTop: "10px" }}
                  fullWidth
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
};

export default Login;
