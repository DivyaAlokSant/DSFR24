import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "ವಲಯದ ಹೆಸರು",
    selector: "ವಲಯದ ಹೆಸರು",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "ಒಟ್ಟು ಈಕ್ವಿಟಿ",
    selector: "ಒಟ್ಟು ಈಕ್ವಿಟಿ",
    sortable: true,
  },
  {
    name: "ರಾಜ್ಯ ಸರ್ಕಾರದ ಈಕ್ವಿಟಿ",
    selector: "ರಾಜ್ಯ ಸರ್ಕಾರದ ಈಕ್ವಿಟಿ",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಒಟ್ಟು ದೀರ್ಘಾವಧಿ ಸಾಲಗಳು",
    selector: "ಒಟ್ಟು ದೀರ್ಘಾವಧಿ ಸಾಲಗಳು",
    sortable: true,
    wrap: true,
  },
  {
    name: "ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಾಲಗಳು",
    selector: "ರಾಜ್ಯ ಸರ್ಕಾರದ ಸಾಲಗಳು",
    sortable: true,
    wrap: true,
  },
  {
    name: "ಒಟ್ಟು ಈಕ್ವಿಟಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ಸಾಲಗಳು",
    selector: "ಒಟ್ಟು ಈಕ್ವಿಟಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ಸಾಲಗಳು",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Name of Sector"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table2kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.2: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳಲ್ಲಿ ವಲಯವಾರು ಹೂಡಿಕೆ"
               columns={columns}
               data={ctx.tables5kan.Table2}
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

export default Table2kan;
