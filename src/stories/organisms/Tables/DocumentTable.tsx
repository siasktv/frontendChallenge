import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
  { field: "col1", headerName: "File Type", ...baseBehaviour },
  { field: "col2", headerName: "Document #", ...baseBehaviour },
  { field: "col3", headerName: "Title", ...baseBehaviour },
  { field: "col4", headerName: "Revision", ...baseBehaviour },
  { field: "col5", headerName: "Status", ...baseBehaviour },
  { field: "col6", headerName: "Discipline", ...baseBehaviour },
  { field: "col7", headerName: "Created by", ...baseBehaviour },
  { field: "col8", headerName: "Date Modified", ...baseBehaviour },
  { field: "col9", headerName: "Revision Date", ...baseBehaviour },
  { field: "col10", headerName: "File Size", ...baseBehaviour },
];

interface DocumentTableProps {
  allowDownload?: boolean;
  allowUpload?: boolean;
}
export const DocumentTable = ({
  allowDownload,
  allowUpload,
}: DocumentTableProps) => {
  const downloadDocuments = () => {};
  const addDocument = () => {};
  return (
    <Container sx={{ mb: 2 }} maxWidth="lg">
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        {allowDownload ? (
          <Button
            variant="contained"
            onClick={downloadDocuments}
            endIcon={<CloudDownloadIcon />}
            style={{ textTransform: "none" }}
          >
            Download Documents
          </Button>
        ) : null}
        {allowUpload ? (
          <Button
            variant="contained"
            onClick={addDocument}
            endIcon={<CloudUploadIcon />}
            style={{ textTransform: "none" }}
          >
            Add Document
          </Button>
        ) : null}
      </Box>
      <DataGrid
        style={{ height: 350, marginTop: "10px" }}
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
      />
    </Container>
  );
};
