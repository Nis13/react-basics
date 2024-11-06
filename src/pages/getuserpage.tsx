import { useMemo } from "react";
import { IGetUserData } from "../interfaces/user.interface";
import { Column } from "react-table";
import Table from "../components/table";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { useFetchUserApi } from "../api/fetchuserapi";

const GetUserpage = () => {
  const { isLoading, data, error } = useQuery("user", useFetchUserApi);

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

  if (isLoading) return <Box>Loading...</Box>;

  if (!data) return <Box>Data not found.</Box>;

  if (error) return <Box>Error</Box>;

  return <Table columns={columns} data={memoizedData} />;
};

export default GetUserpage;
