import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
  {
    name: "Company/ Corporation/ Board",
    selector: "Company/ Corporation/ Board",
    grow: 1.5,
    wrap: true,
    width:'200px',
  },
  {
    name: "Outstanding off budget borrowing",
    selector: "Outstanding off budget borrowing",
    //grow: 2,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Borrowings during 2022-23",
    selector: "Borrowings during 2022 23",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Borrowings during 2022 23"].toLocaleString('en-IN')
  },
  {
    name: "Principal Repayment during 2022 23",
    selector: "Principal Repayment during 2022 23",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Principal Repayment during 2022 23"].toLocaleString('en-IN')
  },
  {
    name: "Intrest Repayment during 2022 23",
    selector: "Intrest Repayment during 2022 23",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Intrest Repayment during 2022 23"].toLocaleString('en-IN')
  },
  {
    name: "Closing Balance",
    selector: "Closing Balance",
    // grow:0.05,
    wrap: true,
    format: data => data["Closing Balance"].toLocaleString('en-IN')
  }
];

const conditionalRowStyles = [
  {
    when: row => row["Sl"] === 'Financing pattern of Fiscal Deficit*',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table32 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.37 (a): Entity-wise position of off-budget borrowings"
          columns={columns}
          data={ctx.tables2.Table32}
          customStyles={customStyles}
          striped
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table32;
