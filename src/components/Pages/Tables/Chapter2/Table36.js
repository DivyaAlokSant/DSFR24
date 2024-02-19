import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "../helpers";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year of Maturity",
        selector: "Year of Maturity",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Public Debt",
        selector: "Public Debt",
        // grow:0.05,
        wrap: true,
        format: data => data["Public Debt"].toLocaleString('en-IN')
    },
    {
        name: "Interest",
        selector: "Interest",
        // grow:0.05,
        wrap: true,
        format: data => data["Interest"].toLocaleString('en-IN')
    },
    {
        name: "Total",
        selector: "Total",
        // Totalow:0.05,
        wrap: true,
        format: data => data["Total"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
  {
    when: row => row["Year of Maturity"] === 'Total',
    style: {
      backgroundColor: 'rgba(15, 38, 112, 0.4)',
    }
  }
]


const customStyles = styles;
const Table36 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.41: Maturity profile of Public Debt"
                    columns={columns}
                    data={ctx.tables2.Table36}
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

export default Table36;
