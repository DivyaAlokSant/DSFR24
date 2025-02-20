import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table2 from '../../../Tables/Chapter1/Table2'
import Table2kan from '../../../Tables/Chapter1kan/Table2'
import CustomTable from '../../../../CustomTable/CustomTable'



const FinanceSnapshot = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para39}
                        </Title>
                        <Para >
                            {ctx.chapterOne.Profile["Para40"]}
                        </Para>
                        
                        <h3 className='headnote'>
                            ₹ In crore
                    </h3>

        <CustomTable    title={"Table 1.2: Actual financial results vis-à-vis Budget Provisions"}
                        columns={ctx.tables1.Table4e}
                        data={ctx.tables1.Table4e} />
                         <h4 className='footnote'>
                <i>
               {/* Source: Grant Register and Gender Budget of the respective years */}
                   
                </i></h4> 
                        
                        {/* <Table2 /> 
                         <CustomTable title={"Table 1.2: Actual financial results vis-à-vis Budget Provisions"}


                                columns={ctx.tables1.Table4e}
                                data={ctx.tables1.Table4e} />
                                <h4 className='footnote'>
                            <i></i></h4> */}
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T2F1}
                                <br></br>
                                {ctx.tables1.T2F2}
                                <br></br>      
                                {ctx.tables1.T2F3}
                                <br></br>                            
                                {ctx.tables1.T2F22}
                                {/* <br></br>
                                {ctx.tables1.T2F4}
                                <br></br>
                                {ctx.tables1.T2F5} */}
                                </i>
                        </h4>

                        {[ "Para41", "Para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                         <Title id="anchor">
                            {ctx.chapterOne.Profile.Para42a}
                        </Title>
                        <Para >
                            {ctx.chapterOne.Profile["Para42b"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                    </h3>

        <CustomTable    title={"Table 1.2(a): Details of Five Guarantee Schemes implemented during 2023-24"}
                        columns={ctx.tables1.Table4f}
                        data={ctx.tables1.Table4f} />
                         <h4 className='footnote'>
                <i>
               Source: Grant registers maintained by AG (A&E), Karnataka
                </i></h4> 
                <h4 className='footnote'>
                <i>
                * Cash Transfers: Gruha Lakshmi and Yuva Nidhi. Subsidies: Gruha Jyothi, Anna Bhagya and Shakti  
                </i></h4> 
                        

                        {[ "Para42c", "Para42d","Para42e","Para42f","Para42g","Para42h","Para42i","Para42j"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/budgetprocess" forward="/overview/snapshot-assets" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para47}
                        </Title>
                        
                        {["para48"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <CustomTable title={"ಕೋಷ್ಟಕ-1.2: ಆಯವ್ಯಯ ಅಂದಾಜುಗಳಿಗೆ ಹೋಲಿಸಿದಂತೆ ವಾಸ್ತವ ಹಣಕಾಸು ಫಲಿತಾಂಶಗಳು"}


                           columns={ctx.tables1kan.Table2}
                            data={ctx.tables1kan.Table2} />
                    <h4  className='footnote'>
                         {["f4", "f5", "f6","f7","f7a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}</h4>
                        {["para49","para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
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

export default FinanceSnapshot
