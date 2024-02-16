import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "g-r (g: real economic growth rate; r: real interest rate), called Domar gap",
        selector: "1",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "s<0 (primary deficit)",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "s>0(primary surplus)",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table38 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.43: The dynamics of public debt depending on the interest rate, the growth rate of GDP and the primary budget balance"
                    columns={columns}
                    data={ctx.tables2.Table38 }
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

export default Table38;