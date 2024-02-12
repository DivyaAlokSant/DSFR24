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
        // grow: ,
        wrap: true,
        width:'50px',
    },
    {
        name: "Year",
        selector: "Year",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Year"].toLocaleString('en-IN')
    },
    {
        name: "Tuition Fee",
        selector: "Tuition Fee",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Tuition Fee"].toLocaleString('en-IN')
    },
    {
        name: "Tuition Fee",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
  {
      when: row => row["Head"] === 'Total',
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]

const customStyles = styles;

const Table9 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.9:- Details of tuition fee remitted and short remittance by the colleges"
                    columns={columns}
                    data={ctx.tables2.Table9}
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

export default Table9;
