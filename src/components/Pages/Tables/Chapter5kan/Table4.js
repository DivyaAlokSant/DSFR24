import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "ಚಟುವಟಿಕೆ",
    selector: "ಚಟುವಟಿಕೆ",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಪಿಎಸ್‌ಯುಗಳ ಸಂಖ್ಯೆ",
    selector: "ಪಿಎಸ್‌ಯುಗಳ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_1",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಹೂಡಿಕೆ",
    selector: "ಹೂಡಿಕೆ",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_2",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === 'ಒಟ್ಟು' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table4 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.4: ವಿದ್ಯುತ್‌ ವಲಯಕ್ಕೆ ಸಂಬಂಧಿತ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳಲ್ಲಿ ಕಾರ್ಯಚಟುವಟಿಕೆವಾರು ಹೂಡಿಕೆ"
               columns={columns}
               data={ctx.tables5kan.Table4}
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

export default Table4;
