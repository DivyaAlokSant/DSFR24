import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "ಲಾಭಾಂಶ ಘೋಷಿಸಿದ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಸಂಖ್ಯೆ",
    selector: "_1",
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: "ಪಾವತಿಸಲ್ಪಟ್ಟಿರುವ ಬಂಡವಾಳ",
    selector: "ಪಾವತಿಸಲ್ಪಟ್ಟಿರುವ ಬಂಡವಾಳ",
    sortable: true,
    wrap: true,
  },
  {
    name: "ನಿವ್ವಳ ಲಾಭ",
    selector: "ನಿವ್ವಳ ಲಾಭ",
    sortable: true,
    grow: 0.9,
    wrap: true,
  },
  {
    name: "ಘೋಷಿಸಿದ ಲಾಭಾಂಶ",
    selector: "ಘೋಷಿಸಿದ ಲಾಭಾಂಶ",
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


const Table6kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.6: ರಾಜ್ಯದ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳಿಂದ ಲಾಭಾಂಶ ಪಾವತಿ"
               columns={columns}
               data={ctx.tables5kan.Table6}
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

export default Table6kan;
