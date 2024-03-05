import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
//import Table1 from "../../../Tables/Chapter5/Table1";
import Table1kan from "../../../Tables/Chapter5kan/Table1";
import Subtitle from "./../../../../Subtitle/Subtitle"
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";


const Spse = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Mandate" forward="/State/Investment" />

                    <Subtitle>
                            {ctx.chapterFive.para9}
                    </Subtitle>
                       

                    <Subtitle>
                            {ctx.chapterFive.para10}                      
                    </Subtitle> 

                    {["para11"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
                    <Subtitle>
                            {ctx.chapterFive.para12}                      
                    </Subtitle> 

         {["para13"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
         <CustomTable title={"Table 5.1: Details of turnover of SPSEs vis-a-vis GSDP of Karnataka"}
            columns={ctx.tables5.Table1}
            data={ctx.tables5.Table1} />

          <h4>
        
          </h4>
        <h3 className='headnote'>
            ₹ In crore
        </h3>

         {["para14"].map(
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
                        <FloatingActionButtons back="/State/Mandate" forward="/State/Investment" />


                        <Title>
                            {ctx.chapter5kannada.Content.para8}
                        </Title>
                        {["para9", "para10"].map((item, ind) =>
                            <Para key={ind / 10}>
                            
                                    {ctx.chapter5kannada.Content[item]}
                            
                            </Para>)}
                        <Table1kan />

                        <Para>
                        {ctx.chapter5kannada.Content.para10a}
                        </Para>    

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Spse