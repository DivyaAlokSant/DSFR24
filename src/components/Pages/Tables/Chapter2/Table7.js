import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sr No",
        selector: "Sr No",
        // grow: ,
        wrap: true
    },
    {
        name: "Head of Revenue",
        selector: "Head of Revenue",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2017 18"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "Cases pending at the beginning of 2022-23",
        selector: "Cases pending at the beginning of 2022-23",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2018 19"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "New cases due for assessment during 2022-23",
        selector: "New cases due for assessment during 2022-23",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2019 20"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "Total cases due for assessment",
        selector: "Total cases due for assessment",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2020 21"].toLocaleString('en-IN')
    },
    {
        name: "Cases disposed of during 2022-23",
        selector: "Cases disposed of during 2022-23",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2021 22"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "Balance at the end of the year",
        selector: "Balance at the end of the year",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2021 22"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "Percentage of disposal",
        selector: "Percentage of disposal",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        //format: data => data["2021 22"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    }
];

const conditionalRowStyles = [
  {
      when: row => row["Sr No"] === '',
      style: {
          backgroundColor: 'rgba(255, 127, 80, 1 )',
      },
  }
]

const customStyles = styles;

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.7 Arrears of assessment                      "
                    columns={columns}
                    data={ctx.tables2.Table7}
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

export default Table7;
