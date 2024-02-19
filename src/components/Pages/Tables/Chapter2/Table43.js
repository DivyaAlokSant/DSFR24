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
        //grow: 1.5,
        wrap: true,
        //width:'200px',
    },
    {
        name: "Opening balance",
        selector: "Opening Balance",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Opening Balance"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance ",
        selector: "Closing Balance ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Closing Balance"].toLocaleString('en-IN')
    },
    {
        name: "Increase (+)/ Decrease (-)",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Interest earned",
        selector: "Interest earned",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Interest earned"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table43 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.48: Cash Balance Investment Account (Major Head-8673)"
                    columns={columns}
                    data={ctx.tables2.Table43}
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

export default Table43;
