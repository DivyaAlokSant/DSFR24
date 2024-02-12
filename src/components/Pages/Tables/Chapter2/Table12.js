import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Year",
        selector: "0",
        // grow: ,
        wrap: true,
        width:'90px',
    },
    {
        name: "Finance Commission projections",
        selector: "Finance Commission projections",
        // grow:0.05,
        wrap: true,
        width:'250px',
        format: data => data["Finance Commission projections"].toLocaleString('en-IN')
    },
    {
        name: "Projections in FCR",
        selector: "Projections in FCR",
        // grow:0.05,
        wrap: true,
        format: data => data["Projections in FCR"].toLocaleString('en-IN')
    },
    {
        name: "Actual tax devolution",
        selector: "Actual tax devolution",
        wrap: true,
        format: data => data["Actual tax devolution"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        wrap: true,
        format: data => data["Difference"].toLocaleString('en-IN')
    }
];


const customStyles = styles;



const Table12  = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.13: State’s share in union taxes and duties: Actual devolution vis-à-vis Finance Commission Projections"
                    columns={columns}
                    data={ctx.tables2.Table12  }
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

export default Table12;
