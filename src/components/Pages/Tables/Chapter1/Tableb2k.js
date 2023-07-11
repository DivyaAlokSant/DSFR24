import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
// import { Tooltip } from "@material-ui/core";


const columns = [

 
    // conditionalCellStyles: [
    //   {
    //     when: row => (row["2016-17"] === 15.54),
    //     style: {
    //       backgroundColor: '#FFF89A',
    //       color: 'black',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    // ]
  
  {
    name: "",
    selector: "2",
    sortable: true,
    wrap:true,
    width:"200px",
  },
  {
    name: "2017-18",
    selector: "2017 18",
    sortable: true,
    
  },
  {
    name: "2018-19",
    selector: "2018 19",
    sortable: true,
    
  },
  {
    name: "2019-20",
    selector: "2019 20",
    sortable: true,
   
    // conditionalCellStyles: [
    //   {
    //     when: row => (row["2020-21"] === "-4.27"),
    //     style: {
    //       backgroundColor: '#FFF89A',
    //       color: 'black',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    // ]
  },
  {
    name: "2020-21",
    selector: "2020 21",
    sortable: true,
    
  },

  {
    name: "2021-22",
    selector: "2021 22",
    sortable: true,
    
  },



];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tableb2k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Appendix 2.2
          Time series data on the State Government Finances
          (Reference: Paragraph 2.2, 2.4.3, 2.7.1;)
          "
          
          columns={columns}
          data={ctx.tables1.Tableb2k}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Tableb2k;
