import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl.No.",
        selector: "xyz",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Department",
        selector: "Department",
        // grow:0.05,
        wrap: true,
        format: data => data["Department"].toLocaleString('en-IN')
    },
    {
        name: "Total projects",
        selector: "abc",
        wrap: true,
        format: data => data["abc"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "123",
        wrap: true,
        format: data => data["123"].toLocaleString('en-IN')
    },
    {
        name: "Dropped projects",
        selector: "def",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["def"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "456",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["456"].toLocaleString('en-IN')
    },
    {
        name: "In Pipeline",
        selector: "In Pipeline",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["In Pipeline"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "789",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["789"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
  {
    when: row => row["Works under"] === 'Total',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]


const customStyles = styles;

const Table26    = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.32:Liabilities in Public Private Partnership as on 31st March 2023"
                    
                    columns={columns}
                    data={ctx.tables2.Table26}
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

export default Table26;