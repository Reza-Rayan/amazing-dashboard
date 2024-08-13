import { Typography } from "@mui/material";
// Custom Components
import CContainer from "../../templates/CContainer";
// --------------------------------------------------

const CreateProduct = () => {
  return (
    <>
      <CContainer>
        <Typography variant="h1" component="h4" fontSize={30} fontWeight={700}>
          Create a Product
        </Typography>
      </CContainer>
    </>
  );
};

export default CreateProduct;
