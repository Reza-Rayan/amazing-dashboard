import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarGroup,
  Box,
  Stack,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
// Custom Components
import SnackbarMessage from "./components/SnackbarMessage";
import { SnackbarCloseReason } from "@mui/joy/Snackbar/SnackbarProps";
// ----------------------------------------------------------

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  firstName: yup.string().required("You must enter your first name"),
  lastName: yup.string().required("You must enter your last name"),
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter an email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  acceptTermsConditions: yup
    .boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const Signup = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <>
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        className="h-screen"
      >
        <div className="bg-[#1E293B] w-1/2 flex flex-col items-center justify-center gap-y-4">
          <Typography
            variant="h4"
            fontSize={40}
            fontWeight={700}
            color={"white"}
          >
            Welcome to
            <br />
            Amazing Dashboard
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            width={400}
            textAlign={"justify"}
            fontSize={14}
            lineHeight={2}
            className="text-slate-400"
          >
            Amazing Dashboard helps developers to build organized and well-coded
            dashboards full of beautiful and rich modules. Join us and start
            building your application today.
          </Typography>
          <div className="flex items-center">
            <AvatarGroup
              sx={{
                "& .MuiAvatar-root": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Avatar src="/assets/avatar.jpg" />
              <Avatar src="/assets/avatar2.jpg" />
              <Avatar src="/assets/avatar3.jpg" />
            </AvatarGroup>
            <div className="ml-2 font-medium tracking-tight text-slate-400">
              More than 17k people joined us, it's your turn
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Box className="shadow-lg bg-white py-8 px-24 rounded-2xl">
            <Typography
              fontSize={20}
              fontStyle={"italic"}
              fontWeight={500}
              className="text-gray-600"
            >
              Sign up in Amazing Dashboard
            </Typography>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                acceptTermsConditions: false,
              }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                handleClick();
              }}
            >
              {({ isValid, dirty }) => (
                <Form
                  name="registerForm"
                  noValidate
                  className="flex flex-col justify-center gap-y-6 w-full mt-10"
                >
                  <Field
                    name="firstName"
                    as={TextField}
                    label="First Name"
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    error={Boolean(<ErrorMessage name="firstName" />)}
                    helperText={<ErrorMessage name="firstName" />}
                  />
                  <Field
                    name="lastName"
                    as={TextField}
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    error={Boolean(<ErrorMessage name="lastName" />)}
                    helperText={<ErrorMessage name="lastName" />}
                  />
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                    error={Boolean(<ErrorMessage name="email" />)}
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    fullWidth
                    error={Boolean(<ErrorMessage name="password" />)}
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    name="passwordConfirm"
                    as={TextField}
                    label="Password (Confirm)"
                    type="password"
                    variant="outlined"
                    required
                    fullWidth
                    error={Boolean(<ErrorMessage name="passwordConfirm" />)}
                    helperText={<ErrorMessage name="passwordConfirm" />}
                  />
                  <FormControl
                    className="items-center"
                    error={Boolean(
                      <ErrorMessage name="acceptTermsConditions" />
                    )}
                  >
                    <FormControlLabel
                      label="I agree to the Terms of Service and Privacy Policy"
                      control={
                        <Field
                          name="acceptTermsConditions"
                          as={Checkbox}
                          size="small"
                          color="primary"
                        />
                      }
                    />
                    <FormHelperText>
                      <ErrorMessage name="acceptTermsConditions" />
                    </FormHelperText>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="w-full mt-24"
                    aria-label="Register"
                    type="submit"
                    size="large"
                    disabled={!(isValid && dirty)}
                  >
                    Create your free account
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </Stack>
      <SnackbarMessage handleClose={handleClose} openSnackbar={openSnackbar} />
    </>
  );
};

export default Signup;
