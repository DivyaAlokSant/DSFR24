import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import Subtitle from "./../../../../Subtitle/Subtitle"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table7 from "../../../Tables/Chapter5/Table7";
import Table7kan from "../../../Tables/Chapter5kan/Table7";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Debt = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Returns" forward="/State/Performance" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para42}
                        </Title>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para43}
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para44}
                        </Para>

                        <Table7 />

                            <h4 className='footnote'>
                                <i>
                                    Source: Latest Financial Statements of SPSEs
                                    <br></br>
                                    Number of companies having interest coverage ratio more than 1 -This doesn’t include PSUs which have loan liability but interest coverage ratio couldn’t be calculated due to nil value either in interest expenses or EBIT. <br></br>
Number of companies having interest coverage ratio less than 1-   This doesn’t include PSUs which have loan liability but interest coverage ratio couldn’t be calculated due to nil value either in interest expenses or EBIT.

                                    
                                </i>
                            </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para45}
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
                    <FloatingActionButtons back="/State/Returns" forward="/State/Performance" />


                        <Title>
                            {ctx.chapter5kannada.Content.para32}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para33}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para34}
                        </Para>
                        
                        <Table7kan />
                        <h3>
                        ಆಕರ: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಆರ್ಥಿಕ ವಿವರಣಾ ಪಟ್ಟಗಳು
                        </h3>
                        <Para>
                            {ctx.chapter5kannada.Content.para35}
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