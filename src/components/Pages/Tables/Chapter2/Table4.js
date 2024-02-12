import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "State Goods and Service Tax",
        selector: "State Goods and Service Tax",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    
    {
        name: "2021 22",
        selector: "2021 22",
        // grow:0.05,
        wrap: true,
        format: data => data["2021 22"].toLocaleString('en-IN')
    },
    {
        name: "2022 23",
        selector: "2022 23",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2022 23"].toLocaleString('en-IN')
    },
    {
        name: "Increase/ Decrease",
        selector: "Increase/ Decrease",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Increase/ Decrease"].toLocaleString('en-IN')
    },
    
];

const customStyles = styles;

const Table4 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.5: SGST receipts of Government of Karnataka"
                    columns={columns}
                    data={ctx.tables2.Table4}
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
