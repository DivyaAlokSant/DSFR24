import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

// This is Table 11 in Chapter 3 of SFR


const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: "Section",
        selector: "Section",
        wrap: true,
    },
    {
        name: "Budget Provision",
        selector: "Budget Provision",
        wrap: true,
        format: data => data["Budget Provision"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Total",
        selector: "Total",
        wrap: true,
        format: data => data["Total"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Unutilized provision and its percentage",
        selector: "Unutilized provision and its percentage",
        wrap: true,
        format: data => data["Unutilized provision and its percentage"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    }
];


const customStyles = styles;

const Table14 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.14: Budget and expenditure "
                    columns={columns}
                    data={ctx.tables3.Table11}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // noTableHead
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table14;