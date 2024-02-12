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
    // grow: ,
    wrap: true,
    
  },
  {
    name: "",
    selector: "0",
    // grow:0.05,
    wrap: true,
    width:'200px',
    //format: data => data["0"].toLocaleString('en-IN')
},
  {
    name: "2020-21",
    selector: "2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN')
},
{
  name: "",
  selector: "1",
  wrap: true,
  //format: data => data["1"].toLocaleString('en-IN')
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
  name: "",
  selector: "2",
  wrap: true,
  //format: data => data["2"].toLocaleString('en-IN')
},
{
    name: "2022-23",
    selector: "2022 23",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    //format: data => data["2022 23"].toLocaleString('en-IN')
},
{
  name: "",
  selector: "3",
  wrap: true,
  //format: data => data["3"].toLocaleString('en-IN')
},
{
  name: "Total",
  selector: "TOTAL",
  wrap: true,
  //format: data => data["Total"].toLocaleString('en-IN')
},
{
  name: "",
  selector: "4",
  wrap: true,
  //format: data => data["4"].toLocaleString('en-IN')
}
];


const customStyles = styles;


const Table15 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.16: Recommended and actual release of grants during 2022-23"
          columns={columns}
          data={ctx.tables2.Table15}
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

export default Table15;
