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
      name: "ಆರ್ಥಿಕ",
      selector: "ಆರ್ಥಿಕ",
      wrap:true,
      //width:"400px",

    } ]
    
   
  
 
 

const customStyles = styles

const Tablee1k = () => {

  const ctx = useContext(MyContext)

  
  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ-೫.೧
          ಕರ್ನಾಟಕದಲ್ಲಿ ಲೆಕ್ಕಪರಿಶೋಧನೆಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿರುವ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಪಟ್ಟಿ 
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ ೫.೩, ಪುಟ 134)
          "
          
          columns={columns}
          data={ctx.tables1.Tablee1k}
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

export default Tablee1k;
