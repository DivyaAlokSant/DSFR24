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
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        width:"100px",
        
    },
      {
        name: "ಕಂಪನಿಯ ಹೆಸರು",
        selector: "ಕಂಪನಿಯ ಹೆಸರು",
        sortable: true,
        wrap:true,
        width:"100px",
        
      },
      {
        name: "ಟಿಪ್ಪಣಿ",
        selector: "ಟಿಪ್ಪಣಿ",
        sortable: true,
        wrap:true,
        //width:"300px",
        
      },
    
    
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablee3k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ ೫.೩ 
          ಸರ್ಕಾರಿ ಕಂಪನಿಗಳ ಹಣಕಾಸು ಸ್ಥಿತಿಯ ಮೇಲೆ ಟಿಪ್ಪಣಿಯ ಪ್ರಭಾವ 
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ ೫.೧೩.೪: ಪುಟ ೧47) 
          "
          
          columns={columns}
          data={ctx.tables1.Tablee3k}
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

export default Tablee3k;
