import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

// This is 3.10 Chart in the Chapter 3 of SFR report


const columns = [
    {
        name: "Major Head/Description",
        selector: "Major HeadDescription",
        grow:2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "1st Qtr",
        selector: "1st Qtr",
        wrap: true,
        format: data => data["1st Qtr"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "2nd Qtr",
        selector: "2nd Qtr",
        // grow:0.2 ,
        wrap: true,
        format: data => data["2nd Qtr"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "3rd Qtr",
        selector: "3rd Qtr",
        // grow:0.5 ,
        wrap: true,
        format: data => data["3rd Qtr"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "4th Qtr",
        selector: "4th Qtr",
        // grow:0.2 ,
        wrap: true,
        format: data => data["4th Qtr"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Total Expenditure",
        selector: "Total Expenditure",
        // grow:0.5 ,
        wrap: true,
        format: data => data["Total Expenditure"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Expenditure in March",
        selector: "Expenditure in March",
        // grow:0.2 ,
        wrap: true,
        format: data => data["Expenditure in March"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Expenditure in March as a percentage of TE",
        selector: "Expenditure in March as a percentage of TE",
        // grow:0.5 ,
        wrap: true,
        format: data => data["Expenditure in March as a percentage of TE"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table13 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.10: Quantum of Expenditure in March"
                    columns={columns}
                    data={ctx.tables3.Table10}
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

export default Table13;