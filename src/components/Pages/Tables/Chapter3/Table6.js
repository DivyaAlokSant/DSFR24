import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Description",
        selector: "abc",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Original Approved Budget(BE)",
        selector: "def",
        // grow:0.05,
        wrap: true,
        //format: data => data["def"].toLocaleString('en-IN')
    },

    {
        name: "Revised(RE)",
        selector: "mno",
        // grow:0.05,
        wrap: true,
        //format: data => data["mno"].toLocaleString('en-IN')
    },
    {
        name: "Actual Outturn",
        selector: "ghi",
        // grow:0.05,
        wrap: true,
        //format: data => data["ghi"].toLocaleString('en-IN')
    },
    {
        name: "Difference between BE and RE",
        selector: "xyz",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["xyz"].toLocaleString('en-IN')
    },
    {
        name: "Difference between Actual and RE*",
        selector: "jkl",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["jkl"].toLocaleString('en-IN')
    },
    



       
];

const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.6 – Deviation of outturn in compared with RE"
                    columns={columns}
                    data={ctx.tables3.Table6}
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

export default Table6;