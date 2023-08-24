import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        wrap: true,
        grow:0.05
    },
    {
        name: "HoA and Nomenclature",
        selector: "HoA and Nomenclature",
        wrap: true,
        grow:2
    },
    {
        name: "Total Expenditure",
        selector: "Total Expenditure",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Expenditure during last quarter",
        selector: "Expenditure during last quarter",
        wrap: true,
        sortable:true,
       
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        sortable:true,
       
    },
    {
        name: "Expenditure during March",
        selector: "Expenditure during March",
        wrap: true,
        sortable:true,
        
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        sortable:true,
        
    }
];


const customStyles = styles;

const Table14 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.14: Rush of Expenditure"
                    columns={columns}
                    data={ctx.tables3.Table14}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table14;