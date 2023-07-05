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
    wrap:true,
    width:"250px",
    
  },
  {
    name: "< 5 ವರ್ಷಗಳು",
    selector: "< 5 ವರ್ಷಗಳು",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "",
    selector: "1",
    sortable: true,
    
    
  },
  {
    name: "<15 ವರ್ಷಗಳು",
    selector: "<15 ವರ್ಷಗಳು",
    sortable: true,
    wrap:true,
    width:"250px",
   

  },
  {
    name: "",
    selector: "2",
    sortable: true,
    
    
  },
  {
    name: "<20  ವರ್ಷಗಳು",
    selector: "<20  ವರ್ಷಗಳು",
    sortable: true,
    
    
  },
  {
    name: "",
    selector: "3",
    sortable: true,
    
    
  },
  {
    name: "<25 ವರ್ಷಗಳು",
    selector: "<25 ವರ್ಷಗಳು",
    sortable: true,
    
    
  },
  {
    name: "",
    selector: "4",
    sortable: true,
    
    
  },
  {
    name: ">25 ವರ್ಷಗಳು",
    selector: ">25 ವರ್ಷಗಳು",
    sortable: true,
    
    
  },
  {
    name: "",
    selector: "5",
    sortable: true,
    
    
  },
  {
    name: "ಒಟ್ಟು",
    selector: "ಒಟ್ಟು",
    sortable: true,
    
    
  },
  {
    name: "",
    selector: "6",
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

const Tabled6k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.೬
          ಹಣ ದುರುಪಯೋಗ ದುರ್ಬಳಕೆ ಇತ್ಯಾದಿ ಪ್ರಕರಣಗಳ ಇಲಾಖಾವಾರು/ಅವಧಿವಾರು ವಿವರಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.೧೩; ಪುಟ: 128)
          "
          
          columns={columns}
          data={ctx.tables1.Tabled6k}
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

export default Tabled6k;
