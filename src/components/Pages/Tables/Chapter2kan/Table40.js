import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "1",
        grow: 1,
        wrap: true,
        // width:'35px',
    },
    {
        name: "1 ಏಪ್ರಿಲ್‌ 202೧ರಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "1 ಏಪ್ರಿಲ್‌ 202೧ರಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        // grow:0.05,
        wrap: true,
        format: data => data["1 ಏಪ್ರಿಲ್‌ 202೧ರಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    },
    {
        name: "೩೧ ಮಾರ್ಚ್‌ 202೨ರಲ್ಲಿ ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "೩೧ ಮಾರ್ಚ್‌ 202೨ರಲ್ಲಿ ಅಂತಿಮ ಶಿಲ್ಕು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["೩೧ ಮಾರ್ಚ್‌ 202೨ರಲ್ಲಿ ಅಂತಿಮ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    }
];


const customStyles = {
    header: {
      style: {
        fontSize: '22px',
        color: '#fff',
        backgroundColor: '#ff6359',
        minHeight: '56px',
        textAlign: "center",
      },
    },
    rows: {
      style: {
        minHeight: '50px', // override the row height
      }
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: "black",
        },
        fontSize: '12px',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '10px'
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: '#aaa',
        },
        fontSize: '14px',
        paddingLeft: '8px',
        // backgroundColor: 'rgba(255,255,255,0)',
      },
    },
  };



const Table40kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.೪೦: ನಗದು ಶಿಲ್ಕುಗಳು ಮತ್ತು ಅವುಗಳ ಹೂಡಿಕೆ"
                    columns={columns}
                    data={ctx.tables2kan.Table40}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table40kan;
