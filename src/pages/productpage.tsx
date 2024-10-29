import { Button, Container, Paper, TableContainer } from "@mui/material";
import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { useProductApi } from "../hooks/productapi";

const Productpage = () => {
  const { isLoading, data, error } = useProductApi();
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Title", accessor: "title" },
      { Header: "Category", accessor: "category" },
      { Header: "Price", accessor: "price" },
      { Header: "Rating", accessor: "rating" },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Data not found.</div>;

  if (error) return <div>Error</div>;
  return (
    <TableContainer component={Paper}>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th
                  className="table-header"
                  {...column.getHeaderProps(column.getSortByToggleProps)}
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Container>
        <Button
          disabled={!canPreviousPage}
          onClick={previousPage}
          sx={{ color: "black" }}
        >
          Prev
        </Button>
        <Button
          disabled={!canNextPage}
          onClick={nextPage}
          sx={{ color: "black" }}
        >
          Next
        </Button>
      </Container>
    </TableContainer>
  );
};

export default Productpage;
