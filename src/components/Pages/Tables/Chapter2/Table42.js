import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "1",
        grow: 1.5,
        wrap: true,
        width:'200px',
    },
    {
        name: "Opening balance as on 1 April 2022",
        selector: "Opening balance as on 1 April 2022",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Opening balance as on 1 April 2022"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance as on 31 March 2023",
        selector: "Closing balance as on 31 March 2023",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Closing balance as on 31 March 2023"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table42 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.47: Cash Balances and their investment"
                    columns={columns}
                    data={ctx.tables2.Table42}
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

export default Table42;
