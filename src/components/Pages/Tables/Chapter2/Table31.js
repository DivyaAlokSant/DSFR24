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
    format: data => data["Year"].toLocaleString('en-IN')
  },
  {
    name: "2018-19",
    selector: "2018 19",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2018 19"].toLocaleString('en-IN')
  },
  {
    name: "2019-20",
    selector: "2019 20",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
    name: "2020-21",
    selector: "2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN')
},
{
  name: "2021-22",
  selector: "2021 22",
  // grow: 0.05,
  // width:'110px',
  wrap: true,
  format: data => data["2021 22"].toLocaleString('en-IN')
},
{
  name: "2022-23",
  selector: "2022 23",
  // grow: 0.05,
  // width:'110px',
  wrap: true,
  format: data => data["2022 23"].toLocaleString('en-IN')
}
];

const customStyles = styles;

const conditionalRowStyles = [
  {
    when: row => row["CompanyCorporationBoard"] === 'Total',
    style: {
      backgroundColor: 'rgba(15, 38, 112, 0.4)',
    }
  }
]

const Table31 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.37: Trend in off-budget borrowings (OBB)"
          columns={columns}
          data={ctx.tables2.Table31}
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

export default Table31;
