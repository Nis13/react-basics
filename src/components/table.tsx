import React from "react";
import { Column, usePagination, useSortBy, useTable } from "react-table";
import { IGetUserData } from "../interfaces/user.interface";
import { Button, Container, Paper, TableContainer } from "@mui/material";

export interface ITableProps {
  columns: Column<IGetUserData>[];
  data: IGetUserData[];
}

const Table: React.FC<ITableProps> = ({ columns, data }) => {
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  return (
    <TableContainer component={Paper}>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr
              {...hg.getHeaderGroupProps()}
              key={hg.getHeaderGroupProps().key}
            >
              {hg.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.getHeaderProps().key}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " ⬆️ " : " ⬇️ "}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.getRowProps().key}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.getCellProps().key}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Container>
        <Button
          variant="contained"
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          Prev
        </Button>
        <Button variant="contained" disabled={!canNextPage} onClick={nextPage}>
          Next
        </Button>
      </Container>
    </TableContainer>
  );
};

export default Table;
