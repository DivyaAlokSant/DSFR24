import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "ವಿವರಗಳು",
    selector: "ವಿವರಗಳು",
    sortable: true,
    grow: 2,
    wrap: true,
  },
  
  {
    name: "2019-20",
    selector: "2019 20",
    sortable: true,
  },
  {
    name: "2020 21",
    selector: "2020 21",
    sortable: true,
  },
  {
    name: "2021 22",
    selector: "2021 22",
    sortable: true,
  }
];

const customStyles = styles;


const Table1kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.1: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ವಹಿವಾಟು ಹಾಗೂ ಅದಕ್ಕೆ ಪರಸ್ವರ ಅಭಿಮುಖವಾಗಿ 
               ಕರ್ನಾಟಕ ರಾಜ್ಯದ  ಒಟ್ಟು ದೇಶೀಯ ಉತ್ಪಾದನೆಯ ವಿವರಗಳು"
               columns={columns}
               data={ctx.tables5kan.Table1}
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

export default Table1kan;
