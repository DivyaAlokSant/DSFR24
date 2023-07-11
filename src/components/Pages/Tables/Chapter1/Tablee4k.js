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
        name: "ರಾಸಾವಉಯ ಹೆಸರು",
        selector: "ರಾಸಾವಉಯ ಹೆಸರು",
        sortable: true,
        wrap:true,
        
      },
      {
        name: "ಇತ್ತೀಚಿಗೆ ಮುಕ್ತಾಯಗೊಳಿಸಿದ  ಲೆಕ್ಕಪತ್ರಗಳ ವರ್ಷ",
        selector: "ಇತ್ತೀಚಿಗೆ ಮುಕ್ತಾಯಗೊಳಿಸಿದ  ಲೆಕ್ಕಪತ್ರಗಳ ವರ್ಷ",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "ಒಟ್ಟಾರೆ ಪಾವತಿಸಲ್ಪಟ್ಟಿರುವ ಬಂಡವಾಳ",
        selector: "ಒಟ್ಟಾರೆ ಪಾವತಿಸಲ್ಪಟ್ಟಿರುವ ಬಂಡವಾಳ",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "ಬಡ್ಡಿ, ತೆರಿಗೆ ಮತ್ತು ಷೇರು ಲಾಭಾಂಶದ ನಂತರದ ನಿವ್ವಳ ಲಾಭ(+)/ನಷ್ಟ (-)",
        selector: "ಬಡ್ಡಿ, ತೆರಿಗೆ ಮತ್ತು ಷೇರು ಲಾಭಾಂಶದ ನಂತರದ ನಿವ್ವಳ ಲಾಭ(+)/ನಷ್ಟ (-)",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "ಸಂಚಿತ ನಷ್ಟಗಳು",
        selector: "ಸಂಚಿತ ನಷ್ಟಗಳು",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "ನಿವ್ವಳ ಆಸ್ತಿ ಮೌಲ್ಯ",
        selector: "ನಿವ್ವಳ ಆಸ್ತಿ ಮೌಲ್ಯ",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "೩೧ ಮಾರ್ಚ್‌ ೨೦೨೨ರಲ್ಲಿದ್ದಂತೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಈಕ್ವಿಟಿ",
        selector: "೩೧ ಮಾರ್ಚ್‌ ೨೦೨೨ರಲ್ಲಿದ್ದಂತೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಈಕ್ವಿಟಿ",
        sortable: true,
        wrap:true,
        
      },
    
      {
        name: "೩೧ಮಾರ್ಚ್‌ ೨೦೨೨ರಲ್ಲಿದ್ಧಂತೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಾಲಗಳು",
        selector: "೩೧ಮಾರ್ಚ್‌ ೨೦೨೨ರಲ್ಲಿದ್ಧಂತೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಾಲಗಳು",
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

const Tablee4k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ ೫.೪
          ತಮ್ಮ ಇತ್ತೀಚಿಗೆ ಮುಕ್ತಾಯಗೊಂಡ ಲೆಕ್ಕಪತ್ರಗಳ ಪ್ರಕಾರ ನಿವ್ವಳ ಆಸ್ತಿ ಮೌಲ್ಯ (ನೆಟ್‌ವರ್ಥ) ಅಳಿಸಿಹೋಗಿರುವ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ವಿವರಗಳು 
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ-೫.೮.೨; ಪುಟ ೧42)
          "
          
          columns={columns}
          data={ctx.tables1.Tablee4k}
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

export default Tablee4k;
