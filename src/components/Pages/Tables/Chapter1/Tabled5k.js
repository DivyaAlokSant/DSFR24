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
    name: "ಇಲಾಖೆ",
    selector: "ಇಲಾಖೆ",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "ಸಂಸ್ಥೆಗಳ ಸಂಖ್ಯೆ",
    selector: "ಸಂಸ್ಥೆಗಳ ಸಂಖ್ಯೆ",
    sortable: true,
    
    
  },
  {
    name: "ಮಾಹಿತಿ ಬಾರದ ವರ್ಷಗಳು",
    selector: "ಮಾಹಿತಿ ಬಾರದ ವರ್ಷಗಳು",
    sortable: true,
    wrap:true,
    width:"250px",
   
    
  },

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tabled5k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.5
          ಸರ್ಕಾರದಿಂದ ಗಣನೀಯವಾಗಿ ಹಣ ಸಹಾಯ ಪಡೆದ ಸಂಸ್ಥೆಗಳಿಂದ ಮಾಹಿತಿ ಬಾರದಿರುವುದು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.11; ಪುಟ: 127)     
          "
          
          columns={columns}
          data={ctx.tables1.Tabled5k}
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

export default Tabled5k;
