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
    sortable: true,
    
  },
  {
    name: "ಅನುದಾನ",
    selector: "ಅನುದಾನ",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮಗಳು/ಯೋಜನೆಗಳು",
    selector: "ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮಗಳು/ಯೋಜನೆಗಳು",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "",
    selector: "6",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "__1",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "__2",
    sortable: true,
    wrap:true,
  },

  {
    name: "ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮೇತರ/ಯೋಜನೆಗಳು",
    selector: "ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮೇತರ/ಯೋಜನೆಗಳು",
    sortable: true,
    wrap:true,
    
    
  },
  {
    name: "",
    selector: "__3",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "__4",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "__5",
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

const Tablec1k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.1
          ಮಕ್ಕಳ ಆಯವ್ಯಯ ವಿವರಣಾ ಪಟ್ಟಿಯಲ್ಲಿ ವರ್ಗಾವಾರು/ಇಲಾಖಾವಾರು ಆಯವ್ಯಯ ಹಂಚಿಕೆ
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.4; ಪುಟ: 88)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec1k}
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

export default Tablec1k;
