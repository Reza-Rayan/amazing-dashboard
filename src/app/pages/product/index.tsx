import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
// Images & Icons
import { ArrowLeftIcon, CreditCardIcon } from "@heroicons/react/outline";
// Custom Components
import CContainer from "../../templates/CContainer";
// Mock Data
import { products } from "../../data/products.json";

const ProductPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const product = products.find((prod) => prod.title === title);
  return (
    <>
      <CContainer>
        <Stack display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography
              variant="h1"
              component={"h4"}
              fontSize={32}
              fontWeight={700}
            >
              {product?.title}
            </Typography>
            <Button
              sx={{ fontSize: "13px" }}
              variant="text"
              onClick={() => navigate("/products")}
            >
              <IconButton>
                <ArrowLeftIcon width={16} />
              </IconButton>
              Back to PRoduct List
            </Button>
          </Box>
        </Stack>
      </CContainer>
      <CContainer extraClasses="mt-4">
        <Box display={"flex"} justifyContent={"space-between"}>
          <div>
            <Typography
              variant="h2"
              fontSize={20}
              fontWeight={700}
              marginBottom={2}
            >
              Description:
            </Typography>
            <Typography variant="body1">{product?.description}</Typography>
            <Box
              marginTop={4}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Typography variant="h6" fontSize={18}>
                Price:{" "}
                <span className="text-2xl text-green-600">
                  {product?.price.toFixed(2)}$
                </span>
              </Typography>
              <Divider />
              <Typography variant="h6" fontSize={18}>
                Count:{" "}
                <span
                  className={`text-2xl ${
                    Number(product?.count) > 4
                      ? "text-slate-700"
                      : "text-red-700"
                  }`}
                >
                  {product?.count}
                </span>
              </Typography>
              <Divider />
              <Typography variant="h6" fontSize={18}>
                Weight:{" "}
                <span className="text-2xl text-green-600">
                  {product?.weight}
                </span>
              </Typography>
              {/* Buy Buttons Section */}
              <Box display={"flex"} justifyContent={"center"} gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<CreditCardIcon width={16} />}
                  onClick={handleClick}
                >
                  Add to Cart
                </Button>
                <TextField
                  type="number"
                  className="w-20"
                  placeholder="Count"
                  variant="outlined"
                  color="secondary"
                  defaultValue={1}
                />
              </Box>
              {/* End Here */}
            </Box>
          </div>
          <div className="mx-auto">
            <img
              src={product?.image}
              alt={product?.title}
              className="rounded-2xl"
              width={400}
            />
          </div>
        </Box>
      </CContainer>

      {/* SnackBars */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" color="success">
          Product added to cart
        </Alert>
      </Snackbar>
      {/* End Here */}
    </>
  );
};

export default ProductPage;
