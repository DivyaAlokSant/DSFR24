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
    name: "ಉದ್ದಿಮೆಗಳು",
    selector: "ಉದ್ದಿಮೆಗಳು",
    sortable: true,
    wrap:true,
    width:"200px",
  },
  {
    name: "ಲೆಕ್ಕಗಳು ಪೂರ್ಣಗೊಂಡಿರುವ ವರ್ಷ",
    selector: "ಲೆಕ್ಕಗಳು ಪೂರ್ಣಗೊಂಡಿರುವ ವರ್ಷ",
    sortable: true,
    width:"150px",
    
  },
  {
    name: "ಪೂರ್ಣಗೊಳಿಸಿದ ಕೊನೆಯ ಲೆಕ್ಕಗಳ ಪ್ರಕಾರ ಹೂಡಿಕೆ",
    selector: "ಪೂರ್ಣಗೊಳಿಸಿದ ಕೊನೆಯ ಲೆಕ್ಕಗಳ ಪ್ರಕಾರ ಹೂಡಿಕೆ",
    sortable: true,
    wrap:true,
    width:"150px",
   

  },
  {
    name: "ಷರಾ",
    selector: "ಷರಾ",
    sortable: true,
    wrap:true,
    width:"350px",
  },
 


 

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tabled4k = () => {

  const ctx = useContext(MyContext)



  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.4
          ಬಾಕಿ ಇರುವ ಇಲಾಖಾ ನಿರ್ವಹಣೆಯ ವಾಣಿಜ್ಯ ಮತ್ತು ಅರೆವಾಣಿಜ್ಯ ಉದ್ದಿಮೆಗಳ ಪ್ರಪತ್ರಲೆಕ್ಕಗಳ ವಿವರಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.1೦; ಪುಟ: 127)
          "
          
          columns={columns}
          data={ctx.tables1.Tabled4k}
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

export default Tabled4k;
