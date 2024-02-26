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
        name: "No.of grants covered",
        selector: "def",
        // grow:0.05,
        wrap: true,
        //format: data => data["def"].toLocaleString('en-IN')
    },

    {
        name: "No.of cases",
        selector: "mno",
        // grow:0.05,
        wrap: true,
        //format: data => data["mno"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "ghi",
        // grow:0.05,
        wrap: true,
        //format: data => data["ghi"].toLocaleString('en-IN')
    },
    
    

       
];

const customStyles = styles;

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.7 – Addtional amounts released through executive orders during 2019-20 to 2022-23"
                    columns={columns}
                    data={ctx.tables3.Table7}
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

export default Table7;