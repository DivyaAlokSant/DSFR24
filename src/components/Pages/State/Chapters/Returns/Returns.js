import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
//import Table5 from "../../../Tables/Chapter5/Table5";
import Table5kan from "../../../Tables/Chapter5kan/Table5";
//import Table6 from "../../../Tables/Chapter5/Table6";
import Table6kan from "../../../Tables/Chapter5kan/Table6";
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable"


const Returns = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />
                        <Subtitle>
                            {ctx.chapterFive.para31}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para32}
                        </Subtitle>
                        
                {["para33","para34"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
        
          )} 

  <CustomTable title={"Table 5.5: Top three SPSEs which contributed maximum profit"}
            columns={ctx.tables5.Table5}
            data={ctx.tables5.Table5} />

          <h4>
        Source: Latest Financial Statements of SPSEs
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          {["para35"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
        
          )} 
        <Subtitle>
                            {ctx.chapterFive.para36}
        </Subtitle>
        <Para tooltips={[
       { word: "guidelines[38]", tooltip:"  Original guidelines issued in May 2003 had been replaced by a Circular dated 29.03.2021 envisaging dividend payout of 30 per cent of profit after tax or 5 per cent of Net worth whichever is higher. The said Circular was withdrawn with a issue of fresh circular envisaging dividend payout equivalent to 30 per cent profit after tax (PAT)" },
       { word: "2021[39]", tooltip:"  Finance Department Circular dated 25.11.2021" },                    
       { word: "2022[40]", tooltip:"Government Order dated 19.10.2022" },                    
               ]}>

        {ctx.chapterFive.para37}
        </Para>
         <CustomTable title={"Table 5.6: Dividend Payout of SPSEs"}
            columns={ctx.tables5.Table6}
            data={ctx.tables5.Table6} />

          <h4>
        Source: Latest Financial Statements of SPSEs
          </h4>
        <h3 className='headnote'>
            ₹ In crore
        </h3>
        
        <Para tooltips={[
       { word: "SPSEs[41]", tooltip:"Karnataka State Minerals Corporation Limited, Karnataka Rural Infrastructure Development Limited, Karnataka State Small Industries Development Corporation Limited and Karnataka State Beverages Corporation Limited" },
       { word: "SPSEs[42]", tooltip:"Karnataka Soaps and Detergents Limited, The Mysore Electrical Industries Limited, Karnataka Silk Industries Corporation Limited, The Hutti Gold Mines Company Limited, Mysore Paints and Varnish Limited, Mysore Sales International Limited, Karnataka State Seeds Corporation Limited, Karnataka State Police Housing and Infrastructure Development Corporation Limited and Karnataka State Electronics Development Corporation Limited" },                    
       
         ]}>

        {ctx.chapterFive.para38}
        </Para>
        <Para tooltips={[
       { word: "two[43]", tooltip:"Karnataka State Warehousing Corporation (KSWC) and Karnataka State Financial Corporation (KSFC)." },
       
       
        ]}>

        {ctx.chapterFive.para39}
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
                    <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />
                    <Title>
                            {ctx.chapter5kannada.Content.para32}
                        </Title>
                        <Title>
                            {ctx.chapter5kannada.Content.para33}
                        </Title>
                        {["para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}
                         <h3 className='headnote'>
                            (` ಕೋಟಿಗಳಲ್ಲಿ)
                             </h3>

                     <CustomTable title={"ಕೋಷ್ಟಕ-5.5: ಗರಿಷ್ಟ ಲಾಭವನ್ನು ನೀಡಿದ ಮೂರು ಪ್ರಮುಖ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು"}
                                        
                        columns={ctx.tables5kan.Table5}
                        data={ctx.tables5kan.Table5} />
                          <h4 className='footnote'>
                            <i>
                            ಆಕರ: : ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಹಣಕಾಸು ತ:ಖ್ತೆಗಳು 
                           
                            </i>
                        </h4>
                         {["para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}
                     <Title>
                            {ctx.chapter5kannada.Content.para36}
                     </Title>
                     {["para37"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}
                          <CustomTable title={"ಕೋಷ್ಟಕ-5.5: ಗರಿಷ್ಟ ಲಾಭವನ್ನು ನೀಡಿದ ಮೂರು ಪ್ರಮುಖ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳು"}
                                        
                                        columns={ctx.tables5kan.Table5}
                                        data={ctx.tables5kan.Table5} />
                                          <h4 className='footnote'>
                                            <i>
                                            ಆಕರ: : ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಹಣಕಾಸು ತ:ಖ್ತೆಗಳು 
                                           
                                            </i>
                                        </h4>
                     {["para38","para39","para40"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}



                        {/* <Table5kan />

                        
                        <Table6kan /> */}
                        
                       
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Returns