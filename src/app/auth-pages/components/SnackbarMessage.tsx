import { Snackbar, Alert } from "@mui/material";
// -------------------------------------------------

interface SnackbarMessageProps {
  handleClose: any;
  openSnackbar?: boolean;
  message: string;
}

const SnackbarMessage = ({
  handleClose,
  openSnackbar,
  message,
}: SnackbarMessageProps) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert variant="filled" color="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
