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
import k41 from '../../../../../Images/k41.png'
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
                            <FloatingActionButtons back="/quality/funds" forward="/quality/acbills" />
                            <Title>{ctx.chapter4kannada.Content.para16}</Title>

                            <Para>
                                {ctx.chapter4kannada.Content.para17}
                            </Para>
                            <Para>
                                {ctx.chapter4kannada.Content.para18}
                            </Para>

                            <h3 className="headnote">
                                (`ಕೋಟಿಗಳಲ್ಲಿ)
                            </h3>
                            <Table2kan />
                            <h4>ಆಕರ - ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h4>
                            <h3 className="headnote">
                                (`ಕೋಟಿಗಳಲ್ಲಿ)
                            </h3>
                            <Table3kan />
                            <h4>ಆಕರ - ಮಹಾಲೇಖಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಚೇರಿ</h4>
                            <Para>
                                {ctx.chapter4kannada.Content.para19}
                            </Para>
                            <h3 className="headnote">
                                (` ಕೋಟಿಗಳಲ್ಲಿ )
                            </h3>
                            <ImageComponent src={k41} aspectRatio={1 / 0.5} />
                            <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರು (ಲೆ ಮತ್ತು ಹ) ಅವರ ಕಛೇರಿ </h4>
                            {["para20"].map((item, ind) =>
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
