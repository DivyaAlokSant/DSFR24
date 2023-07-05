import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "ವಿವರಗಳು",
    selector: "ವಿವರಗಳು",
    sortable: true,
    grow: 2.5,
    wrap: true,
  },
  {
    name: "ಸರ್ಕಾರಿ ಕಂಪನಿಗಳ ಸಂಖ್ಯೆ",
    selector: "ಸರ್ಕಾರಿ ಕಂಪನಿಗಳ ಸಂಖ್ಯೆ",
    sortable: true,
    grow: 0.5,
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


const Table11kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.11: ಸರ್ಕಾರಿ ಕಂಪನಿಗಳ ಲೆಕ್ಕಪತ್ರಗಳ ಸಲ್ಲಿಕೆಯಲ್ಲಿನ ಬಾಕಿಯ ವಿವರಗಳು"
               columns={columns}
               data={ctx.tables5kan.Table11}
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

export default Table11kan;
