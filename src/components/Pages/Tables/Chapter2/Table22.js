import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Stautory Company/Corporation ",
        selector: "abc",
        // grow: ,
        wrap: true,
       format: data => data["abc"].toLocaleString('en-IN')
        // width:'35px',
    },
    {
        name: "Cummulative loss at the end of 2018-19",
        selector: "123",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["123"].toLocaleString('en-IN')
    },
    {
        name: "Cummulative loss at the end of 2019-20",
        selector: "456",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["456"].toLocaleString('en-IN')
    },
    {
        name: "Cummulative loss at the end of 2020-21",
        selector: "789",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["789"].toLocaleString('en-IN')
    },
    {
        name: "Cummulative loss at the end of 2021-22",
        selector: "101112",
        // grow:0.05,
        wrap: true,
        format: data => data["101112"].toLocaleString('en-IN')
    },
    {
        name: "Cummulative loss at the end of 2022-23",
        selector: "131415", 
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["131415"].toLocaleString('en-IN')
    }
];


const customStyles = styles;



const Table22 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.28: Investments made in loss making Compaines"
                    columns={columns}
                    data={ctx.tables2.Table22}
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

export default Table22;
