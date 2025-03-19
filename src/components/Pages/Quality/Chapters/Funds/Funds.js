import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1kan from '../../../Tables/Chapter4kan/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";
import Subtitle from "../../../../Subtitle/Subtitle";

const Funds = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="/quality/NonRemittance" />
                        <Title>
                            {ctx.chapterFour.Content.para2}
                        </Title>
                        <Title>
                            {ctx.chapterFour.Content.para3}
                        </Title>


                        {["para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.1: Entity-wise position of off-budget borrowings"}
                            columns={ctx.tables4.Table1}
                            data={ctx.tables4.Table1} />
                        <Para>
                            {ctx.chapterFour.Content.para6}

                        </Para>
                        {/* <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.1(a): Entity-wise position of off-budget borrowings"}
                            columns={ctx.tables4.Table1a}
                            data={ctx.tables4.Table1a} />
                            <h4 className='footnote'><i>
                            Source: Finance Accounts</i>
                        </h4>
                        <Para>
                            {ctx.chapterFour.Content.para7}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para7a}
                        </Para> */}




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
                        <FloatingActionButtons back="/quality" forward="/quality/NonRemittance" />
                        <Title>{ctx.chapter4kannada.Content.para10}</Title>
                        <Subtitle>
                           {ctx.chapter4kannada.Content.para100}
                        </Subtitle>
                        {["para101","para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.1: ಆಯವ್ಯಯೇತರ ಸಾಲಗಳ ಘಟಕವಾರು ಸ್ಥಿತಿ"}
                            
                            columns={ctx.tables4kan.Table1}
                            data={ctx.tables4kan.Table1} />
                        {["para102a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.1(ಎ): ಆಯವ್ಯಯೇತರ ಸಾಲಗಳ ಘಟಕವಾರು ಸ್ಥಿತಿ"}
                            
                            columns={ctx.tables4kan.Table2}
                            data={ctx.tables4kan.Table2} /> 
                                <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                        {["para103","para104"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                   
                       

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Funds