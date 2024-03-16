import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";

const columns = [
  { id: "amount", label: "Amount (₹)", minWidth: 100, align: "left" },
  { id: "time", label: "Time", minWidth: 170, align: "left" },
  { id: "category_name", label: "Category", minWidth: 170 },
  { id: "note", label: "Note", minWidth: 170 },
];

export default function CustomTable({ data }) {
  const [sortedData, setSortedData] = React.useState([]);

  React.useEffect(() => {
    // Sort data by time
    const sorted = data
      .slice()
      .sort((a, b) => new Date(b.time) - new Date(a.time));
    setSortedData(sorted);
  }, [data]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        margin: "auto",
        marginBottom: "50px",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "white",
                    background: "black",
                    fontSize: "2rem",
                    height: "60px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:hover": { background: "#f5f5f5" } }}
                >
                  <TableCell align="left" sx={{ fontSize: "1.2rem" }}>
                    {row.type === "income" ? (
                      <>
                        <ArrowDropUpIcon
                          sx={{
                            color: "green",
                            scale: "1.7",
                            position: "relative",
                            top: "9px",
                            margin: "5px",
                          }}
                        />
                        {/* <span style={{ color: "green" }}>{row.amount}</span> */}
                      </>
                    ) : (
                      <>
                        <ArrowDropDownIcon
                          sx={{
                            color: "red",
                            scale: "1.7",
                            position: "relative",
                            top: "9px",
                            margin: "5px",
                          }}
                        />
                        {/* <span style={{ color: "red" }}>{row.amount}</span> */}
                      </>
                    )}
                    {row.amount}
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "1rem" }}>
                    {row.time}
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "1.2rem" }}>
                    {row.category_name}
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "1.15rem" }}>
                    {row.note}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
