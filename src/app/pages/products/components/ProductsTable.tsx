import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ProductProps } from "../../../../types/Product.interface";
// ----------------------------------------------------------------

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      // Use the provided avatar URL or fallback to a placeholder image
      const imageUrl = params.value;

      if (imageUrl || imageUrl != null || imageUrl != "") {
        return (
          <div className="flex items-center h-full">
            <img src={imageUrl} width={40} />
          </div>
        );
      } else {
        <span>No Image</span>;
      }
    },
  },
  {
    field: "title",
    headerName: "Product Name",
    width: 300,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 180,
    editable: true,
    renderCell: (params) => {
      const price = params.value;
      if (price) {
        return <div>{price.toFixed(2)} $</div>;
      }
    },
  },
  {
    field: "category",
    headerName: "Product Category",
    type: "string",
    width: 130,
    renderCell: (params) => {
      const categ = params.value;
      if (categ) {
        return <Chip label={categ} />;
      }
    },
  },
  {
    field: "count",
    headerName: "Count",
    sortable: false,
    width: 200,
  },
];

interface productsProps {
  products: ProductProps[];
}

const ProductsTable = ({ products }: productsProps) => {
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default ProductsTable;
