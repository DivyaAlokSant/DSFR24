import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table2kan from "../../../Tables/Chapter4kan/Table2"
import Table3kan from "../../../Tables/Chapter4kan/Table3"

import ImageComponent from 'material-ui-image'
import CustomTable from "../../../../CustomTable/CustomTable";

const NonRemittance
    = () => {

        const ctx = useContext(MyContext)

        
        return (
            ctx.langPref
                ? (ctx.chapterFour
                    ? <div >
                        <Navbar />
                        <div className="contentwrapper" id="home">
                            <FloatingActionButtons back="/quality/funds" forward="/quality/Non-discharge" />
                            <Title>{ctx.chapterFour.Content.para8}</Title>

                            {["para9", "para10", "para11",].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterFour.Content[item]}
                                </Para>)}
                            <h3 className='headnote'>
                                ₹ In crore
                            </h3>

                            <CustomTable title={"Table 4.2: Details of interest earned and its treatment"}
                                columns={ctx.tables4.Table2}
                                data={ctx.tables4.Table2} />
                                 <h4 className='footnote'><i>
                                 Source: Offices of the Pr.AG (Audit-I) and Pr.AG (Audit-II) .</i>
                        </h4>
                                 <h4 className='footnote'><i>
                                 *The Institutions are yet to be audited.</i>
                        </h4>

                            {["para12", "para13"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterFour.Content[item]}
                                </Para>)}
                            {/* <Para>
                            {ctx.chapterFour.Content.para9}
                        </Para> */}
                            {/* <Subtitle>
                            {ctx.chapterFour.Content.}  
                        </Subtitle> */}

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
                            <FloatingActionButtons back="/quality/funds" forward="/quality/Non-discharge" />
                            <Title>{ctx.chapter4kannada.Content.para105}</Title>
                            {["para106","para107","para11"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.2: ಗಳಿಸಿದ ಬಡ್ಡಿ ಮತ್ತು ಅದರ ವಹಿವಾಟಿನ ವಿವರಗಳು"}
                            
                            columns={ctx.tables4kan.Table3}
                            data={ctx.tables4kan.Table3} /> 
                                <h4 className='footnote'>
                <i>
                * ಈ ಸಂಸ್ಥೆಗಳನ್ನು ಇನ್ನೂ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮಾಡಬೇಕಿದೆ.
                   
                </i></h4> 
                        {["para12","para13"].map((item, ind) =>
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

export default NonRemittance
