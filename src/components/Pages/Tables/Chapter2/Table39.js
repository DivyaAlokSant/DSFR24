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
        grow: 2.5,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Real economic growth (g)",
        selector: "Real economic growth (g)",
        // grow:0.05,
        wrap: true,
        format: data => data["Real economic growth (g)"].toLocaleString('en-IN')
    },
    {
        name: "Real Interest rate (r)",
        selector: "Real Interest rate (r)",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Real Interest rate (r)"].toLocaleString('en-IN')
    },
    {
        name: "Domar gap (g-r)",
        selector: "Domar gap (g-r)",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Domar gap (g-r)"].toLocaleString('en-IN')
    },
    {
        name: "Primary deficit (-)/ Surplus (+)",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    }
];

// const conditionalRowStyles = [
//     {
//       when: row => row["Accounts"] === 'A. General Cash Balance' ||
//       row["Accounts"] === 'B. Other Cash Balances and Investments',
//       style: {
//         backgroundColor:  'rgba(153, 165, 128, 0.9)',
//       }
//     }
//   ]
const customStyles = styles;

const Table39 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.44: Public Debt Sustainability-real growth and real interest"
                    columns={columns}
                    data={ctx.tables2.Table39}
                    customStyles={customStyles}
                    striped
                    //conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table39;
