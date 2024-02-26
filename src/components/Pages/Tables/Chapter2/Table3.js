import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const customStyles = styles;

const Table3 = () => {
  const ctx = useContext(MyContext);

  // Dynamically construct columns based on data keys
  const columns = Object.keys(ctx.tables2.Table3[0]).map(key => ({
    name: key,
    selector: key,
    wrap: true,
    format: data => data[key].toLocaleString('en-IN')
  }));

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }}>
      <Card>
        <DataTable
          title="Table 2.3: Trends and growth in Revenue Receipts"
          columns={columns}
          data={ctx.tables2.Table3}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
};

export default Table3;
