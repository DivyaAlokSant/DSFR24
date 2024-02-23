import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Works under",
        selector: "1",
        // grow: ,
        wrap: true,
        //format: data => data["1"].toLocaleString('en-IN')
        // width:'35px',
    },
    {
        name: "No of incomplete projects",
        selector: "2",
        // grow:0.05,
        wrap: true,
        //format: data => data["No of incomplete projects"].toLocaleString('en-IN')
    },
    {
        name: "Estimated cost",
        selector: "Estimated cost",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["Estimated cost"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["Expenditure"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
  {
    when: row => row["To the end of the Year"] === 'Total',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table25    = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.31 Department wise profile of incomplete projects which are more than one crore as on 31 March 2023"
                 
                    columns={columns}
                    data={ctx.tables2.Table25.t25}
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

export default Table25  ;
