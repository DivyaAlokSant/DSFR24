import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Year",
    selector: "Year",
    wrap: true,
    width:"80px"
  },
  {
    name: "Details",
    selector: "Details",
    wrap: true,
    //format: data => data["Details"].toLocaleString('en-IN')
  },
  {
    name: "Amount of under statement",
    selector: "1",
    wrap: true,
    width:"120px",
    format: data => data["1"].toLocaleString('en-IN')
  }
];

// const conditionalRowStyles = [
//   {
//       when: row => row["Year"] === 'Total',
//       style: {
//           backgroundColor: 'rgba(153, 165, 128, 0.9)',
//       },
//   }
// ]

const customStyles = styles;



const Table10 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.11: Loss of Revenue on account of under assessment"
          columns={columns}
          data={ctx.tables2.Table10}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table10;
