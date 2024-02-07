import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl.No",
        selector: "Sl No",
        wrap: true,
        grow: 0.1,
    },
    {
        name: "Fiscal Variables",
        selector: "Fiscal Variables",
        wrap: true,
        grow: 2,
        conditionalCellStyles: [
            {
                when: row => row["Fiscal Variables"] === 'Revenue Receipts (1+2+3+4)' 
                || row["Fiscal Variables"] === 'Revenue Deficit (-) / Surplus (+) (5-6)',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    fontWeight: 500,
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    },
    {
        name: "Projection as per MTFP 2021-25",
        selector: "Projection as per MTFP",
        wrap: true
        
    },
    {
        name: "Actuals (2022-23)",
        selector: "Actuals",
        wrap: true
    },  
    {
        name: "Variation (in per cent)",
        selector: "Variation",
        wrap: true
        
    },
];


const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.7: Actuals vis-à-vis projection in MTFP for 2021-22"
                    columns={columns}
                    data={ctx.tables1.Table6}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                // pagination
                />
            </Card>
        </div>
    );
}

export default Table6;
