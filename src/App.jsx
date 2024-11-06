import { useMemo, useState } from "react";
import mockData from "./MOCK_DATA.json";

import "./App.css";
import BasicTable from "./components/BasicTable";

function App() {
  const data = useMemo(() => mockData, []);

  /**  @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    // {
    //   header: "First name",
    //   accessorKey: "first_name",
    //   footer: "First name",
    // },
    // {
    //   header: "Last name",
    //   accessorKey: "last_name",
    //   footer: "Last name",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "DOB",
      accessorKey: "dob",
      footer: "DOB",
    },
  ];
  return (
    <>
      <h1 className="text-xl font-bold mb-5">Tanstack Table</h1>
      <BasicTable data={data} columns={columns}/>
    </>
  );
}

export default App;
