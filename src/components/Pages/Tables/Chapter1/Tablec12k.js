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
    width:"90px",  
    
  },
  {
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ/ಇಲಾಖೆ ",
    selector: "1",
    sortable: true,
    wrap:true,
    width:"150px",
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    sortable: true,
    width:"200px",
    wrap:true,
  },
  {
    name: "ಅವಕಾಶ",
    selector: "ಅವಕಾಶ",
    sortable: true,
    width:"100px",
  },
  {
    name: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
    selector: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
    sortable: true,
    width:"100px",
  },
  {
    name: "ಶೇಕಡಾವಾರು ಅಧ್ಯರ್ಪಣೆ",
    selector: "ಶೇಕಡಾವಾರು ಅಧ್ಯರ್ಪಣೆ",
    sortable: true,
    wrap:true,
    width:"100px",
  },
   {
    name: "ಷರಾ",
    selector: "ಷರಾ",
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

const Tablec12k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ ೩.೧೨
          ಪ್ರಸಕ್ತ ವರ್ಷದಲ್ಲಿ ಗಣನೀಯ ಅಧ್ಯರ್ಪಣೆಗಳ ಸಮೀಕ್ಷೆಯ ಫಲಿತಾಂಶಗಳು 
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.6.2.5(ಬಿ); ಪುಟ: 96)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec12k}
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

export default Tablec12k;
