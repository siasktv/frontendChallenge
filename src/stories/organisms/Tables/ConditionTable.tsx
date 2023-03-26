import PostAdd from "@mui/icons-material/PostAdd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useNavigate, useNavigation } from "react-router-dom";

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
  { field: "col2", headerName: "Permit #", ...baseBehaviour },
  { field: "col4", headerName: "Condition Name", ...baseBehaviour },
  { field: "col5", headerName: "Action Required", ...baseBehaviour },
  { field: "col6", headerName: "Responsible", ...baseBehaviour },
  { field: "col7", headerName: "Discipline", ...baseBehaviour },
  { field: "col7", headerName: "Due Date", ...baseBehaviour },
];
export const ConditionTable = () => {
  const navigate = useNavigate();
  const createNewCondition = () => {};
  const downloadSubmission = () => {};
  const handleRowclick = () => {
    navigate("/condition");
  };

  return (
    <Container sx={{ mt: 4, mb: 2 }}>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          onClick={downloadSubmission}
          style={{ textTransform: "none" }}
          endIcon={<CloudDownloadIcon />}
        >
          Download Submission
        </Button>

        <Button
          variant="contained"
          onClick={createNewCondition}
          style={{ textTransform: "none", marginLeft: "5px" }}
          endIcon={<PostAdd />}
        >
          New Condition
        </Button>
      </Box>
      <DataGrid
        style={{ height: 350, marginTop: "10px" }}
        rows={rows}
        columns={columns}
        onRowClick={handleRowclick}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
      />
    </Container>
  );
};
