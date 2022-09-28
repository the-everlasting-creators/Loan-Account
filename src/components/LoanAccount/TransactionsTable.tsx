import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Transaction } from "./types";

interface Column {
  id: "date" | "channel" | "status" | "description" | "amount";
  label: string;
  minWidth?: number;
  align?: "right";
  sanitise?: (value: string) => string;
}

interface Data {
  date: string;
  channel: string;
  status: string;
  description: string;
  amount: number;
}

const TransactionTable = (props: { transactions: Transaction[] }) => {
  const { transactions } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows: Data[] = transactions;

  const columns: readonly Column[] = [
    {
      id: "date",
      label: "Date",
      sanitise: (value: string) => value.replace(/T.*/g, ""),
    },
    { id: "channel", label: "Channel" },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "description",
      label: "Description",
    },
    {
      id: "amount",
      label: "Amount",
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className="TransactionsTable"
      sx={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`transaction-${i}`}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.sanitise && typeof value === "string"
                            ? column.sanitise(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TransactionTable;
