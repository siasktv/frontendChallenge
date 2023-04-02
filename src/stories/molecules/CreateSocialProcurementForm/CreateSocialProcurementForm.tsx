import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useState } from "react";

export const CreateSocialProcurementForm = () => {
  const [rows, setRows] = useState<GridRowsProp>([
    {
      id: 0,
      col1: " ",
      col2: " ",
      col3: " ",
    },
  ]);

  const baseBehaviour = {
    hideable: false,
    sortable: false,
    minWidth: 150,
    flex: 1,
    editable: true,
  };

  const validCellInput = (value: string) =>
    value !== "" && value !== " " && !!value;

  const validateRow = (rowToValidate: GridValidRowModel) => {
    return (
      validCellInput(rowToValidate.col1) &&
      validCellInput(rowToValidate.col2) &&
      validCellInput(rowToValidate.col3)
    );
  };
  const validateRows = (rowsToValidate: GridValidRowModel[]) => {
    if (rowsToValidate.length === 0) {
      return [
        {
          id: 0,
          col1: " ",
          col2: " ",
          col3: " ",
        },
      ];
    }

    const lastRow = rowsToValidate[rowsToValidate.length - 1];

    if (validateRow(lastRow)) {
      rowsToValidate.push({
        id: rows.length,
        col1: " ",
        col2: " ",
        col3: " ",
      });
    }

    rowsToValidate.map((r, index) => {
      return { ...r, id: index };
    });
    return rowsToValidate;
  };

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Requirement name", ...baseBehaviour },
    { field: "col2", headerName: "Total needed", ...baseBehaviour },
    { field: "col3", headerName: "Value", ...baseBehaviour },
    {
      field: "col4",
      headerName: "Action",
      ...baseBehaviour,
      editable: false,
      renderCell: (params: any) => {
        if (params.id === params.row.id) {
          if (validateRow(params.row)) {
            const handleOnDeleteRow = () => {
              setRows(validateRows(rows.filter((r) => r.id !== params.row.id)));
            };

            return (
              <Button
                variant="contained"
                color={"error"}
                onClick={handleOnDeleteRow}
              >
                Delete
              </Button>
            );
          }
        }
        return null;
      },
    },
  ];

  const handleProcessRowUpdate = (newRow: any, oldRow: any) => {
    const updatedRows = rows.map((r) => (r.id === newRow.id ? newRow : r));
    setRows(validateRows(updatedRows));
  };

  return (
    <Box>
      <Box
        sx={(theme) => {
          return {
            height: "50vh",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.primary.main,
              color: "#ffffff",
            },
          };
        }}
      >
        <DataGrid
          style={{ marginTop: "10px" }}
          rows={rows}
          columns={columns}
          processRowUpdate={handleProcessRowUpdate}
          disableColumnFilter
          disableColumnMenu
          hideFooter
        />
      </Box>
    </Box>
  );
};
