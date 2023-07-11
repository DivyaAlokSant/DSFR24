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
    name: "ಇಲಾಖೆಗಳು",
    selector: "ಇಲಾಖೆಗಳು",
    sortable: true,
    wrap:true,
    width:"150px",
  },
  {
    name: "2017-18",
    selector: "2017-18",
    sortable: true,
    width:"100px",
  },
  {
    name: "2018-19",
    selector: "2018-19",
    sortable: true,
    width:"100px",
  },
  {
    name: "2019-20",
    selector: "2019-20",
    sortable: true,
    width:"100px",
  },
  {
    name: "2020-21",
    selector: "2020-21",
    sortable: true,
    width:"100px",
  },

  {
    name: "2021-22",
    selector: "2021-22",
    sortable: true,
    width:"100px",
  },
  {
    name: "",
    selector: "1",
    sortable: true,
    wrap:true,
    //width:"200px",
  },


];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tableb3k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 2.3
          ಇಲಾಖಾವಾರು ಸಹಾಯಧನಗಳ ಪಾಲು
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 2.5.2.7; ಪುಟ  44)
          "
          
          columns={columns}
          data={ctx.tables1.Tableb3k}
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

export default Tableb3k;
