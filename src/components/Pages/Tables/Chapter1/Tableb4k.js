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
    name: "ಕ್ರ.ಸಂ.",
    selector: "1",
    sortable: true,
    
  },
  {
    name: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    sortable: true,
    
  },
  {
    name: "ಯೋಜನೆ ವಿವರ",
    selector: "ಯೋಜನೆ ವಿವರ",
    sortable: true,
    wrap:true,
    
    
  },
  {
    name: "2017-18",
    selector: "2017-18",
    sortable: true,
   
  },
  {
    name: "2018-19",
    selector: "2018-19",
    sortable: true,
    
  },

  {
    name: "2019-20",
    selector: "2019-20",
    sortable: true,
    
  },
  {
    name: "2020-21",
    selector: "2020-21",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "2021-22",
    selector: "2021-22",
    sortable: true,
    wrap:true,
    
  },

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tableb4k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 2.4
          ಪರೋಕ್ಷ ಸಹಾಯಧನಗಳು
              (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ   2.5.2.7; ಪುಟ  45)"
          
          columns={columns}
          data={ctx.tables1.Tableb4k}
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

export default Tableb4k;
