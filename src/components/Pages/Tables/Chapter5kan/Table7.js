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
    grow: 0.1,
    wrap: true,
  },
  
  {
    name: "ಬಡ್ಡಿ (₹ ಕೋಟಿಗಳಲ್ಲಿ)",
    selector: "_1",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  {
    name: "ಬಡ್ಡಿ ಮತ್ತು ತೆರಿಗೆಗೆ ಮುಂಚಿನ ಗಳಿಕೆ (₹ ಕೋಟಿಗಳಲ್ಲಿ)",
    selector: "_2",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಸರ್ಕಾರ ಮತ್ತು ಇತರ ಹಣಕಾಸು ಸಂಸ್ಥೆಗಳಿಂದ ಸಾಲದ ಜವಾಬ್ದಾರಿ ಹೊಂದಿರುವ ಎಸ್‌ಪಿಎಸ್‌ಯುಗಳ ಸಂಖ್ಯೆ",
    selector: "_3",
    sortable: true,
    grow: 1,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು ಯಾವುದೇ ಸಾಲದ ಭಾಧೆ ಮತ್ತು ಬಡ್ಡಿಯ ಅನುಪಾತವನ್ನು ಅಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ಬಡ್ಡಿ ಮತ್ತು ತೆರಿಗೆಗೆ ಮುಂಚಿನ ಗಳಿಕೆ ಅಥವಾ ಬಡ್ಡಿಯ ಖರ್ಚು ಶೂನ್ಯ.">
         <span className="diff">೧ಕ್ಕಿಂತ  ಹೆಚ್ಚಿನ ಬಡ್ಡಿ ವ್ಯಾಪ್ತಿ ಅನುಪಾತವನ್ನು ಹೊಂದಿರುವ ಕಂಪನಿಗಳ ಸಂಖ್ಯೆ</span>
       </Tooltip>,
    selector: "_4",
    sortable: true,
    wrap: true,
  },
  {
    name: <Tooltip
         placement="top-end"
         title="	ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು ಯಾವುದೇ ಸಾಲದ ಭಾಧೆ ಮತ್ತು ಬಡ್ಡಿಯ ಅನುಪಾತವನ್ನು ಅಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ಬಡ್ಡಿ ಮತ್ತು ತೆರಿಗೆಗೆ ಮುಂಚಿನ ಗಳಿಕೆ ಅಥವಾ ಬಡ್ಡಿಯ ಖರ್ಚು ಶೂನ್ಯ">
         <span className="diff">೧ಕ್ಕಿಂತ  ಕಡಿಮೆ ಬಡ್ಡಿ ವ್ಯಾಪ್ತಿ ಅನುಪಾತ ಹೊಂದಿರುವ ಕಂಪನಿಗಳ ಸಂಖ್ಯೆ</span>
       </Tooltip>,
    selector: "_5",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Activity"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table7kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.7: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಬಡ್ಡಿ ವ್ಯಾಪ್ತಿ ಅನುಪಾತ"
               columns={columns}
               data={ctx.tables5kan.Table7}
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

export default Table7kan;
