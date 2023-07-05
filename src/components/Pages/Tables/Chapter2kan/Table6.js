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
    name: "ವಿವರಗಳು",
    selector: "ವಿವರಗಳು",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["ವಿವರಗಳು"].toLocaleString('en-IN')
},

{
    name: "ಪರಿಮಾಣ ಮೆಟ್ರಿಕ್‌ ಟನ್ನುಗಳಲ್ಲಿ",
    selector: "ಪರಿಮಾಣ ಮೆಟ್ರಿಕ್‌ ಟನ್ನುಗಳಲ್ಲಿ",
    // grow:0.05,
    sortable:true,
    wrap: true,
    format: data => data["ಪರಿಮಾಣ ಮೆಟ್ರಿಕ್‌ ಟನ್ನುಗಳಲ್ಲಿ"].toLocaleString('en-IN')
}

];

const customStyles = styles;

const Table6kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೨.೭: ಬೇಡಿಕೆ, ವಸೂಲಿ ಮತ್ತು ಬಾಕಿ ರಿಜಿಸ್ಟರ್‌ ಪ್ರಕಾರ ಖನಿಜಗಳ ಗುತ್ತಿಗೆ ಪ್ರದೇಶದ      
                    ಹೊರಗಡೆ ಆಹರಣ ಮತ್ತು ಪರವಾನಗಿ ಇಲ್ಲದೆ ರವಾನೆಯ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table6}
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

export default Table6kan;
