import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "./helpers";

const customStyles = styles;

const CustomTable = ({ title, columns, data }) => {
  // Construct columns dynamically based on the keys of the first data object
  const tableColumns = Object.keys(data[0]).map((key, index) => ({
    name: key,
    selector: key,
    wrap: true,
    //width: index === 0 ? '250px' : 'auto', 
    //grow: index === 0 ? 0.5 : 'auto', // Set width for the first column to 150px, rest are auto
    format: data => data[key].toLocaleString('en-IN')
  }));

  // Conditional row styles function
  const conditionalRowStyles = [
    {
      when: row => row[tableColumns[0].selector] === 'Total',
      style: {
        backgroundColor: 'rgba(153, 165, 128, 0.9)',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        }
      },
    },
  ];

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
          conditionalRowStyles={conditionalRowStyles}
        />
      </Card>
    </div>
  );
};

export default CustomTable;
