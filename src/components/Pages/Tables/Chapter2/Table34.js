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
      name: "2018-19",
      selector: "2018 19",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2018 19"].toLocaleString('en-IN')
    },
    {
      name: "2019-20",
      selector: "2019 20",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2019 20"].toLocaleString('en-IN')
    },
    {
      name: "2020-21",
      selector: "2020 21",
      // grow:0.05,
      wrap: true,
      format: data => data["2020 21"].toLocaleString('en-IN')
  },
  {
    name: "2021-22",
    selector: "2021 22",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2021 22"].toLocaleString('en-IN')
  },
  {
    name: "2022-23",
    selector: "2022 23",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2022 23"].toLocaleString('en-IN')
  }
  ];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Year of Maturity"] === 'Total',
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]

const Table34 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.39: Components of fiscal deficit and its financing pattern"
                    columns={columns}
                    data={ctx.tables2.Table34}
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

export default Table34;
