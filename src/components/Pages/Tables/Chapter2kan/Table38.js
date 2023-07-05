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
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ವರ್ಷ/ವಿವರ",
        selector: "ವರ್ಷ/ವಿವರ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        selector: "2017 18",
        name: "2017 18",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    },
    {
        name: "2018 19",
        selector: "2018 19",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        name: "2019 20",
        selector: "2019 20",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        name: "2020 21",
        selector: "2020 21",
        // grow:0.05,
        wrap: true,
       
    },
    {
        name: "2021 22",
        selector: "2021 22",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    }
];

const customStyles = styles;

const Table38kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.38: ಸಾಲ ಪಡೆದ ನಿಧಿಯ ಬಳಕೆ"
                    columns={columns}
                    data={ctx.tables2kan.Table38}
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

export default Table38kan;
