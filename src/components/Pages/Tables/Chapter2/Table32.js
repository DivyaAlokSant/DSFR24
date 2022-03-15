import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
  {
    name: "Sl No",
    selector: "Sl No",
    grow: 0.1,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Particulars",
    selector: "Particulars",
    grow: 2,
    wrap: true,
    // width:'35px',
  },
  {
    name: "2016 17",
    selector: "2016 17",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2016 17"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
    name: "2017 18",
    selector: "2017 18",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2017 18"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
    name: "2018 19",
    selector: "2018 19",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2018 19"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
    name: "2019 20",
    selector: "2019 20",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2019 20"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
    name: "2020 21",
    selector: "2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  }
];

const conditionalRowStyles = [
  {
    when: row => row["Sl No"] === 'Composition of Fiscal Deficit' ||
    row["Sl No"] === 'Financing pattern of Fiscal Deficit*',
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
          title="Table 2.32: Components of fiscal deficit and its financing pattern"
          columns={columns}
          data={ctx.tables2.Table33 ? ctx.tables2.Table33.t33 : ""}
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
