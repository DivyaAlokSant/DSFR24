import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  
    {
        name: "Sl.No.",
        selector: "Sl No",
        wrap: true,
        width:'50px',
        format: data => data["Sl No"].toLocaleString('en-IN')
    },
    {
      name: "Particulars",
      selector: "Particulars",
      wrap: true,
      grow: 1.5,
      width:'200px',
      format: data => data["Particulars"].toLocaleString('en-IN')
    },
    {
      name: "Receipts",
      selector: "Receipt",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["Receipt"].toLocaleString('en-IN')
    },
    {
      name: "Disbursement",
      selector: "Disbursement",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["Disbursement"].toLocaleString('en-IN')
    },
    {
      name: "Net",
      selector: "Net",
      // grow:0.05,
      wrap: true,
      format: data => data["Net"].toLocaleString('en-IN')
  }
  ];

const customStyles = styles;

const Table35 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.40: Receipts and Disbursements under components financing the fiscal deficit during 2022-23"
                    columns={columns}
                    data={ctx.tables2.Table35}
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

export default Table35;
