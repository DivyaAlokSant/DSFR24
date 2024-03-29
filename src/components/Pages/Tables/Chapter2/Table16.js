import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Head",
        selector: "Head",
        grow: 1.5,
        wrap: true,
        //width:'200px',
    },
    {
        name: "Budget 2022-23",
        selector: "Budget 2022 23",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Budget 2022 23"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Utilisation percentage",
        selector: "Utilisation percentage",
        // grow:0.05,
        wrap: true,
        format: data => data["Utilisation percentage"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table16 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.22: Object Head-wise expenditure vis-à-vis budget authorization"
                    columns={columns}
                    data={ctx.tables2.Table16}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table16;
