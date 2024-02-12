import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "S No",
        selector: "S No",
        grow: 0.05 ,
        wrap: true,
        //width:'35px',
    },
    
    {
        name: "Head of revenue",
        selector: "Head of revenue",
        // grow:0.05,
        width:'150px',
        wrap: true,
        format: data => data["Head of revenue"].toLocaleString('en-IN')
    },
    {
        name: "Amount outstanding as on 31 March 2023",
        selector: "1",
        //grow: 0.05,
        //width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Amount outstanding for more than five years as on 31 March 2023",
        selector: "2",
        //grow: 0.1,
        width:'200px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    }
];


const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.6 Arrears of revenue"
                    columns={columns}
                    data={ctx.tables2.Table6}
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
