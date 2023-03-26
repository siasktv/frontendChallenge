import PostAdd from "@mui/icons-material/PostAdd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

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
  { field: "col1", headerName: "Status", ...baseBehaviour },
  { field: "col2", headerName: "Project Name", ...baseBehaviour },
  { field: "col3", headerName: "Permit Name", ...baseBehaviour },
  { field: "col4", headerName: "Permit Type", ...baseBehaviour },
  { field: "col5", headerName: "Permit Manager", ...baseBehaviour },
  { field: "col6", headerName: "Permit Approver", ...baseBehaviour },
  { field: "col7", headerName: "Due Date", ...baseBehaviour },
];
export const PermitTable = () => {
  const navigate = useNavigate();
  const createNewPermit = () => {};
  const handleRowClick = (params: any) => {
    navigate("/conditions");
  };

  return (
    <Container sx={{ mt: 4, mb: 2 }}>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          onClick={createNewPermit}
          style={{ textTransform: "none" }}
          endIcon={<PostAdd />}
        >
          New Permit
        </Button>
      </Box>
      <DataGrid
        style={{ height: 350, marginTop: "10px" }}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
      />
    </Container>
  );
};
