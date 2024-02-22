import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "SI No.",
        selector: "SI No.",
        wrap: true,
    },
    {
        name: "Category",
        selector: "Category",
        wrap: true
    },

    {
        name: "allocation",
        selector: "allocation",
        wrap: true
    },
    {
        name: "allocation",
        selector: "abc",
        wrap: true
    },
    {
        name: "allocation",
        selector: "def",
        wrap: true
    },
    {
      name: "Expenditure",
      selector: "Expenditure",
      wrap: true,
  },
  {
    name: "Expenditure",
    selector: "ghi",
    wrap: true,
},
{
    name: "Expenditure",
    selector: "jkl",
    wrap: true,
},
{
    name: "Percentage of Allocation to total Budget Allocation",
    selector: "123",
    wrap: true,
},
{
    name: "Percentage of Allocation to total Budget Allocation",
    selector: "456",
    wrap: true,
},
{
    name: "Percentage of Allocation to total Budget Allocation",
    selector: "789",
    wrap: true,
},
];

const customStyles = styles;

const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.2: Details of allocation under Child Centric Programme/Schemes"
                    columns={columns}
                    data={ctx.tables3.Table2}
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

export default Table2;