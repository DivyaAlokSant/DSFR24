import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "To the end of the Year",
        selector: "1",
        // grow: ,
        wrap: true,
        //format: data => data["1"].toLocaleString('en-IN')
        // width:'35px',
    },
    {
        name: "No.of incomplete projects",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "Estimated cost",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "4",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["4"].toLocaleString('en-IN')
    },
    
];


const customStyles = styles;

const Table24 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.30: Age profile of incomplete projects which are more than one crore as on 31 March 2023"
                    columns={columns}
                    data={ctx.tables2.Table24}
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

export default Table24;
