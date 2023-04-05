import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import PieChart from "../../molecules/Charts/PieChart/PieChart";

function RowRespondent() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            Respondent
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Business Name</TableCell>
                    <TableCell>Angus Builders Ltd</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="2">
                    <TableCell>Representative</TableCell>
                    <TableCell> Angus McIntyre</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>Address</TableCell>
                    <TableCell>360 Collins St</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell></TableCell>
                    <TableCell>Melbourne, Victoria, 3000</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>Email</TableCell>
                    <TableCell>angus.mcintyre@payapps.com</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>ABN</TableCell>
                    <TableCell>54354354334</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">04115258068</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function RowSummary() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            123 Main Street: Acme Electrical
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow key="1">
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Approved To Date</TableCell>
                    <TableCell align="right">When Complete</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Contract Works</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">$58,840.00</TableCell>
                    <TableCell align="right">$644,395.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="2">
                    <TableCell>Approved Variations</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">$12,500,00</TableCell>
                    <TableCell align="right">$12,500,00</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>Unapproved Variations</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">$0</TableCell>
                    <TableCell align="right">$0</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>Total Works</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">$71,340.00</TableCell>
                    <TableCell align="right">$656.895</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow key="3">
                    <TableCell>Rejected Variations</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">$0</TableCell>
                    <TableCell align="right">$0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const Dashboard = () => {
  return (
    <>
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Stuart Dent</Typography>
          <Typography variant="h5">Summary of Overall Commitments</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">My Dashboard</Typography>
          <Typography variant="h5">User & Company Information</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableBody>
              <RowSummary />
            </TableBody>
          </Table>
        </TableContainer>
        <Paper>
          <Grid container>
            <Grid item xs={4}>
              <Grid container alignContent="center" justifyContent="center">
                <Grid item xs={6} mt={0.5}>
                  <PieChart />
                </Grid>
                <Grid item xs={6}>
                  <Typography>11%</Typography>
                  <Typography>Complete</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography>$71,340.00</Typography>
              <Typography>Revised Total</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>$71,340.00</Typography>
              <Typography>Retention Held</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableBody>
              <RowRespondent />
            </TableBody>
          </Table>
        </TableContainer>
        <Paper>
          <Grid container>
            <Grid item xs={4}>
              <Grid container alignContent="center" justifyContent="center">
                <Grid item xs={6} mt={0.5}>
                  <PieChart bleech={true} />
                </Grid>
                <Grid item xs={6}>
                  <Typography></Typography>
                  <Typography></Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography> </Typography>
              <Typography> </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> </Typography>
              <Typography> </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
