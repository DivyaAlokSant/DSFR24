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
    name: "1",
    selector: "1",
    sortable: true,
    
  },
  {
    name: "ಸ್ವೀಕೃತಿಗಳು",
    selector: "ಸ್ವೀಕೃತಿಗಳು",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "2",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "3",
    sortable: true,
    wrap:true,

  },
  {
    name: "ಬಟವಾಡೆಗಳು",
    selector: "ಬಟವಾಡೆಗಳು",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "4",
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

const Tableb1k = () => {

  const ctx = useContext(MyContext)

  
  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 2.1
          ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ಬಟವಾಡೆಗಳ ಸಾರಾಂಶ
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 2.2; ಪುಟ: 19)
          "
          
          columns={columns}
          data={ctx.tables1.Tableb1k}
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

export default Tableb1k;
