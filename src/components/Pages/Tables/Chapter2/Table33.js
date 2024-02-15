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
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "GSDP",
        selector: "GSDP",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Off Budget Borrowing",
        selector: "Off Budget Borrowing",
        // grow:0.05,
        wrap: true,
        format: data => data["Off Budget Borrowing"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit",
        selector: "Fiscal Deficit",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["Fiscal Deficit"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit + Off Budget Borrowing",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit/GSDP",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "(Fiscal Deficit + Off Budget Borrowing)/GSDP",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Outsanding debt/GSDP",
        selector: "4",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table33 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.38: Impact of Off Budget Borrowing on Fiscal Indicators"
                    columns={columns}
                    data={ctx.tables2.Table33}
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

export default Table33;
