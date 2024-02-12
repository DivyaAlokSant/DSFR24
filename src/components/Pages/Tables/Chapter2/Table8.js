import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sr No",
        selector: "Sr No",
        wrap: true,
    },
    
    {
        name: "Head of Revenue",
        selector: "Head of Revenue",
        wrap: true,
        format: data => data["Head of Revenue"].toLocaleString('en-IN')
    },
    {
        name: "Cases pending as on 31 March 2022",
        selector: "Cases pending as on 31 March 2022",
        wrap: true,
        format: data => data["Cases pending as on 31 March 2022"].toLocaleString('en-IN')
    },
    {
        name: "Cases detected during 2022-23",
        selector: "Cases detected during 2022-23",
        wrap: true,
        format: data => data["Cases detected during 2022-23"].toLocaleString('en-IN')
    },
    {
        name: "Total",
        selector: "Total",
        wrap: true,
        format: data => data["Total"].toLocaleString('en-IN')
    },
    {
        name: "No. of cases in which assessment / investigation completed with penalty, etc., raised ",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Amount of demand (₹ in crore)",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "No. of cases pending for finalisation as on 31 March 2023",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    }
    
];


const customStyles = styles;

const conditionalRowStyles = [
    {
        when: row => row["Sr No"] === 'Total',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
  ]



const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.8 Evasion of tax detected"
                    columns={columns}
                    data={ctx.tables2.Table8}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table8;
