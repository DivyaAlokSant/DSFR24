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
    name: "ವಿವರಗಳು",
    selector: "ವಿವರಗಳು",
    sortable: true,
    wrap: true,
  },
  {
    name: "2019-20",
    selector: "2019 20",
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
    name: "2020 21",
    selector: "2020 21",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_2",
    sortable: true,
    wrap: true,
  },
  {
    name: "2021 22",
    selector: "2021 22",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_3",
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


const Table3 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title="ಕೋಷ್ಟಕ-5.3: ವಿದ್ಯುತ್‌ ವಲಯಕ್ಕೆ ಸಂಬಂಧಿತ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳಿಗೆ ರಾಜ್ಯ ಸರ್ಕಾರದಿಂದ ಆಯವ್ಯಯ ಬೆಂಬಲಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ವಿವರಗಳು"
               columns={columns}
               data={ctx.tables5kan.Table3}
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

export default Table3;
