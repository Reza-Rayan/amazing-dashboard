import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik, FormikHelpers, useField } from "formik";
import * as Yup from "yup";
import { ProjectProps } from "../../../../types/Project.interface";

// Validation schema using Yup
const ProjectSchema = Yup.object().shape({
  title: Yup.string().max(50, "Title too long!").required("Title is required"),
  description: Yup.string()
    .max(500, "Description too long!")
    .required("Description is required"),
  completed: Yup.boolean().required("Completion status is required"),
  image: Yup.string()
    .url("Invalid image URL")
    .required("Image URL is required"),
  category: Yup.string()
    .oneOf(["Application", "Web"], "Invalid category")
    .required("Category is required"),
});

// Custom component for MUI TextField with Formik
const MyTextField: React.FC<{
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
}> = ({ name, label, multiline = false, rows = 1 }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl
      fullWidth
      margin="normal"
      error={Boolean(meta.touched && meta.error)}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextField
        {...field}
        id={name}
        label={label}
        variant="outlined"
        fullWidth
        multiline={multiline}
        rows={rows}
        error={Boolean(meta.touched && meta.error)}
      />
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

// Custom component for MUI Select with Formik
const MySelect: React.FC<{
  name: string;
  label: string;
  options: { value: string; label: string }[];
}> = ({ name, label, options }) => {
  const [field, meta, { setValue }] = useField(name);

  return (
    <FormControl
      fullWidth
      margin="normal"
      error={Boolean(meta.touched && meta.error)}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        {...field}
        id={name}
        label={label}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        value={field.value || ""}
      >
        <MenuItem value="" disabled>
          Select {label}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

// Submit handler function
const handleSubmit = (
  values: ProjectProps,
  { setSubmitting, resetForm }: FormikHelpers<ProjectProps>,
  onSubmit: (values: ProjectProps) => void
) => {
  onSubmit(values);
  console.log(values);
  resetForm();
  setSubmitting(false);
};

interface ProjectFormProps {
  onSubmit: (values: ProjectProps) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        completed: false,
        image: "",
        category: "",
      }}
      validationSchema={ProjectSchema}
      onSubmit={(values, formikBag: any) =>
        handleSubmit(values, formikBag, onSubmit)
      }
    >
      {({ isSubmitting }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
          }}
        >
          <MyTextField name="title" label="Title" />
          <MyTextField
            name="description"
            label="Description"
            multiline
            rows={4}
          />
          <FormControlLabel
            control={<Checkbox name="completed" />}
            label="Completed"
          />
          <MyTextField name="image" label="Image URL" />
          <MySelect
            name="category"
            label="Category"
            options={[
              { value: "Application", label: "Application" },
              { value: "Web", label: "Web" },
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ProjectForm;
