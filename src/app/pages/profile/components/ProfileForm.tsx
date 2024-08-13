import { Box, Stack, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { UserProps } from "../../../../types/User.interface";

// Validation Schema with Yup
const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Required"),
  bio: Yup.string().min(10, "Bio should be longer").required("Required"),
  city: Yup.string().required("Required"),
});

const ProfileForm = ({ user }: { user: UserProps }) => {
  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        city: user.city,
      }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Simulate a form submission, replace with real API call
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Stack direction={"column"} spacing={2}>
            <Field
              name="firstName"
              as={TextField}
              label="First Name"
              fullWidth
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <Field
              name="lastName"
              as={TextField}
              label="Last Name"
              fullWidth
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <Field
              name="phone"
              as={TextField}
              label="Phone"
              fullWidth
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
            <Field
              name="bio"
              as={TextField}
              label="Bio"
              fullWidth
              multiline
              rows={4}
              error={touched.bio && Boolean(errors.bio)}
              helperText={touched.bio && errors.bio}
            />
            <Field
              name="city"
              as={TextField}
              label="City"
              fullWidth
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />
            <Box className="mt-4">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="bg-indigo-700 hover:bg-indigo-800 text-white"
              >
                Update Profile
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
