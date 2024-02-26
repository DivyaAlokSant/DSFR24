import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "SI No.",
        selector: "12",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Description",
        selector: "Description",
        // grow:0.05,
        wrap: true,
        //format: data => data["Description"].toLocaleString('en-IN')
    },
    {
        name: "Total No.of Grants/Appropriations",
        selector: "xyz",
        // grow:0.05,
        wrap: true,
        //format: data => data["xyz"].toLocaleString('en-IN')
    },
    {
        name: "Items of Expenditure Voted/Charged",
        selector: "abc",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["abc"].toLocaleString('en-IN')
    },
    {
        name: "Revenue",
        selector: "abc1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["abc1"].toLocaleString('en-IN')
    },
    
    {
        name: "Capital",
                selector: "def1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["def1"].toLocaleString('en-IN')
    },



    {
        name: "Budget Provision",
        selector: "123",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["123"].toLocaleString('en-IN')
    },
    {
        name: "Disbursments",
        selector: "456",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["456"].toLocaleString('en-IN')
    },
    
];

const customStyles = styles;

const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.3 – Number of Grants Appropriation operated by the State in 2022-23"
                    columns={columns}
                    data={ctx.tables3.Table3}
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

export default Table3;