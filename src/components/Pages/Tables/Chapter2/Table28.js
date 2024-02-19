import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sector",
        selector: "Sector",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Sub Sector",
        selector: "Sub Sector",
        // grow: ,
        wrap: true,
        // width:'35px',
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
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2020 21"].toLocaleString('en-IN')
    },
    {
        name: "2021-22",
        selector: "2021 22",
        // grow:0.05,
        wrap: true,
        format: data => data["2021 22"].toLocaleString('en-IN')
    },
    {
        name: "2022-23",
        selector: "2022 23",
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

const conditionalRowStyles = [
    {
      when: row => row["Sector"] === 'Total',
      style: {
        backgroundColor:  'rgba(153, 165, 128, 0.9)',
      }
    }
  ]

const customStyles = styles;

const Table28 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.34: Component-wise net balances in Public Account as of 31 March of the year"
                    columns={columns}
                             
                    data={ctx.tables2.Table28.t28}

                    data={ctx.tables2.Table28}

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

export default Table28;
