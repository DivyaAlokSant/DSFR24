import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c218 from '../../../../../Images/c218.png'
import k218 from '../../../../../Images/k218.png'
import c219 from '../../../../../Images/c219.png'
import k219 from '../../../../../Images/k219.png'
import c220 from '../../../../../Images/c220.png'
import k220 from '../../../../../Images/k220.png'
import ImageComponent from 'material-ui-image'
import Table35 from '../../../Tables/Chapter2/Table35'
import Table35kan from '../../../Tables/Chapter2kan/Table35'
import Table36kan from '../../../Tables/Chapter2kan/Table36'
import Table37 from '../../../Tables/Chapter2/Table37'
import Table37kan from '../../../Tables/Chapter2kan/Table37'
import Table3೭kan from '../../../Tables/Chapter2kan/Table3೭'
import Table38 from '../../../Tables/Chapter2/Table38'
import Table38kan from '../../../Tables/Chapter2kan/Table38'
import Table39 from '../../../Tables/Chapter2/Table39'
import Table39kan from '../../../Tables/Chapter2kan/Table39'
import Table40 from '../../../Tables/Chapter2/Table40'
import Table40kan from '../../../Tables/Chapter2kan/Table40'
import Table41kan from '../../../Tables/Chapter2kan/Table41'
import {
    Chart17,
    Chart18,
    Chart19
} from '../../../Charts/Chap2Charts'
import Subtitle from '../../../../Subtitle/Subtitle'
const Dsa = () => {

    const ctx = useContext(MyContext)
    // console.log(ctx.chapterTwo)



    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title>{ctx.chapterTwo.Second.para79}</Title>

                        {["para80", "para81", "para82"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table35 />
                        <h6>*Outstanding Public Debt is the sum of outstanding balances under the heads 6003-Internal Debt and 6004-Loans and Advances from Government of India.
                            <br></br>
                            #Net debt available to the State Government is calculated as excess of Public Debt receipts over Public Debt repayment and interest payments on Public Debt and does not include back-to-back loans received from GoI as GST compensation.
                            <br></br>
                            ^The back-to-back Loan (₹ 30,516 crore) received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.
                            <br></br>
                            ** Includes `30,516 crore of back to back loans received in lieu of GST compensation during 2020-21 and 2021-22.
                            <br></br>
                            Quantum Spread is Interest Spread as percentage of debt stock.  Interest Spread is the difference of rate of growth of GSDP and Average interest rate on Outstanding public debt. If the Quantum Spread together with primary deficit is zero, debt-GSDP ratio would be constant, or debt would stabilize eventually. If it is negative, debt-GSDP would be rising and in case if it is positive, debt-GSDP would eventually tally.
                            </h6>
                        {["para83", "para84"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                        {["para85", "para86"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li>
                                    {ctx.chapterTwo.Second[item]}
                                    </li>
                                </Para>)}   
                                <Para>    
                                    {ctx.chapterTwo.Second.para87}
                                </Para>    
                        {["para88", "para89", "para90", "para91", "para92", "para93"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li>
                                    {ctx.chapterTwo.Second[item]}
                                    </li>
                                </Para>)}    

                        <Subtitle>
                            {ctx.chapterTwo.Second["para95"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second["para96"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table37 />
                        {["para97", "para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                            <Subtitle>
                            {ctx.chapterTwo.Second["para99"]}
                        </Subtitle>
                        <Para>
                        {ctx.chapterTwo.Second["para100"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table38 />
                        <Para>
                                {ctx.chapterTwo.Second.para101.substring(0,)}
                                <span className="tooltip">
                                    <span className="tooltiptext">
                                    Irrigation (`14,495 crore), Co-operation (`1,208 crore), Finance (`1,026 crore), Power (`12,970 crore), Housing (`2,003 crore), Transport (`608 crore) and other sectors (`785 crore)
                                        </span>
                                    <sup>29</sup>
                                </span>

                       </Para>

                        {["para102", "para103"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.Second[item]}
                                </Para>)}
                                <Subtitle>
                                {ctx.chapterTwo.Second["para107"]}
                                </Subtitle>
                            <Para>
                                   {ctx.chapterTwo.Second["para108"]}
                            </Para>
                        
                        {["para109", "para110", "para111"].map((item, ind) =>
                                <Para key={ind / 10}>
                                  <li>  
                                    {ctx.chapterTwo.Second[item]}
                                  </li>
                                </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table39 />
                        {["para112", "para113", "para114", "para115"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table40 />
                        {["para116", "para117"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        {/* <Chart17 /> */}
                        <ImageComponent  src={c218} alt="chart23" aspectRatio={1 / 0.5} />
                        {["para118", "para119"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        {/* <Chart18 />
                        <Chart19 /> */}
                        <ImageComponent  src={c219} alt="chart23" aspectRatio={1 / 0.6} />
                        <ImageComponent  src={c220} alt="chart23" aspectRatio={1 / 0.7} />
                        {["para120", "para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter2kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title>{ctx.chapter2kannada.Content.para282}</Title>

                        {["para264", "para265", "para266"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table3೭kan />
                        <h3>* ಬಾಕಿಯಿರುವ ಸಾರ್ವಜನಿಕ ಋಣವು 6003-ಆಂತರಿಕ ಋಣ ಮತ್ತು 6004-ಭಾರತ ಸರ್ಕಾರದಿಂದ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳ ಅಡಿಯಲ್ಲಿ ಉಳಿದಿರುವ ಮೊತ್ತವಾಗಿದೆ.
                            <br></br>
                            #	 ರಾಜ್ಯ ಸರ್ಕಾರಕ್ಕೆ ಲಭ್ಯವಿರುವ ನಿವ್ವಳ ಸಾಲವನ್ನು, ಸಾರ್ವಜನಿಕ ಸಾಲ ಮರುಪಾವತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಾಲದ ಮೇಲಿನ ಬಡ್ಡಿ ಪಾವತಿಗಳ ಮೇಲಿನ ಸಾರ್ವಜನಿಕ ಸಾಲ ಸ್ವೀಕೃತಿಗಳ ಹೆಚ್ಚುವರಿ ಎಂದು ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ ಮತ್ತು ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲಗಳನ್ನು ಒಳಗೊಂಡಿರುವುದಿಲ್ಲ.
                            <br></br>
                            ^  ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರದ ಬದಲಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವನ್ನು (₹12,407 ಕೋಟಿ) ಸೂಚಕವನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪರಿಗಣಿಸಲಾಗಿಲ್ಲ.
                            <br></br>
                            ** ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ  ಸರಕು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರದ ಬದಲಾಗಿ ಸ್ವೀಕರಿಸಿದ `೩೦,೫೧೬ ಕೋಟಿ ಬ್ಯಾಕ್‌-ಟು-ಬ್ಯಾಕ್‌ ಸಾಲವನ್ನು ಒಳಗೊಂಡಿದೆ.                       
                        </h3>
                        {["para267", "para268"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para269","para270"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}
                        
                        <Para>
                            {ctx.chapter2kannada.Content.para271}
                        </Para>    
                        {["para272", "para273","para274","para275","para276","para277",].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para278}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para279}
                        </Para> 
                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <Table38kan />
                        <h3>* ಬಾಕಿಯಿರುವ ಸಾರ್ವಜನಿಕ ಋಣವು 6003-ಆಂತರಿಕ ಋಣ ಮತ್ತು 6004-ಭಾರತ ಸರ್ಕಾರದಿಂದ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳ ಅಡಿಯಲ್ಲಿ ಉಳಿದಿರುವ ಮೊತ್ತವಾಗಿದೆ.
                            <br></br>
                            * 2020-21 ಮತ್ತು 2021-22ರ ಅವಧಿಯಲ್ಲಿ ಒಟ್ಟು ಸಾಲಗಳು ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲಗಳನ್ನು ಒಳಗೊಂಡಿದ್ದವು.
                             ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ 2020-21 ಮತ್ತು 2021-22ರ ಅವಧಿಯಲ್ಲಿ ಅನುಕ್ರಮವಾಗಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್
                              ಸಾಲವಾಗಿ ನೀಡಲಾದ `೧೨,೪೦೭ ಕೋಟಿ ಮತ್ತು  `1೮,೧೦೯ ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು,
                               ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ 
                               ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿತು.
                        </h3>


                        {["para280", "para281"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para282}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para283}
                        </Para>

                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <Table39kan />
                        <h3>
                            ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>

                        {["para284", "para285", "para286"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para287}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para288}
                        </Para>

                        {["para289","para290","para291"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}
                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <Table40kan />
                        <h3>
                            ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>


                        {["para292", "para293", "para294", "para295"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <Table41kan />
                        <h3>
                            ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>


                        {["para296", "para297"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}   

                        <ImageComponent  src={k218} alt="chart23" aspectRatio={1 / 0.5} />

                        {["para298", "para299"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}    

                        <ImageComponent  src={k219} alt="chart23" aspectRatio={1 / 0.6} />
                        <ImageComponent  src={k220} alt="chart23" aspectRatio={1 / 0.6} />
                        {["para300", "para301", "para302"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}






                        

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Dsa