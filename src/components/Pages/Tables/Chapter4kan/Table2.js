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
        wrap: true,
    },
    {
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        wrap: true,
       
    },
    {
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "1",
        wrap: true,

    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "ಸೇರ್ಪಡೆ",
        wrap: true,
       
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "__1",
        wrap: true,
        
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "ತೀರುವಳಿ",
        wrap: true,
        
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "__2",
        wrap: true,
        
    },
  
    {
        name: "ಸಲ್ಲಿಕೆಗೆ ಬಾಕಿ",
        selector: "__3",
        wrap: true,
       
    },
    {
        name: "ಸಲ್ಲಿಕೆಗೆ ಬಾಕಿ",
        selector: "__4",
        wrap: true,
       
    }
];

const customStyles = styles;

const Table2kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-4.2: 2020-21ಕ್ಕೆ ಬಾಕಿ ಇರುವ ಬಳಕೆ ಪ್ರಮಾಣಪತ್ರಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table2}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table2kan;