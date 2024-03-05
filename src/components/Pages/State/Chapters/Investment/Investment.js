import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
//import Table2 from "../../../Tables/Chapter5/Table2";
import Table2kan from "../../../Tables/Chapter5kan/Table2";
//import Table3 from "../../../Tables/Chapter5/Table3";
import Table3kan from "../../../Tables/Chapter5kan/Table3";
//import Table4 from "../../../Tables/Chapter5/Table4";
import Table4kan from "../../../Tables/Chapter5kan/Table4";
//import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";


const Investment = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Spse" forward="/State/Returns" />

                        <Subtitle>
                            {ctx.chapterFive.para16}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para17}
                        </Subtitle>
                        {["para18"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
        <CustomTable title={"Table 5.2: Sector-wise investment in SPSEs"}
            columns={ctx.tables5.Table2}
            data={ctx.tables5.Table2} />

          <h4>
        Source: Information furnished by SPSEs
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>

        {["para19"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}


          <Subtitle>
                            {ctx.chapterFive.para20}
                        </Subtitle>
                        {["para21"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para22}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para23}
                        </Subtitle>
                        
                        {["para24"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
                       <Subtitle>
                            {ctx.chapterFive.para25}
                        </Subtitle>
                        
                        {["para26"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 
          <Subtitle>
                            {ctx.chapterFive.para27}
                        </Subtitle>
                        
        {["para28"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 
    <CustomTable title={"Table 5.3: Details regarding budgetary support to Power Sector SPSEs by State Government"}
            columns={ctx.tables5.Table3}
            data={ctx.tables5.Table3} />

          <h4>
        
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>

          {["para29"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
        <CustomTable title={"Table 5.4: Activity wise Investment in Power Sector PSUs"}
            columns={ctx.tables5.Table4}
            data={ctx.tables5.Table4} />

          <h4>
        
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <Para tooltips={[
       { word: "GSDP[34]", tooltip:"GSDP of Karnataka for FY 2022-23 - ₹21,81,217 crore." },
       { word: "crore[35]", tooltip:"Represent dues towards State Generating Companies, viz. Karnataka Power Corporation Limited (KPCL):  ₹17,295.58 crore and Raichur Power Corporation Limited (RPCL): ₹2,781.74 crore (Amounts are taken as per the books of KPCL/RPCL)." },                    
       { word: "2023[36]", tooltip:"The LPS Rules, 2022 came into effect from 3 June 2022 and ESCOMs paid ₹1,852.31 crore under LPS during August 2022 to March 2023." },                    
       { word: "crore[37]", tooltip:"Represents dues to KPCL (₹15,934.58 crore) and RPCL (₹2,290.43 crore). This amount does not include dues accumulated during April 2022 to March 2023 and repayments received outside LPS during that period." },                    
        ]}>

        {ctx.chapterFive.para30}
        </Para>
 


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/State/Spse" forward="/State/Returns"  />


                        <Title>
                            {ctx.chapter5kannada.Content.para11}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para12}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para13}
                        </Para>

                        <Table2kan />

                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಆರ್ಥಿಕ ವಿವರಣಾಪಟ್ಟಿಗಳು
                                
                            </i>
                        </h4>

                        <Para>
                            {ctx.chapter5kannada.Content.para14}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para15}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para16}
                        </Para>    
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para17}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para18}
                        </Para>  
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para19}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para21}
                        </Para> 

                        <Table3kan />

                        <Para>
                            {ctx.chapter5kannada.Content.para22}
                        </Para>

                        <Table4kan />

                        <Para>
                            {ctx.chapter5kannada.Content.para23}
                        </Para>
                        <Para>
                            {ctx.chapter5kannada.Content.para24}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Investment