import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// Import Static Data
import { Avatar } from "@mui/material";
import { users } from "../../../data/users.json";

const columns: GridColDef<(typeof users)[number]>[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      // Use the provided avatar URL or fallback to a placeholder image
      const avatarUrl = params.value;

      if (avatarUrl || avatarUrl != null) {
        return <Avatar src={avatarUrl} />;
      } else {
        <Avatar />;
      }
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "phone",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "city",
    headerName: "city",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
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
