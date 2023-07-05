import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಯ ಹೆಸರು",
    selector: "ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಯ ಹೆಸರು",
    sortable: true,
    grow: 1,
    wrap: true,
  },
  
  {
    name: "ಗಳಿಸಿದ ನಿವ್ವಳ ಲಾಭ (₹ಕೋಟಿಗಳಲ್ಲಿ)",
    selector: "ಗಳಿಸಿದ ನಿವ್ವಳ ಲಾಭ (₹ಕೋಟಿಗಳಲ್ಲಿ)",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಒಟ್ಟು ಲಾಭಕ್ಕೆ ಈ ಲಾಭದ ಶೇಕಡ",
    selector: "ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಒಟ್ಟು ಲಾಭಕ್ಕೆ ಈ ಲಾಭದ ಶೇಕಡ",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಯ ಹೆಸರು"] === 'ಒಟ್ಟು' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table5kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.5: ಗರಿಷ್ಠ ಲಾಭ ಗಳಿಸಿದ ಮೂರು ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು"
               columns={columns}
               data={ctx.tables5kan.Table5}
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

export default Table5kan;
