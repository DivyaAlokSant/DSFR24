import React, { useContext} from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import CustomTable from "../../CustomTable/CustomTable";
//import { getFirebase } from "../../../firebase/firebase";
import Tablee1k from '../Tables/Chapter1/Tablee1k'
import Tablee2k from '../Tables/Chapter1/Tablee2k'
import Tablee3k from '../Tables/Chapter1/Tablee3k'
import Tablee4k from '../Tables/Chapter1/Tablee4k'


const Appendix5 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-4" forward="/glossary/glossary" />

                        {/* <Tablee1 /> */}

                        <CustomTable title={"Appendix – 5.1 List of State Public Sector Enterprises under jurisdiction of Audit in Karnataka(Reference: Paragraph 5.3.1, Page 142)"}
                            columns={ctx.appendix5.Table1}
                            data={ctx.appendix5.Table1}
                            indexToIncreaseWidth={1}
                            widthSize={'550px'} />

                        <h3 className='headnote'>
                            (Amount in ₹ Crore)
                        </h3>
                        {/* <Tablee2 /> */}
                        <CustomTable title={"Appendix 5.2 Details of SPSEs whose Net worth has eroded as per their latest finalized accounts(Reference: Paragraph 5.9.2, Page 149)"}
                            columns={ctx.appendix5.Table2}
                            data={ctx.appendix5.Table2}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />
                        <h4 className='footnote'>
                            *Information in column 3 to 7 has been taken from latest finalised accounts. With respect to column 8 and 9, it has been taken as per the information provided by respective companies as on 31 March 2023.
                        </h4>

                        <h3 className='headnote'>
                            Amount in crore
                        </h3>
                        {/* <Tablee3 /> */}
                        <CustomTable title={"Appendix 5.3 Details of SPSEs whose financial statements were amended as a result of supplementary audit conducted by C&AG.(Reference: Paragraph 5.14.2, Page 153)"}
                            columns={ctx.appendix5.Table3}
                            data={ctx.appendix5.Table3}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />

                        <CustomTable title={"Appendix 5.4 Details of SPSEs where Statutory Auditors’ Report was revised as aresult of supplementary audit conducted by C&AG.(Reference: Paragraph 5.14.3, Page 153)"}
                            columns={ctx.appendix5.Table4}
                            data={ctx.appendix5.Table4}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />

                        <CustomTable title={"Appendix 5.5 Comments of Profitability(Reference: Paragraph 5.14.4, Page 153)"}
                            columns={ctx.appendix5.Table5}
                            data={ctx.appendix5.Table5}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />

                        <CustomTable title={"Appendix 5.6 Comments of Financial Position(Reference: Paragraph 5.14.4, Page 153)"}
                            columns={ctx.appendix5.Table6}
                            data={ctx.appendix5.Table6}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />








                        {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                                type="application/pdf" />
                        </object> */}
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
                        <FloatingActionButtons back="/appendices/appendix-4" forward="/appendices/Glossary" />

                        <Tablee1k />
                        <h3 className='headnote'>
                            (Amount in ₹)
                        </h3>
                        <Tablee2k />


                        <Tablee3k />


                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        <Tablee4k />
                        <h4>Information in column 3 to 6 has been taken from latest finalised accounts. <br></br>
                            With respect to column 7 and 8 as on March 2022 unaudited figures.
                        </h4>







                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix5
