import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table2 from "../../../Tables/Chapter5/Table2";
import Table2kan from "../../../Tables/Chapter5kan/Table2";
import Table3 from "../../../Tables/Chapter5/Table3";
import Table3kan from "../../../Tables/Chapter5kan/Table3";
import Table4 from "../../../Tables/Chapter5/Table4";
import Table4kan from "../../../Tables/Chapter5kan/Table4";
//import Table1 from '../../../Tables/Chapter4/Table1'


const Investment = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Spse" forward="/State/Returns" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para12}
                        </Title>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para13}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para14}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table2 />

                        <h4 className='footnote'>
                            <i>
                                Source: Latest Financial Statements of SPSEs.
                                <br></br>
                                Investment includes equity and long term loans.
                            </i>
                        </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para19}
                        </Para>    

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para20}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para21}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para22}
                        </Subtitle>
                        <Subtitle>
                              {ctx.chapterFive.Fifth.Para23}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para23a}
                        </Para>
                        <Subtitle>
                              {ctx.chapterFive.Fifth.Para23b}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para23c}
                        </Para>

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para24}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para25}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table3 />

                   

                        <Para>
                              {ctx.chapterFive.Fifth.Para26}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table4 />

                        {/* <h4 className='footnote'>
                            <i>
                                Source: Latest Financial Statements of SPSEs.
                                <br></br>
                                Investment includes equity and long term loans.
                            </i>
                        </h4> */}

                        
                        <Para>
                            {ctx.chapterFive.Fifth.Para27.substring(0, 688)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para27.substring(670, 672)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para36}
                                </span>
                                <sup>28</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para27.substring(688, 813)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para27.substring(814, 815)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para37}
                                </span>
                                <sup>29</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para27.substring(814,835)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para27.substring(836, 837)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para38}
                                </span>
                                <sup>30</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para27.substring(836,)}

                        </Para>
                        
                        {["Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

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
                    <FloatingActionButtons back="/State/Spse" forward="/State/Returns"  />


                        <Title>
                            {ctx.chapter5kannada.Content.para11}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para12}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para13}
                        </Para>

                        <Table2kan />

                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಇತ್ತೀಚಿನ ಆರ್ಥಿಕ ವಿವರಣಾಪಟ್ಟಿಗಳು
                                
                            </i>
                        </h4>

                        <Para>
                            {ctx.chapter5kannada.Content.para14}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para15}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para16}
                        </Para>    
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para17}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para18}
                        </Para>  
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para19}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para21}
                        </Para> 

                        <Table3kan />

                        <Para>
                            {ctx.chapter5kannada.Content.para22}
                        </Para>

                        <Table4kan />

                        <Para>
                            {ctx.chapter5kannada.Content.para23}
                        </Para>
                        <Para>
                            {ctx.chapter5kannada.Content.para24}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Investment