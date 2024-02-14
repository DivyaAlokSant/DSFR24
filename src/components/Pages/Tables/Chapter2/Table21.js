import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
      name: "",
      selector: "abc",
      grow:3,
      wrap: true,
  },
  {
      name: "2018-19",
      selector: "2018 19",
      wrap: true,
      format: data => data["2018 19"].toLocaleString('en-IN')
  },
  {
    name: "2019-20",
    selector: "2019 20",
    wrap: true,
    format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
      name: "2020-21",
      selector: "2020 21",
      wrap: true,
      format: data => data["2020 21"].toLocaleString('en-IN')
  },
  {
      name: "2021-22",
      selector: "2021 22",
      wrap: true,
      format: data => data["2021 22"].toLocaleString('en-IN')
  },
  {
    name: "2022-23",
    selector: "2022 23",
    wrap: true,
    format: data => data["2022 23"].toLocaleString('en-IN')
}
];

const customStyles = styles;

const Table21 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.27:Return on Investment"
                    columns={columns}
                    data={ctx.tables2.Table21}
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

export default Table21;