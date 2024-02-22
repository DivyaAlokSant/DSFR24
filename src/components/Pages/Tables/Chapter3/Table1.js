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
        name: "Budget provision(original)",
        selector: "xyz",
        // grow:0.05,
        wrap: true,
        //format: data => data["xyz"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'A' allocation",
        selector: "abc",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["abc"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'A' allocation",
        selector: "abc1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["abc1"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'B' allocation",
        selector: "def",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["def"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'B' allocation",
        selector: "def1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["def1"].toLocaleString('en-IN')
    },
    
    
    
    {
        name: "30% of Category 'B' allocation",
        selector: "123",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["123"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category 'A' to total allocation",
        selector: "456",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["456"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category 'B' (30%) to total allocation",
        selector: "789",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["789"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table1 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.1 – Category-wise allocation during 2018-19 to 2022-23"
                    columns={columns}
                    data={ctx.tables3.Table1}
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

export default Table1;