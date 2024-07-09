import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import CustomTable from "../../CustomTable/CustomTable";
import Tablec1k from '../Tables/Chapter1/Tablec1k'
import Tablec2k from '../Tables/Chapter1/Tablec2k'
import Tablec3k from '../Tables/Chapter1/Tablec3k'
import Tablec4k from '../Tables/Chapter1/Tablec4k'
import Tablec5k from '../Tables/Chapter1/Tablec5k'
import Tablec6k from '../Tables/Chapter1/Tablec6k'
import Tablec7k from '../Tables/Chapter1/Tablec7k'
import Tablec8k from '../Tables/Chapter1/Tablec8k'
import Tablec9k from '../Tables/Chapter1/Tablec9k'
import Tablec10k from '../Tables/Chapter1/Tablec10k'
import Tablec11k from '../Tables/Chapter1/Tablec11k'
import Tablec12k from '../Tables/Chapter1/Tablec12k'
import Tablec13k from '../Tables/Chapter1/Tablec13k'
import Tablec14k from '../Tables/Chapter1/Tablec14k'
import Tablec15k from '../Tables/Chapter1/Tablec15k'
import Tablec16k from '../Tables/Chapter1/Tablec16k'
import Tablec17k from '../Tables/Chapter1/Tablec17k'

const Appendix3 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        {/* <Tablec1 /> */}
                        <CustomTable title={"Appendix 3.1 Category wise/department wise budget allocation/expenditure for Child Budget for the year 2022-23(Reference: Paragraph 3.4; Page 84)"}
                            columns={ctx.appendix3.Table1}
                            data={ctx.appendix3.Table1}
                            indexToIncreaseWidth={0}
                            widthSize={'250px'} />
                        <h4> Source: Child Budget</h4>
                       
                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.2 Grant wise Budget allocation/outturn and the deviation of outturn from BE and RE(Reference: Paragraph 3.5.3.1, 3.5.3.2; Page 87)"}
                            columns={ctx.appendix3.Table2}
                            data={ctx.appendix3.Table2}
                            indexToIncreaseWidth={1}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Grant Register and Budget documents</h4>

                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.3 Cases of incurring expenditure, which are not covered by the budget, but released by FD as additionalities(Reference: Paragraph 3.6.1.1; Page 87)"}
                            columns={ctx.appendix3.Table3}
                            data={ctx.appendix3.Table3}
                            indexToIncreaseWidth={1}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>

                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.4 Unnecessary Supplementary Provision(Reference: Paragraph 3.6.1.3; Page 89)"}
                            columns={ctx.appendix3.Table4}
                            data={ctx.appendix3.Table4}
                            indexToIncreaseWidth={2}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.5 Excessive Supplementary Provision(Reference: Paragraph 3.6.1.3; Page 89)"}
                            columns={ctx.appendix3.Table5}
                            data={ctx.appendix3.Table5}
                            indexToIncreaseWidth={2}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.6 Inadequate Supplementary Provision(Reference: Paragraph 3.6.1.3; Page 89)"}
                            columns={ctx.appendix3.Table6}
                            data={ctx.appendix3.Table6}
                            indexToIncreaseWidth={2}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.7 Unnecessary/Excessive/Inadequate/Injudicious Re-appropriation(Reference: Paragraph 3.6.1.4(a); Page 90)"}
                            columns={ctx.appendix3.Table7}
                            data={ctx.appendix3.Table7}
                            indexToIncreaseWidth={2}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.8 Cases of Defective Re-Appropriation Orders"}
                            columns={ctx.appendix3.Table8}
                            data={ctx.appendix3.Table8}
                            indexToIncreaseWidth={5}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Office of the AG (A&E)</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.9 Grants/Appropriations with unspent provisions of ₹50 crore and above"}
                            columns={ctx.appendix3.Table9}
                            data={ctx.appendix3.Table9}
                            indexToIncreaseWidth={1}
                            widthSize={'250px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.10 Statement showing grant-wise savings for the year 2022-23"}
                            columns={ctx.appendix3.Table10}
                            data={ctx.appendix3.Table10}
                            indexToIncreaseWidth={0}
                            widthSize={'100px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.11 Statement of various grants/appropriations in which unspent provision occurred but no part of which was surrendered"}
                            columns={ctx.appendix3.Table11}
                            data={ctx.appendix3.Table11}
                            indexToIncreaseWidth={2}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.12 Surrender of entire unspent provision"}
                            columns={ctx.appendix3.Table12}
                            data={ctx.appendix3.Table12}
                            indexToIncreaseWidth={1}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.13 Surrender of unspent provision"}
                            columns={ctx.appendix3.Table13}
                            data={ctx.appendix3.Table13}
                            indexToIncreaseWidth={1}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.14 Results of substantial surrenders made during the year"}
                            columns={ctx.appendix3.Table14}
                            data={ctx.appendix3.Table14}
                            indexToIncreaseWidth={6}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.15 Cases of surrender of funds in excess of ₹ five crore on 30 and 31 of March 2023"}
                            columns={ctx.appendix3.Table15}
                            data={ctx.appendix3.Table15}
                            indexToIncreaseWidth={2}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Office of the AG (A&E)</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.16 Excess Expenditure over Provision requiring regularization"}
                            columns={ctx.appendix3.Table16}
                            data={ctx.appendix3.Table16}
                            indexToIncreaseWidth={3}
                            widthSize={'300px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.17 Grant-wise details under which reasons for savings not intimated"}
                            columns={ctx.appendix3.Table17}
                            data={ctx.appendix3.Table17}
                            indexToIncreaseWidth={1}
                            widthSize={'450px'} />
                        <h4 className='footnote'> Source: Appropriation Accounts</h4>


                        <h3 className='headnote'>
                            (₹ in crore)
                        </h3>
                        <CustomTable title={"Appendix 3.18 Rush of Expenditure for Grant No. 22 for the year 2022-23"}
                            columns={ctx.appendix3.Table18}
                            data={ctx.appendix3.Table18}
                            indexToIncreaseWidth={1}
                            widthSize={'350px'} />
                        <h4 className='footnote'> Source: Grant Register</h4>





                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec1k />
                        <h4> Source: Child Budget</h4>
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec2k />
                        <h4> ಆಕರ : ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec3k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ</h4>


                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec4k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>


                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec5k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec6k />


                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>



                        <Tablec7k />
                        <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರ ಕಛೇರಿ (ಲೆ ಮತ್ತು ಹ)</h4>


                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec8k />
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>


                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec9k />
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>


                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec10k />
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>
                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec11k />
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  </h4>
                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec12k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ  <br></br>
                        </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec13k />
                        <h4> Source: Office of  the AG (A&E) <br></br>
                        </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec14k />
                        <h4>  ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  <br></br>
                        </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec15k />
                        <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಛೇರಿ <br></br>
                        </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec16k />
                        <h4> Source:  Grant Register <br></br>
                        </h4>

                        <h3 className='headnote'>
                            (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec17k />
                        <h4> Source:  Grant Register <br></br>
                        </h4>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix3
