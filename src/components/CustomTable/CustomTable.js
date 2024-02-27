import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "./helpers";

const customStyles = styles;

const CustomTable = ({ title, columns, data }) => {
  // Construct columns dynamically based on the keys of the first data object
  const tableColumns = Object.keys(data[0]).map(key => ({
    name: key,
    selector: key,
    wrap: true,
    format: data => data[key].toLocaleString('en-IN')
  }));

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }}>
      <Card>
        <DataTable
          title={title}
          columns={tableColumns}
          data={data}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
};

export default CustomTable;



