import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
//import Table11 from "../../../Tables/Chapter5/Table11";
import Table11kan from "../../../Tables/Chapter5kan/Table11";
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";


const Submissions = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Appointment" forward="/State/Cag" />

                        <Subtitle>
                            {ctx.chapterFive.para68}
                        </Subtitle>  
                        <Subtitle>
                            {ctx.chapterFive.para69}
                        </Subtitle>  
        <Para tooltips={[
       { word: "three[51]", tooltip:"  Time specified in Section 394 (1) (a) of the Companies Act, 2013" },
       { word: "Meeting[52]", tooltip:"  In case of the first AGM, it shall be held within a period of nine months from the date of closing of the first financial year of the company and in any other case within a period of six months, from the date of closing of the financial year i.e. 30 September" },
       
        ]}>

        {ctx.chapterFive.para70}
        </Para>
             {["para71","para72","para73"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
        <Para tooltips={[
       { word: "2023[53]", tooltip:"  Due date of holding AGM of Companies for the financial year 2021-22 is 30 September 2023 as per the Companies Act, 2013." },
       
       
        ]}>

        {ctx.chapterFive.para74}
        </Para>
                        <Subtitle>
                            {ctx.chapterFive.para75}
                        </Subtitle>   
             {["para76","para77"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
        <CustomTable title={"Table 5.11: Details of arrears in submission of accounts of SPSEs"}
            columns={ctx.tables5.Table11}
            data={ctx.tables5.Table11} />

          <h4>
          [54]Includes 22 financial statements from 21 companies (including one non-working company) received before September 2023 but under various stages of audit / certification
          </h4>
        <h3 className='headnote'>
      
        </h3>
          {["para78","para79"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}   
                        <Subtitle>
                            {ctx.chapterFive.para80}
                        </Subtitle>   
    <Para tooltips={[
       { word: "two[55]", tooltip:"Karnataka State Financial Corporation (KSFC) and Karnataka State Warehousing Corporation (KSWC)." },
              
        ]}>

        {ctx.chapterFive.para81}
        </Para>
  <Para tooltips={[
       { word: "arrears[56]", tooltip:"  Includes three financial statements from three statutory corporations received before September 2023 but under various stages of audit / certification." },
              
        ]}>

        {ctx.chapterFive.para82}
        </Para>
          
                            

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
                    <FloatingActionButtons back="/State/Appointment" forward="/State/Cag"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para71}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para72}
                            </i>
                        </Subtitle>
                        {["Para73", "Para74","Para75","Para76","Para77"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para77a}
                            </i>
                        </Subtitle>
                        {["Para78","Para79"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}
 <CustomTable title={"ಕೋಷ್ಟಕ-5.11: ಸರ್ಕಾರಿ ಕಂಪನಿಗಳ ಲೆಕ್ಕಪತ್ರಗಳ ಸಲ್ಲಿಕೆಯಲ್ಲಿನ ಬಾಕಿಯ ವಿವರಗಳು"}
                                        
                                        columns={ctx.tables5kan.Table10}
                                        data={ctx.tables5kan.Table10} />


                        {["Para80","Para81"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}
                      
                       



                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Submissions