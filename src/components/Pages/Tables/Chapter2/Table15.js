import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Major Heads of Account",
    selector: "Major Heads of Account",
    // grow: ,
    wrap: true,
    
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
    //format: data => data["2022 23"].toLocaleString('en-IN')
},
{
  name: "Increase (+)/ Decrease (-)",
  selector: "3",
  wrap: true,
  //format: data => data["3"].toLocaleString('en-IN')
},
{
  name: "per cent",
  selector: "per cent",
  wrap: true,
  //format: data => data["Total"].toLocaleString('en-IN')
}
];


const customStyles = styles;


const Table15 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.21: Variation in Revenue expenditure during 2022-23 compared to 2021-22"
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
