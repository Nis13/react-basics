import { useMemo } from "react";
import GetUserApi from "../hooks/getuserapi";
import { IGetUserData } from "../interfaces/user.interface";
import { Box, Button, Container, Paper, TableContainer } from "@mui/material";
import { Column, usePagination, useSortBy, useTable } from "react-table";

const GetUserpage = () => {
  const { isLoading, data, error } = GetUserApi();
  const memoizedData = useMemo(() => data, [data]);
  const columns: Column<IGetUserData>[] = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Address", accessor: "address" },
      { Header: "Email", accessor: "email" },
      { Header: "Contact", accessor: "contact" },
      { Header: "Gender", accessor: "gender" },
    ],
    []
  );

  const tableInstance = useTable<IGetUserData>(
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
    <>
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
          <Button
            variant="contained"
            disabled={!canNextPage}
            onClick={nextPage}
          >
            Next
          </Button>
        </Container>
      </TableContainer>
    </>
  );
};

export default GetUserpage;
