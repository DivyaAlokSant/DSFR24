import React, { useContext} from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import CustomTable from "../../CustomTable/CustomTable"
import Tableb1k from '../Tables/Chapter1/Tableb1k'
import Tableb2k from '../Tables/Chapter1/Tableb2k'
import Tableb3k from '../Tables/Chapter1/Tableb3k'
import Tableb4k from '../Tables/Chapter1/Tableb4k'
import Tableb5k from '../Tables/Chapter1/Tableb5k'


import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"



const Appendix2 = () => {

    const ctx = useContext(MyContext)




    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-1" forward="/appendices/appendix-3" />

                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        <CustomTable title={"Appendix 2.1 Abstract of Receipts and Disbursements(Reference: Paragraph 2.2; Page 17)"}
                            columns={ctx.appendix2.Table1}
                            data={ctx.appendix2.Table1}
                            indexToIncreaseWidth={4}
                            widthSize={'350px'} />

                        <h4 className="Footnote"> # Includes expenditure on interest payment in respect of off-budget borrowings etc., under various service heads (₹1,216.04 crore borrowed through Special Purpose Vehicles- Social Services (₹119.35 crore) and Economic Services (₹ 1,096.69 crore).
                            <br></br>*Includes expenditure of ₹ 4,621.51 crore on account of off-budget borrowings.
                            <br></br>** Effective Public Debts would be ₹62,531.89 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹18,108.91 crore given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                        </h4>
                        {/* <Tableb1 /> */}
                        {/* <Tableb2 /> */}
                        <CustomTable title={"Appendix 2.2 Time series data on the State Government Finances(Reference: Paragraph 2.2, 2.4.3, 2.7.1; Page 17,23,62)"}
                            columns={ctx.appendix2.Table2}
                            data={ctx.appendix2.Table2}
                            indexToIncreaseWidth={0}
                            widthSize={'350px'} />
                        <h4>Figures in brackets represent percentages (rounded) to total of each sub-heading
                            <br></br>  # Includes expenditure on interest payment in respect of off-budget borrowings etc., under various service heads (₹1,206.04 crore borrowed through Special Purpose Vehicles- Social Services (₹156.67 crore) and Economic Services (₹ 1,135.59 crore).<br></br>
                            *GSDP figures adopted in previous audit report are 2018-19 (₹14,76,496 crore), 2019-20 ₹16,15,457crore), 2020-21 (₹17,30,991 crore) and 2021-22(₹17,21,336 crore)<br></br>
                            **Buoyancy ratio indicates the elasticity or degree of responsiveness of a fiscal variable with respect to a given change in the base variable.  For instance, revenue buoyancy at 0.4 implies that revenue receipts tend to increase by 0.4 percentage points, if the GSDP increases by one<br></br>
                            ^The back to back Loan ₹ 12,407 crore in 2020-21 received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator<br></br>
                            ## The effective public debt would be₹72,121 crore and ₹62,532crore by deducting the GST compensation of 12,407 crore for 2020-21 and ₹18,109 crore for 2021-22 received as back to back loans. The Department of Expenditure, GoI had decided that GST compensation given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the FC.<br></br>
                            $ The effective Loans and Advances from GoI would be₹1,707 crore and ₹2,070 crore by deducting the GST compensation of 12,407 crore for 2020-21 and ₹18,109 crore for 2021-22 received as back to back loans. The Department of Expenditure, GoI had decided that GST compensation given to the state as back-to-back loan under Debt Receipts would not be treated as debt of the state for any norms which may be prescribed by the FC.<br></br>
                            ^^ Effective Outstanding Fiscal Liabilities would be ₹4,03,519 crore, ₹4,59,740 crore and ₹5,22,847 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore in 2020-21 and ₹ 18,109 crore in 2021-22 given to the state as back-to-back loan under Debt Receipts respectively would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.<br></br>

                        </h4>
                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        {/* <Tableb3 /> */}
                        <CustomTable title={"Appendix 2.3 Department wise share of Subsidies(Reference: Paragraph 2.5.2.5; Page 42)"}
                            columns={ctx.appendix2.Table3}
                            data={ctx.appendix2.Table3}
                            indexToIncreaseWidth={6}
                            widthSize={'350px'} />
                        <h4>
                            Source: Finance Accounts<br></br>

                        </h4>
                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        {/* <Tableb4 /> */}
                        <CustomTable title={"Appendix 2.4 Subsidies in the form of financial assistance, incentives etc.(Reference: Paragraph 2.5.2.5; Page 43)"}
                            columns={ctx.appendix2.Table4}
                            data={ctx.appendix2.Table4}
                            indexToIncreaseWidth={2}
                            widthSize={'300px'} />
                        <h4>
                            Source: Consolidated Abstract of major heads
                        </h4>
                        <h3 className='headnote'>
                            ₹ in crore
                        </h3>
                        {/* <Tableb5 /> */}
                        <CustomTable title={"Appendix 2.5 Detailed Loan Accounts maintained by Principal Accountant General (A&E)Reference: Paragraph 2.5.4.2; Page 50)"}
                            columns={ctx.appendix2.Table5}
                            data={ctx.appendix2.Table5}
                            indexToIncreaseWidth={1}
                            widthSize={'350px'} />
                        <h4>Source: Finance Accounts
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
                        <FloatingActionButtons back="/appendices/appendix-1" forward="/appendices/appendix-3" />
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tableb1k />
                        <h4># ವಿವಿಧ ಸೇವಾ ಶೀರ್ಷಿಕೆಗಳಡಿ ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲ ಮುಂತಾದವುಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಬಡ್ಡಿ ಪಾವತಿಯನ್ನು ಒಳಗೊಂಡಿದೆ. (₹1,292.26 ಕೋಟಿಗಳನ್ನು ವಿಶೇಷ ಉದ್ದೇಶ ಸಾಧನಗಳ ಮೂಲಕ ಸಾಲವನ್ನಾಗಿ ಪಡೆಯಲಾಗಿದೆ - ಸಾಮಾಜಿಕ ಸೇವೆಗಳು (₹೧56.67 ಕೋಟಿ) ಮತ್ತು ಆರ್ಥಿಕ ಸೇವೆಗಳು (₹೧,135.59 ಕೋಟಿ).
                            <br></br>
                            * ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲಗಳಿಂದಾದ ₹ 4,089.27 ಕೋಟಿಗಳ ವೆಚ್ಚವನ್ನು ಒಳಗೊಂಡಿದೆ.
                            <br></br>
                            ** ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ ₹18,108.91 ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಸಾರ್ವಜನಿಕ ಋಣ ಸ್ವೀಕೃತಿಗಳು ₹62,531.89 ಕೋಟಿಗಳಾಗಿತ್ತು.
                            <br></br>
                            $ ೨೦೨೧-೨೨ರ ಹಣಕಾಸು ಲೆಕ್ಕಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗಿರುವ ವಾಸ್ತವಿಕ ರಾಜಸ್ವ ಕೊರತೆ (₹೧೩,೬೬೬,೨೦ ಕೋಟಿ) ಮತ್ತು ರಾಜಸ್ವ ಕೊರತೆ
                            (₹ ೧೩,೬೬೬.೨೩ ಕೋಟಿ)ಯಲ್ಲಿನ ವ್ಯತ್ಯಾಸವು ಪೂರ್ಣಾಂಕಗೊಳಿಸುವ ಕ್ರಿಯೆಯಿಂದಾಗಿರುತ್ತದೆ.  ಲೆಕ್ಕಚಾರ ಉದ್ದೇಶಕ್ಕಾಗಿ ₹೧೩,೬೬೬.೨೦ ಕೋಟಿಗಳನ್ನು ಪರಿಗಣಿಸಲಾಗಿರುತ್ತದೆ.

                        </h4>
                        <Tableb2k />
                        <h4>
                            Figures in brackets represent percentages (rounded) to total of each sub-heading<br></br>

                            # Includes expenditure on interest payment in respect of off-budget borrowings etc., under various service heads (₹ 1,292.26 crore borrowed through Special Purpose Vehicles- Social Services (₹ 156.67 crore) and Economic Services (₹  1,135.59 crore).<br></br>
                            <br></br>
                            * ಹಿಂದಿನ ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿಗಳಲ್ಲಿ ತೋರಿಸಿರುವ gÁMDAGದ ಅಂಕಿಗಳು 2017-18 (₹13,36,914 ಕೋಟಿ), 2018-19 (₹14,90,624 ಕೋಟಿ), (2019-20 ₹16,28,928 ಕೋಟಿ) ಮತ್ತು 2020-21 (₹18,03,609 ಕೋಟಿ).
                            <br></br>
                            ** ಪ್ಲವನತೆಯ ಅನುಪಾತವು ಮೂಲ ಅಸ್ಥಿರತೆಯ ಬದಲಾವಣೆಗೆ ¸ÀA§A¢ü¹zÀAvÉ ವಿತ್ತೀಯ ವ್ಯತ್ಯಯದ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವವನ್ನು ಅಥವಾ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡುವ ಮಟ್ಟವನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಉದಾಹರಣೆಗೆ ರಾಜಸ್ವ ಪ್ಲವನತೆಯು ೦.೪ರಲ್ಲಿದೆ ಎಂದರೆ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನವು ಶೇಕಡ ಒಂದರಷ್ಟು ಹೆಚ್ಚಾದಲ್ಲಿ ರಾಜಸ್ವ ಸ್ವೀಕೃತಿಗಳು ಶೇಕಡ ೦.೪ CAPÀUÀ¼ÀÀµÀÄÖ ಹೆಚ್ಚುತ್ತವೆ ಎಂಬುದನ್ನು ಸೂಚಿಸುತ್ತದೆ.
                            <br></br>
                            ^ ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ನೇ ಸಾಲುಗಳಿಗೆ ಅನುಕ್ರಮವಾಗಿ ₹೧೨,೪೦೭ ಕೋಟಿ ಮತ್ತು ₹೧೮,೧೦೯ ಕೋಟಿಗಳನ್ನು ಭಾರತ ಸರ್ಕಾರದಿಂದ ಜಿ.ಎಸ್.ಟಿ. ಪರಿಹಾರದ ಬದಲಾಗಿ ಸ್ವೀಕರಿಸಿದ ಸಾಲಗಳನ್ನು ಸೂಚಕವನ್ನು ನಿರ್ಧರಿಸುವಾಗ ಋಣಗಳೆಂದು ಪರಿಗಣಿಸಿಲ್ಲ.
                            <br></br>
                            ## ಪರಿಣಾಮಕಾರಿ ಸಾರ್ವಜನಿಕ ಋಣವು ₹೬೨,೫೩೧.೮೯ ಕೋಟಿ ಆಗಿರುತ್ತದೆ.  ಏಕೆಂದರೆ, ಭಾರತ ಸರ್ಕಾರವು ರಾಜ್ಯಗಳಿಗೆ ಋಣ ಸ್ವೀಕೃತಿಯಡಿ ಜಿ.ಎಸ್.ಟಿ. ಪರಿಹಾರದ ರೂಪದಲ್ಲಿ ನೀಡಲಾದ ಸಾಲಗಳು ₹೧೮,೧೦೮.೯೧ ಕೋಟಿಗಳನ್ನು ಋಣವೆಂದು ಹಣಕಾಸು ಆಯೋಗದ ಯಾವುದೇ ಮಾನದಂಡ ಸೂಚಿಸಿದ್ದರೂ ಅವುಗಳನ್ನು ರಾಜ್ಯದ ಋಣಗಳೆಂದು ನಿರ್ಧರಿಸಬಾರದೆಂದು ತೀರ್ಮಾನಿಸಿತ್ತು.

                            <br></br>
                            ^^ ಪರಿಣಾಮಕಾರಿ ಬಾಕಿ ಇರುವ ವಿತ್ತೀಯ ಜವಾಬ್ದಾರಿಯು ₹೪,೫೯,೭೪೦ ಕೋಟಿ ಆಗಿರುತ್ತದೆ.  ಏಕೆಂದರೆ, ಭಾರತ ಸರ್ಕಾರವು ರಾಜ್ಯಕ್ಕೆ
                            ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ನೇ ಸಾಲುಗಳಿಗೆ ಅನುಕ್ರಮವಾಗಿ ₹೧೨,೪೦೭ ಕೋಟಿ ಮತ್ತು ₹೧೮,೧೦೯ ಕೋಟಿಗಳನ್ನು ಋಣ ಸ್ವೀಕೃತಿಯಡಿ ಜಿ.ಎಸ್.ಟಿ. ಪರಿಹಾರದ ರೂಪದಲ್ಲಿ ನೀಡಲಾದ ಸಾಲಗಳನ್ನು ರಾಜ್ಯದ ಋಣವೆಂದು ಹಣಕಾಸು ಆಯೋಗದ ಯಾವುದೇ ಮಾನದಂಡ ಸೂಚಿಸಿದ್ದರೂ ಅವುಗಳನ್ನು ರಾಜ್ಯದ ಋಣವೆಂದು ನಿರ್ಧರಿಸಬಾರದೆಂದು ತೀರ್ಮಾನಿಸಿತ್ತು.
                        </h4>
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tableb3k />
                        <h4><i>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</i></h4>

                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tableb4k />
                        <h4>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h4>
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tableb5k />
                        <h4>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h4>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix2
