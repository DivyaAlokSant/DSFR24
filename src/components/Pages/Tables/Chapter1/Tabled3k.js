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
    name: "ಸಂಸ್ಥೆ",
    selector: "ಸಂಸ್ಥೆ",
    sortable: true,
    wrap:true,
    width:"350px",
  },
  {
    name: "ಯಾವ ವರ್ಗದ ಕೆಳಗೆ ಆಗಿದೆ",
    selector: "ಯಾವ ವರ್ಗದ ಕೆಳಗೆ ಆಗಿದೆ",
    sortable: true,
    
  },
  {
    name: "ವಹಿಸಿದ ಅವಧಿ",
    selector: "ವಹಿಸಿದ ಅವಧಿ",
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
  {
    name: "ಲೆಕ್ಕ ಪತ್ರಗಳನ್ನು ಯಾವ ವರ್ಷದವರೆಗೆ ಒದಗಿಸಿದೆ",
    selector: "ಲೆಕ್ಕ ಪತ್ರಗಳನ್ನು ಯಾವ ವರ್ಷದವರೆಗೆ ಒದಗಿಸಿದೆ",
    sortable: true,
    
  },
  {
    name: "ಯಾವ ವರ್ಷದವರೆಗೆ ಪ್ರತ್ಯೇಕ ಪರಿಶೋಧನಾ ವರದಿಯನ್ನು ನೀಡಲಾಗಿದೆ",
    selector: "ಯಾವ ವರ್ಷದವರೆಗೆ ಪ್ರತ್ಯೇಕ ಪರಿಶೋಧನಾ ವರದಿಯನ್ನು ನೀಡಲಾಗಿದೆ",
    sortable: true,
    
  },
  {
    name: "ವಿಧಾನ ಮಂಡಲದಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಪರಿಶೋಧನಾ ವರದಿಯ ಮಂಡನೆ",
    selector: "ವಿಧಾನ ಮಂಡಲದಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಪರಿಶೋಧನಾ ವರದಿಯ ಮಂಡನೆ",
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

const Tabled3k = () => {

  const ctx = useContext(MyContext)

  
  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.3
          ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳ ಲೆಕ್ಕಪತ್ರಗಳ ಸಲ್ಲಿಕೆ ಮತ್ತು ರಾಜ್ಯ ವಿಧಾನಮಂಡಲದಲ್ಲಿ ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳ ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿಗಳ ಮಂಡನೆಯ ಸ್ಥಿತಿ
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.9; ಪುಟ: 126)
          "
          
          columns={columns}
          data={ctx.tables1.Tabled3k}
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

export default Tabled3k;
