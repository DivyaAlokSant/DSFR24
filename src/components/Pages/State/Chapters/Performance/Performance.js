import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Subtitle from "./../../../../Subtitle/Subtitle"
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Table8 from "../../../Tables/Chapter5/Table8";
import Table8kan from "../../../Tables/Chapter5kan/Table8";
import Table9 from "../../../Tables/Chapter5/Table9";
import Table9kan from "../../../Tables/Chapter5kan/Table9";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Performance = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Debt" forward="/State/Loss" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para49}
                        </Title>
                        <Para>
                              {ctx.chapterFive.Fifth.Para50}
                        </Para>
                        
                        <Table8 />
                        <h4 className='footnote'>
                                <i>
                                    Source: Latest Financial Statements of SPSEs
                                    <br></br>
                                    
                                </i>
                            </h4>

                       
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
                    <FloatingActionButtons back="/State/Debt" forward="/State/Loss"  />


                        <Title>
                            {ctx.chapter5kannada.Content.para36}
                        </Title>
                        <Para>
                            {ctx.chapter5kannada.Content.para37}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para38}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para39}
                        </Para> 


                        <Table8kan />
                        <h3>
                        ಆಕರ: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಆರ್ಥಿಕ ವಿವರಣಾ ಪಟ್ಟಗಳು
                        </h3>
                        <Para>
                            {ctx.chapter5kannada.Content.para40}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para41}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para42}
                        </Para> 
                        <Para>
                            {ctx.chapter5kannada.Content.para43}
                        </Para> 
                        <Para>
                            {ctx.chapter5kannada.Content.para44}
                        </Para> 
                        <Table9kan />
                        <Para>
                            {ctx.chapter5kannada.Content.para45}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Performance