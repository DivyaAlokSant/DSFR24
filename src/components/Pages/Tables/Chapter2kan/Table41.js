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
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        selector: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    },
    {
        name: "ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಅಂತಿಮ ಶಿಲ್ಕು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        name: "ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ(-)",
        selector: "ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ(-)",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        name: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
        selector: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
        // grow:0.05,
        wrap: true,
       
    }
];

const customStyles = styles;

const Table41kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.೪೧ : ನಗದು ಶಿಲ್ಕಿನ ಹೂಡಿಕೆ ಲೆಕ್ಕ (ಪ್ರಧಾನ ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ-8673)"
                    columns={columns}
                    data={ctx.tables2kan.Table41}
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

export default Table41kan;