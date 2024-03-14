import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import Para from '../../Para/Para'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Tablekan1 from '../Tables/Chapter1/Tablekan1'
import Tablekan2 from '../Tables/Chapter1/Tablekan2'
import Tablekan3 from '../Tables/Chapter1/Tablekan3'
import Tablekan4 from '../Tables/Chapter1/Tablekan4'
import CustomTable from "../../CustomTable/CustomTable"

import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"





const Appendix1 = () => {

    const ctx = useContext(MyContext)




    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Recommend" forward="/appendices/appendix-2" />
                        <CustomTable title={"Appendix 1.1  A State Profile"}
                            columns={ctx.appendix1.Table1a}
                            data={ctx.appendix1.Table1a}
                            indexToIncreaseWidth={0}
                            widthSize={'50px'} />
                        {/* <Tablea1 /> */}
                        {/* <Tablea2 /> */}
                        <CustomTable title={"Appendix 1.1 B Financial Data"}
                            columns={ctx.appendix1.Table1b}
                            data={ctx.appendix1.Table1b}
                            indexToIncreaseWidth={1}
                            widthSize={'250px'} />

                        <h4> Source: Financial data is based on Finance Accounts <br></br>
                            # Human Development Index is a composite index comprising of life expectancy, education and per-capita income.<br></br>
                            * GC states figures is adopted from the information sent by Economic Advisor, O/o the CAG, New Delhi.<br></br>
                            @ Per Capita GSDP (2018-19 to 2021-22) as per Economic Survey 2022-23, GoK and the per capita GSDP for the year 2022-23 has been worked out based on the projected population of the state of 6.75crore as per Economic survey of Karnataka 2022-23.
                        </h4>
                        {["para1", "para2", "para3", "para3", "para5", "para6", "para7", "para8", "para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.appendix1.content[item]}
                            </Para>
                        )}
                        {["para10", "para11"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.appendix1.content[item]}
                            </Para>
                        )}
                        <CustomTable title={"Appendix 1.2 Structure of Government Accounts"}
                            columns={ctx.appendix1.Table2}
                            data={ctx.appendix1.Table2}
                            indexToIncreaseWidth={1}
                            widthSize={'1000px'} />

                        <CustomTable title={"Appendix 1.3 Summarised Financial position of Government of Karnataka as on 31 March 2023"}
                            columns={ctx.appendix1.Table3}
                            data={ctx.appendix1.Table3}
                            indexToIncreaseWidth={2}
                            widthSize={'400px'} />

                        <h4 className="Footnote"> ^ Effective Loans and Advances for GoI would be ₹14,869 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore and ₹18,109 crore  given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission. <br></br>
                        </h4>



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
                        <FloatingActionButtons back="/State/Recommend" forward="/appendices/appendix-2" />
                        <Tablekan1 />
                        <Tablekan2 />
                        <h4>ಆಕರ: ಹಣಕಾಸು ದತ್ತಾಂಶಗಳಿಗೆ ಹಣಕಾಸು ಲೆಕ್ಕಗಳು ಆಧಾರಿತ.<br></br>
                            ಸಾಮಾನ್ಯ ವರ್ಗದ ರಾಜ್ಯಗಳ ಅಂಕಿಅಂಶಗಳನ್ನು ಆರ್ಥಿಕ ಸಲಹೆಗಾರರು, ಭಾರತದ ಲೆಕ್ಕನಿಯಂತ್ರಕರು ಮತ್ತು ಮಹಾ ಲೆಕ್ಕಪರಿಶೋಧಕರ ಕಛೇರಿ, ನವದೆಹಲಿ ಇವರಿಂದ ಮಾಹಿತಿ ಪಡೆಯಲಾಗಿದೆ.<br></br>

                            ^ ೨೦೧೯-20 ರಿಂದ 20೨೦-21ರ ಅಂಕಿಅಂಶಗಳನ್ನು ಮಾರ್ಚಿ ೨೦೨1ಕ್ಕೆ ಕೊನೆಗೊಂಡ ಆರ್ಥಿಕ ಲೆಕ್ಕಗಳಿಂದ ಅಳವಡಿಸಲಾಗಿದೆ.<br></br> <br></br>
                        </h4>
                        {["para1ak", "para1bk", "para1ck", "para1dk", "para1ek", "para1fk", "para1gk", "para1hk", "para1ik", "para1jk", "para1kk", "para1lk", "para1mk", "para1nk", "para1ok"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Tablekan3 />
                        <h3 className='headnote'>
                            (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablekan4 />
                        <h4> * ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಮರುಪಾವತಿ ಆದ ಹೂಡಿಕೆಗಳು (`0.48 ಕೋಟಿ) ಹೊರತು ಮೊತ್ತ ತೋರಿಸಲಾಗಿದೆ.
                            <br></br>
                            ^ ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ `18,109 ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು `27,276 ಕೋಟಿಗಳಾಗುತ್ತದೆ.
                        </h4>
                        {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-1-to-upload.pdf?alt=media&token=bf9ac43a-a103-47be-8924-b868762312d6"
                                type="application/pdf" />
                        </object> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix1
