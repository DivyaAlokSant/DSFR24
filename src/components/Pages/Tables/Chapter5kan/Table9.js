import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
//import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "ನಿವ್ವಳ ಆದಾಯ (₹ ಕೋಟಿಗಳಲ್ಲಿ)",
    selector: "1",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಷೇರುದಾರರ ನಿಧಿ (₹ ಕೋಟಿಗಳಲ್ಲಿ)",
    selector: "2",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಈಕ್ವಿಟಿ ಮೇಲಿನ ಪ್ರತಿಫಲ (ಶೇಕಡಾವಾರು)",
    selector: "3",
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


const Table9kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.9: ರಾಜ್ಯ ಸರ್ಕಾರ ನಿಧಿಗಳನ್ನು ಹೂಡಿಕೆ ಮಾಡಿರುವ ರಾಜ್ಯ ಸಾವರ್ಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಈಕ್ವಿಟಿ ಮೇಲಿನ ಪ್ರತಿಫಲ"
               columns={columns}
               data={ctx.tables5kan.Table9}
                customStyles={customStyles}
                striped
                //conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
                // pagination
            />
        </Card>
    </div>
);
}

export default Table9kan;
