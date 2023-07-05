import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
// import { Tooltip } from "@material-ui/core";


const columns = [

 
  {
    name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    width:"100px",
    
  },
  {
    name: "ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಲೆಕ್ಕಗಳ ಆಭಿದಾನ",
    selector: "ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಲೆಕ್ಕಗಳ ಆಭಿದಾನ",
    sortable: true,
    wrap:true,
    width:"350px",
  },
  {
    name: "ಮಹಾಲೇಖಾಪಾಲರ ದಾಖಲಾತಿಗಳಲ್ಲಿದ್ದಂತೆ ಶಿಲ್ಕು",
    selector: "ಮಹಾಲೇಖಾಪಾಲರ ದಾಖಲಾತಿಗಳಲ್ಲಿದ್ದಂತೆ ಶಿಲ್ಕು",
    sortable: true,
    
  },
  {
    name: "ಷರಾ",
    selector: "ಷರಾ",
    sortable: true,
    wrap:true,
   
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
  
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tabled2k = () => {

  const ctx = useContext(MyContext)

  

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.೨
          ನಿಷ್ಕ್ರಿಯ ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಲೆಕ್ಕಗಳಲ್ಲಿ ಉಳಿದಿರುವ ಶಿಲ್ಕುಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.4.೨; ಪುಟ: 120)
          "
          
          columns={columns}
          data={ctx.tables1.Tabled2k}
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

export default Tabled2k;
