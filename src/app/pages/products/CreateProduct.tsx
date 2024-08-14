import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import CContainer from "../../templates/CContainer";

// Validation schema
const validationSchema = Yup.object({
  title: Yup.string().required("Product title is required"),
  description: Yup.string().required("Product description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  count: Yup.number()
    .required("Count is required")
    .integer("Count must be an integer")
    .min(0, "Count cannot be negative"),
  weight: Yup.string().required("Weight is required"),
});

const CreateProduct = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = (values: any) => {
    // Handle form submission (e.g., send values to an API)
    console.log("Product submitted:", values);
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <>
      <CContainer>
        <Typography
          variant="h1"
          component="h4"
          fontSize={26}
          fontWeight={700}
          display={"flex"}
          className="text-gray-600"
        >
          <PlusIcon width={30} />
          Create a Product
        </Typography>
      </CContainer>
      <CContainer extraClasses="mt-4">
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: 0,
            count: 0,
            weight: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Field
                  as={TextField}
                  name="title"
                  label="Product Title"
                  variant="outlined"
                  fullWidth
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
                <Field
                  as={TextField}
                  name="description"
                  label="Product Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
                <Field
                  as={TextField}
                  name="price"
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                />
                <Field
                  as={TextField}
                  name="count"
                  label="Count"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={touched.count && Boolean(errors.count)}
                  helperText={touched.count && errors.count}
                />
                <Field
                  as={TextField}
                  name="weight"
                  label="Weight"
                  variant="outlined"
                  fullWidth
                  error={touched.weight && Boolean(errors.weight)}
                  helperText={touched.weight && errors.weight}
                />
                <Button type="submit" variant="contained" color="primary">
                  Create Product
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CContainer>

      {/* SnackBars */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" color="success">
          Product created successfully
        </Alert>
      </Snackbar>
      {/* End Here */}
    </>
  );
};

export default CreateProduct;
