import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "",
    selector: "0",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "XV FC assessment",
    selector: "XV FC assessment",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["XV FC assessment"].toLocaleString('en-IN')
  },
  {
    name: "Budget Estimates",
    selector: "Budget Estimates",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Budget Estimates"].toLocaleString('en-IN')
  },
  {
    name: "Actual",
    selector: "Actual",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Actual"].toLocaleString('en-IN')
  },
  {
    name: "Percentage variation of actual over",
    selector: "Percentage variation of actual over",
    // grow:0.05,
    wrap: true,
    format: data => data["Percentage variation of actual over"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "1",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["1"].toLocaleString('en-IN')
  }
];

// const conditionalRowStyles = [
//   {
//     when: row => row["Components"] === 'As percentage of Revenue Expenditure (RE)'
//       || row["Components"] === "As percentage of Revenue Receipts (RR)",
//     style: {
//       backgroundColor: 'rgba(153, 165, 128, 0.9)',
//     }
//   },
//   {
//     when: row => row["Components"] === 'Total',
//     style: {
//       backgroundColor: 'rgba(53, 65, 128, 0.9)',
//     }
//   }
// ]

const customStyles = styles;

const Table17 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.18: Tax and non-Tax receipts vis-à-vis projections during 2022-23"
          columns={columns}
          data={ctx.tables2.Table17}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
         // conditionalRowStyles={conditionalRowStyles}
          //pagination
        />
      </Card>
    </div>
  );
}

export default Table17;
