import { Snackbar, Alert } from "@mui/material";
// -------------------------------------------------

interface SnackbarMessageProps {
  handleClose: any;
  openSnackbar?: boolean;
}

const SnackbarMessage = ({
  handleClose,
  openSnackbar,
}: SnackbarMessageProps) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert variant="filled" color="success">
        Your account has been registered succussfully
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
