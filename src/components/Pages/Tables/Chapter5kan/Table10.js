import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    sortable: true,
    grow: 2,
    wrap: true,
  },
  
  {
    name: "ನಷ್ಟ ಅನುಭವಿಸುತ್ತಿರುವ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು",
    selector: "ನಷ್ಟ ಅನುಭವಿಸುತ್ತಿರುವ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು",
    sortable: true,
    grow: 2,
    wrap: true,
  },
  {
    name: "ವರ್ಷದ ನಿವ್ವಳ ನಷ್ಟ",
    selector: "ವರ್ಷದ ನಿವ್ವಳ ನಷ್ಟ",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಸಂಚಿತ ನಷ್ಟ",
    selector: "ಸಂಚಿತ ನಷ್ಟ",
    sortable: true,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="	ನಿವ್ವಳ ಮೌಲ್ಯ ಎಂದರೆ ಪಾವತಿಸಿದ ಷೇರು ಬಂಡವಾಳ ಮತ್ತು ಉಚಿತ ಮೀಸಲು ಮತ್ತು ಹೆಚ್ಚುವರಿ  ಇವುಗಳಿಂದ 
         ಸಂಗ್ರಹವಾದ ನಷ್ಟ ಮತ್ತು ಮುಂದೂಡಲ್ಪಟ್ಟ ಆದಾಯ ವೆಚ್ಚಗಳ ಒಟ್ಟು ಮೊತ್ತದ ಕಳೆಯುವಿಕೆ. ಉಚಿತ ಮೀಸಲು ಎಂದರೆ ಲಾಭ 
         ಮತ್ತು ಷೇರು ಪ್ರೀಮಿಯಂ ಖಾತೆಯಿಂದ ರಚಿಸಲಾದ ಎಲ್ಲಾ ಮೀಸಲುಗಳು ಆದರೆ ಸ್ವತ್ತುಗಳ ಮರುಮೌಲ್ಯಮಾಪನದಿಂದ ರಚಿಸಲಾದ 
         ಮೀಸಲುಗಳನ್ನು ಒಳಗೊಂಡಿಲ್ಲ ಮತ್ತು ಸವಕಳಿ ನಿಬಂಧನೆಯನ್ನು ಹಿಂಬರೆಯಲಾಗಿತ್ತು.">
         <span className="diff">ನಿವ್ವಳ ಆಸ್ತಿಯ ಮೌಲ್ಯ </span>
       </Tooltip>,
    selector: "ನಿವ್ವಳ ಆಸ್ತಿಯ ಮೌಲ್ಯ",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["ವರ್ಷ"] === 'ಶಾಸನಬದ್ಧ ನಿಗಮಗಳು' ||  row["ವರ್ಷ"] === 'ರಾಜ್ಯ ಸರ್ಕಾರದ ಕಂಪನಿಗಳು' 
             || row["ವರ್ಷ"] === 'ಒಟ್ಟು',
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table10kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.10: ೨೦೧೯-೨೦ರಿಂದ ೨೦೨೧-೨೨ರವರೆಗೆ ನಷ್ಟ ಅನುಭವಿಸಿದ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಸಂಖ್ಯೆ"
               columns={columns}
               data={ctx.tables5kan.Table10}
                customStyles={customStyles}
                striped
                conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
                // pagination
            />
        </Card>
    </div>
);
}

export default Table10kan;
