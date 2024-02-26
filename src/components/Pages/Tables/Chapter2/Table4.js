import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const customStyles = styles;

const Table4 = () => {

    const ctx = useContext(MyContext)

      // Dynamically construct columns based on data keys
  const columns = Object.keys(ctx.tables2.Table4[0]).map(key => ({
    name: key,
    selector: key,
    wrap: true,
    format: data => data[key].toLocaleString('en-IN')
  }));

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.5: SGST receipts of Government of Karnataka"
                    columns={columns}
                    data={ctx.tables2.Table4}
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

export default Table4;
