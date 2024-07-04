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

                    <Para tooltips={[
       { word: "Corporations[31]", tooltip:"Karnataka State Road Transport Corporation, North Western Karnataka Road Transport Corporation, Kalyana Karnataka Road Transport Corporation (Previously North Eastern Karnataka Road Transport Corporation), Bangalore Metropolitan Transport Corporation, Karnataka State Financial Corporation and Karnataka State Warehousing Corporation" },
       { word: "fourteen[32]", tooltip:"Karnataka Agro Industries Corporation Limited, The Mysore Tobacco Company Limited, Karnataka Pulpwood Limited, The Karnataka State Veneers Limited, The Mysore Match Company Limited, The Mysore Lamp Works Limited, Mysore Cosmetics Limited, The Mysore Chrome Tanning Company Limited, NGEF Limited, Karnataka Telecom Limited, The Mysore Acetate and Chemicals Company limited, Bangalore Suburban Rail Company Limited, Vijayanagar Steel Limited and Bangalore Airport Rail Link Limited (under voluntary liquidation)." },                    
       { word: "companies[33]", tooltip:"Non-working government company means a company which has not been carrying on any business or operation" },                    
        ]}>

                         {ctx.chapterFive.para11}
        </Para>
        {["para11a"].map(
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
           <h3 className='headnote'>
            ₹ In crore
        </h3>

         <CustomTable title={"Table 5.1: Details of turnover of SPSEs vis-a-vis GSDP of Karnataka"}
            columns={ctx.tables5.Table1}
            data={ctx.tables5.Table1} />

          <h4>
        
          </h4>
       
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
                            {ctx.chapter5kannada.Content.para10}
                        </Title>
                        <Title>
                            {ctx.chapter5kannada.Content.para10a}
                        </Title>
                        {["para11", "para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                            
                                    {ctx.chapter5kannada.Content[item]}
                            
                            </Para>)}
                            <Title>
                        {ctx.chapter5kannada.Content.para13}
                        </Title>
                        {["para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                            
                                    {ctx.chapter5kannada.Content[item]}
                            
                            </Para>)}
                            <h3 className='headnote'>
                            (` ಕೋಟಿಗಳಲ್ಲಿ)
                             </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-5.1: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ವಹಿವಾಟು ಹಾಗೂ ಅದಕ್ಕೆ ಪರಸ್ವರ ಅಭಿಮುಖವಾಗಿ ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ವಿವರಗಳು"}


                              columns={ctx.tables5kan.Table1}
                              data={ctx.tables5kan.Table1} />

                        {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                            
                                    {ctx.chapter5kannada.Content[item]}
                            
                            </Para>)}
                        
                      
                        

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Spse