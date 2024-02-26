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
        // width:'35px',
    },
    {
        name: "Provisions",
        selector: "Provisions",
        // grow:0.05,
        wrap: true,
        //format: data => data["Provisions"].toLocaleString('en-IN')
    },
    {
        name: "Provisions",
        selector: "abc",
        // grow:0.05,
        wrap: true,
        //format: data => data["abc"].toLocaleString('en-IN')
    },
    {
        name: "Disbursments",
        selector: "def",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["def"].toLocaleString('en-IN')
    },
    {
        name: "Disbursments",
        selector: "ghi",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ghi"].toLocaleString('en-IN')
    },
    
    {
        name: "Savings(percentage of savings)",
        selector: "jkl",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["jkl"].toLocaleString('en-IN')
    },



    {
        name: "Savings(percentage of savings)",
        selector: "mno",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["mno"].toLocaleString('en-IN')
    },
    
    
];

const customStyles = styles;

const Table4 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.4 – Voted and Charged disbursment for the period from 2018-19 to 2022-23"
                    columns={columns}
                    data={ctx.tables3.Table4}
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

export default Table4;