import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Subtitle from "./../../../../Subtitle/Subtitle"
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
//import Table8 from "../../../Tables/Chapter5/Table8";
import Table8kan from "../../../Tables/Chapter5kan/Table8";
//import Table9 from "../../../Tables/Chapter5/Table9";
//import Table9kan from "../../../Tables/Chapter5kan/Table9";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";

const OperatingEff = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Performance" forward="/State/Loss" />

                        <Subtitle>
                            {ctx.chapterFive.para46}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para47}
                        </Subtitle>
      <Para tooltips={[
       { word: "employed[46]", tooltip:"  Capital Employed = Paid up Share capital + Free Reserves and surplus + Long term loans less Accumulated losses less Deferred Revenue Expenditure" },
       
       
        ]}>

        {ctx.chapterFive.para48}
        </Para>
        <CustomTable title={"Table 5.8: Return on Capital Employed"}
            columns={ctx.tables5.Table8}
            data={ctx.tables5.Table8} />

          <h4>
        Source: Latest Financial Statement of SPSEs
          </h4>
          <h3 className='headnote'>
          </h3> 
        {["para49"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 

       <Subtitle>
        {ctx.chapterFive.para50}
        </Subtitle>   
        {["para51","para52","para53"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
        <CustomTable title={"Table 5.9: Return on Equity relating to SPSEs where funds were infused by the State Government"}
            columns={ctx.tables5.Table9}
            data={ctx.tables5.Table9} />

          <h4>
        Source: Latest Financial Statement of SPSEs
          </h4>
          <h3 className='headnote'>
          </h3>  
         {["para54"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}     
                       
                       
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter5kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/State/Performance" forward="/State/Loss"  />


                        <Title>
                            {ctx.chapter5kannada.Content.para36}
                        </Title>
                        <Para>
                            {ctx.chapter5kannada.Content.para37}
                        </Para>
                       
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default OperatingEff