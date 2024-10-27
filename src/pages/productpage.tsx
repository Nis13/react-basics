import { Box } from "@mui/material";
import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { useProductApi } from "../hooks/productapi";

const Productpage = () => {
  const { isLoading, data, error, pageno } = useProductApi(0);
  console.log(isLoading, data, error, pageno);
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
    <div className="main-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                  {column.render("Header")}
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
      <Box mt={2}>
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </Box>
    </div>
  );
};

export default Productpage;
