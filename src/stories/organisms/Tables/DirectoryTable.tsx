import Container from "@mui/material/Container";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "Status",
    col2: "World",
    col3: "Blah",
    col4: "Blah",
    col5: "Blah",
    col6: "Blah",
    col7: "Blah",
  },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "Blah" },
  { id: 3, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 4, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 5, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 6, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 7, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 8, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 9, col1: "MUI", col2: "is Amazing", col3: "Blah" },
  { id: 10, col1: "MUI", col2: "is Amazing", col3: "Blah" },
];

const baseBehaviour = {
  hideable: false,
  sortable: false,
  minWidth: 150,
};

const columns: GridColDef[] = [
  { field: "col1", headerName: "User name", ...baseBehaviour },
  { field: "col2", headerName: "Organization", ...baseBehaviour },
  { field: "col3", headerName: "Title/Role", ...baseBehaviour },
  { field: "col4", headerName: "Email", ...baseBehaviour },
  { field: "col4", headerName: "Phone", ...baseBehaviour },
];
export const DirectoryTable = () => {
  return (
    <Container sx={{ mt: 4, mb: 2 }}>
      <DataGrid
        style={{ height: 350 }}
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
      />
    </Container>
  );
};
