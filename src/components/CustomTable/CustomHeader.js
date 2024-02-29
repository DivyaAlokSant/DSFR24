import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "./helpers";

const customStyles = styles;

const CustomHeadTable = ({ title, columns, data, mergedColumns }) => {
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

  // Custom Header
  const CustomHeader = ({ column }) => {
    const mergedColumn = mergedColumns.find(col => col.name === column.selector);
    if (mergedColumn) {
      return (
        <th colSpan={mergedColumn.span}>
          {column.name}
        </th>
      );
    }
    return <th>{column.name}</th>;
  };

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
          customHeader={<CustomHeader />}
        />
      </Card>
    </div>
  );
};

export default CustomHeadTable;



{/* <CustomTable 
    title="My Table" 
    columns={columns} 
    data={data} 
    mergedColumns={[{ name: "columnName1", span: 2 }, { name: "columnName2", span: 3 }]} /> */}

