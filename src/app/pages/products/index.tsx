import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
// Custom Components
import CContainer from "../../templates/CContainer";
import { PlusIcon } from "@heroicons/react/outline";
import ProductsTable from "./components/ProductsTable";
// Mock Data
import { products } from "../../data/products.json";
// -------------------------------------------------
const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <CContainer>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            variant="h1"
            component="h4"
            fontSize={30}
            fontWeight={700}
          >
            Products
          </Typography>
          <Button
            variant="contained"
            startIcon={<PlusIcon width={20} />}
            onClick={() => navigate("create")}
          >
            Create
          </Button>
        </Box>
      </CContainer>
      <CContainer extraClasses="mt-4">
        <ProductsTable products={products} />
      </CContainer>
    </>
  );
};

export default Products;
