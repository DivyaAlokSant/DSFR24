import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
// import { Tooltip } from "@material-ui/core";


const columns = [

 
    // conditionalCellStyles: [
    //   {
    //     when: row => (row["2016-17"] === 15.54),
    //     style: {
    //       backgroundColor: '#FFF89A',
    //       color: 'black',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    // ]
  
  {
    name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    width:"100px",
    
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "ಇಲಾಖೆ",
    selector: "ಇಲಾಖೆ",
    sortable: true,
    
  },
  {
    name: "ಅನುದಾನ ವಿತರಿಸಿದ ವರ್ಷ",
    selector: "ಅನುದಾನ ವಿತರಿಸಿದ ವರ್ಷ",
    sortable: true,
    wrap:true,
   
    // conditionalCellStyles: [
    //   {
    //     when: row => (row["2020-21"] === "-4.27"),
    //     style: {
    //       backgroundColor: '#FFF89A',
    //       color: 'black',
    //       '&:hover': {
    //         cursor: 'pointer',
    //       },
    //     },
    //   },
    // ]
  },
  {
    name: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
    selector: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap:true,
   
  },
  {
    name: "ಮೊತ್ತ",
    selector: "ಮೊತ್ತ",
    sortable: true,
    wrap:true,
   
  },

 
 


  // {
  //   name: <Tooltip
  //     placement="top-end"
  //     title="Source: All India GDP figures from Economic Survey 2019-20, Government of Karnataka.">
  //     <span className="diff">India's GDP in crore*</span>
  //   </Tooltip>,
  //   selector: "India's GDP* in crore",
  //   sortable: true,
  //   right: true,
  //   format: data => data["India's GDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
  // },
  // {
  //   name: "Growth rate in per cent",
  //   selector: "Growth rate in per cent",
  //   sortable: true,
  //   right: true,
  //   format: data => data["Growth rate in per cent"].toLocaleString('en-IN'),
  //   conditionalCellStyles: [
  //     {
  //       when: row => row["Growth rate in per cent"] <= 11 && row["Growth rate in per cent"] > 10.5,
  //       style: {
  //         backgroundColor: 'rgba(153, 165, 128, 0.9)',
  //         color: 'white',
  //         '&:hover': {
  //           cursor: 'pointer',
  //         },
  //       },
  //     },
  //   ]
  // },
  // {
  //   name: <Tooltip
  //     placement="top-end"
  //     title="Source: GSDP figures are as available on 31.07.2020 in the website of Ministry of Statistics and Programme Implementation">
  //     <span className="diff">State's GSDP in crore*</span>
  //   </Tooltip>,
  //   selector: "State's GSDP* in crore",
  //   sortable: true,
  //   right: true,
  //   format: data => data["State's GSDP* in crore"].toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
  // },
  // {
  //   name: "Growth rate in per cent",
  //   selector: "Growth rate in per cent__1",
  //   sortable: true,
  //   right: true,
  //   format: data => data["Growth rate in per cent__1"].toLocaleString('en-IN')
  // },
];

const conditionalRowStyles = [
   {
    when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === "ಒಟ್ಟು",
    style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    
}
];

const customStyles = styles

const Tabled1k = () => {

  const ctx = useContext(MyContext)

  console.log(ctx.tables1)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 4.1
          ಪ್ರಧಾನ ಶೀರ್ಷಿಕಾವಾರು ಇಲಾಖಾವಾರು ಮತ್ತು ವರ್ಷಾವಾರು ಬಾಕಿ ಇರುವ ಬಳಕೆ ಪ್ರಮಾಣ ಪತ್ರಗಳ ವಿವರಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 4.2; ಪುಟ: 11೩)"
          
          columns={columns}
          data={ctx.tables1.Tabled1k}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Tabled1k;
