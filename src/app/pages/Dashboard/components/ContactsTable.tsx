import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// Import Static Data
import { users } from "../../../data/users.json";

const columns: GridColDef<(typeof users)[number]>[] = [
  { field: "id", headerName: "Num", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerName: "phone",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "city",
    headerName: "city",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const ContactsTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ContactsTable;
