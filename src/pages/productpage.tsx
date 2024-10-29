import { Box, Button, Container, Paper, TableContainer } from "@mui/material";
import { useMemo } from "react";
import { Column, usePagination, useSortBy, useTable } from "react-table";
import { useProductApi } from "../hooks/productapi";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
}

const Productpage: React.FC = () => {
  const { isLoading, data, error } = useProductApi();
  const memoizedData = useMemo(() => data, [data]);
  const columns: Column<Product>[] = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Title", accessor: "title" },
      { Header: "Category", accessor: "category" },
      { Header: "Price", accessor: "price" },
      { Header: "Rating", accessor: "rating" },
    ],
    []
  );

  const tableInstance = useTable<Product>(
    {
      columns,
      data: memoizedData,
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
  if (isLoading) return <Box>Loading...</Box>;

  if (!data) return <Box>Data not found.</Box>;

  if (error) return <Box>Error</Box>;
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

export default Productpage;
