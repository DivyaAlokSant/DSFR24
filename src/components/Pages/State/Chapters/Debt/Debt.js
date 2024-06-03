import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import Subtitle from "./../../../../Subtitle/Subtitle"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
//import Table7 from "../../../Tables/Chapter5/Table7";
import Table7kan from "../../../Tables/Chapter5kan/Table7";
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable"

const Debt = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Returns" forward="/State/Performance" />
                        <Subtitle>
                            {ctx.chapterFive.para40}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para41}
                        </Subtitle>
        {["para42"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 
        <CustomTable title={"Table 5.7: Interst Coverage Ratio"}
            columns={ctx.tables5.Table7}
            data={ctx.tables5.Table7} />

          <h4>
        Source: Latest Financial Statement of SPSEs
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>


        {["para43"].map(
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
                    <FloatingActionButtons back="/State/Returns" forward="/State/Performance" />


                        <Title>
                            {ctx.chapter5kannada.Content.para41}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para42}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para43}
                        </Para>
                        <h3 className='headnote'>
                            (` ಕೋಟಿಗಳಲ್ಲಿ)
                             </h3>

                     <CustomTable title={"ಕೋಷ್ಟಕ-5.7: ಬಡ್ಡಿ ವ್ಯಾಪ್ತಿ ಅನುಪಾತ"}
                                        
                        columns={ctx.tables5kan.Table6}
                        data={ctx.tables5kan.Table6} />
                          <h4 className='footnote'>
                            <i>
                            ಆಕರ: : ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಹಣಕಾಸು ತ:ಖ್ತೆಗಳು 
                           
                            </i>
                        </h4>

                        <Para>
                            {ctx.chapter5kannada.Content.para44}
                        </Para>
                      
                       

                        

                       

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Debt