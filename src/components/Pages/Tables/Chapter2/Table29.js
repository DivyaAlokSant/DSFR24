import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "abc",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Minor Head of Account",
        selector: "Minor Head of Account",
        // grow:0.05,
        wrap: true,
        format: data => data["Minor Head of Account"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure during 2022 23",
        selector: "Expenditure during 2022 23",
        // grow:0.05,
        wrap: true,

        //format: data => data["Expenditure during 2022 23"].toLocaleString('en-IN')

        format: data => data["Expenditure during 2022 23"].toLocaleString('en-IN')

    }
];

const customStyles = styles;

const Table29 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.35: Details of expenditure/receipts under SDRF/SDMF"
                    columns={columns}
                    data={ctx.tables2.Table29}
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

export default Table29;
