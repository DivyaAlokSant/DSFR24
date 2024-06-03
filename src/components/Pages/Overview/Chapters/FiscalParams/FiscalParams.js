import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Subtitle from "../../../../Subtitle/Subtitle"
import Table4 from '../../../Tables/Chapter1/Table4'
import Table4kan from '../../../Tables/Chapter1kan/Table4'


import c14 from '../../../../../Images/c14.png'
import c15 from '../../../../../Images/c15.png'
import ImageComponent from 'material-ui-image'
import Table3aa from '../../../Tables/Chapter1/Table3aa'
import CustomTable from '../../../../CustomTable/CustomTable'

import k4 from '../../../../../Images/k4.png'
import k5 from '../../../../../Images/k5.png'
const FiscalParams = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/snapshot-assets" forward="/overview/fisc-situation" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para46}
                        </Title>
                        {["Para47", "Para48"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterOne.Profile["Para49"]}
                        </Subtitle>

                        {["Para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Table3aa />
                        <h4>
                        Source: Recommendations of 15th FC, Annual Financial Statement, Overview of Budget 2022-23 and Finance Accounts  <br></br>
                        </h4>
                        <h4>
                        Note: Deficit figures have been shown in minus.
                        </h4>
                        <h4>
                        *  Calculated on the basis of GSDP figures of ₹21,81,217crore as per Ministry of Finance, GOI.
                        </h4>
                        <h4>
                        ^ The back-to-back Loan (₹ 30,516 crore) received from GoI during 2020-21 and 2021-22 in lieu of GST     compensation has not been considered as Debt for working out the indicator.
                        </h4>
                        <Para>
                          
                        </Para>

                        {["Para50a","Para50b"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Title>
                        Chart 1.4: Trends in fiscal parameters                    
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c14} color ="#ffffff00" />
                        <h4>
                        Source: Finance Accounts  
                        </h4>
                        <Title>
                        Chart 1.5: Trends in Surplus/Deficit relative to GSDP                    
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c15} color ="#ffffff00" />
                        <h4>
                        Source: Directorate of Economics and Statistics, GoK, and Finance Accounts 
                        </h4>
                        {/* <Chart5 />
                        <Chart6 /> */}

                        <Para>
                            {ctx.chapterOne.Profile.Para51}

                            {/* <span className="tooltip">
                                {ctx.chapterOne.Profile.Para51.substring(91, 99)}
                                <span className="tooltiptext">
                                    Growth rate of Revenue Receipts and Revenue Expenditure for 2020-21 is (-) 10.67 per cent and 1.03 per cent respectively. The difference between these two is (-) 9.64 per cent.
                                </span>
                                <sup></sup>
                            </span>
                            {ctx.chapterOne.Profile.Para51.substring(99,)} */}

                        </Para>

                        <Subtitle>
                            {ctx.chapterOne.Profile["Para52"]}
                        </Subtitle>

                        {["Para53"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table4 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T4F1}
                                <br></br>
                                * Effective Loans and Advances for GoI would be `14,869 crore as the Department of Expenditure, GoI had decided that GST compensation of `12,407 crore and `18,109 crore  given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>

                        {["Para54","Para54a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/snapshot-assets" forward="/overview/fisc-situation" />
                        <Title >
                            {ctx.chapter1kannada.Content.para53}
                        </Title>
                       
                        {["para54","para55"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para56}
                        </Subtitle>
                        {["para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <CustomTable title={"ಕೋಷ್ಠಕ-೧.೪: ೨೦೨೨-೨೩ರ ಅವಧಿಗೆ ಗುರಿಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ಪ್ರಮುಖ ಹಣಕಾಸಿನ ಮಿತಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಸಾಧನೆಗಳು"}


                           columns={ctx.tables1kan.Table4}
                               data={ctx.tables1kan.Table4} />
                         <h4 className='footnote'>
                            <i>
                            ಆಕರ: ೧೫ನೇ ಹಣಕಾಸು ಆಯೋಗದ ಶಿಫಾರಸುಗಳು, ವಾರ್ಷಿಕ ಹಣಕಾಸು ತ:ಖ್ತೆ,  ೨೦೨೨-೨೩ರ ಆಯವ್ಯಯ ಸಾರಾಂಶ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                           ಟಿಪ್ಪಣಿ : ಕೊರತೆಯ ಅಂಕಿಗಳನ್ನು ಋಣಾತ್ಮಕವಾಗಿ ತೋರಿಸಲಾಗಿದೆ
 <br></br>
                     *  ಭಾರತ ಸರ್ಕಾರದ ಹಣಕಾಸು ಮಂತ್ರಾಲಯದ ₹21,81,217 ಕೋಟಿಯ ಜಿಎಸ್‌ಡಿಪಿ ಅಂಕಿಅಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ.
                     ^ ಸೂಚಕಗಳನ್ನು ಲೆಕ್ಕಹಾಕುವಾಗ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆಯ ಅನುಷ್ಠಾನದಿಂದಾದ ಕೊರತೆಯ ಪರಿಹಾರವಾಗಿ 2020-21 ಮತ್ತು 2021-22ರಲ್ಲಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್‌ ಸಾಲವನ್ನು (`೩೦,೫೧೬ ಕೋಟಿ) ಋಣವೆಂದು ಪರಿಗಣಿಸಿಲ್ಲ.

                            </i>
                        </h4>

                        



                         {["para58","para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={k4} color ="#ffffff00" />
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={k5} color ="#ffffff00" />
                          {["para6"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <Subtitle>
                            {ctx.chapter1kannada.Content.para60}
                        </Subtitle>
                        {["para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <h3 className='headnote'>
                         (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                       <CustomTable title={"ಕೋಷ್ಟಕ-೧.೫: ವಿತ್ತೀಯ ಹೊಣೆಗಾರಿಕೆಗಳಲ್ಲಿ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನಕ್ಕೆ ಅದರ ಅನುಪಾತ"}


                          columns={ctx.tables1kan.Table5}
                         data={ctx.tables1kan.Table5} />

                         {["para62","para63"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default FiscalParams
