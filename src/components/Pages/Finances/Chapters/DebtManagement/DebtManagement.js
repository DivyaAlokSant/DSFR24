import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table30 from '../../../Tables/Chapter2/Table30'
import k214 from '../../../../../Images/k214.png'
import c215 from '../../../../../Images/c215.png'
import k215 from '../../../../../Images/k215.png'
import c216 from '../../../../../Images/c216.png'
import k216 from '../../../../../Images/k216.png'
import c217 from '../../../../../Images/c217.png'
import c218 from '../../../../../Images/c218.png'
import k217 from '../../../../../Images/k217.png'
import ImageComponent from 'material-ui-image'

import Table31 from '../../../Tables/Chapter2/Table31'
import Table31kan from '../../../Tables/Chapter2kan/Table31'
import Table32 from '../../../Tables/Chapter2/Table32'
import Table33 from '../../../Tables/Chapter2/Table33'
import Table33kan from '../../../Tables/Chapter2kan/Table33'
import Table34 from '../../../Tables/Chapter2/Table34'
import Table35 from '../../../Tables/Chapter2/Table35'
import Table36 from '../../../Tables/Chapter2/Table36'
import Table34kan from '../../../Tables/Chapter2kan/Table34'
import Table35kan from '../../../Tables/Chapter2kan/Table35'
import Table36kan from '../../../Tables/Chapter2kan/Table36'
import Table37akan from '../../../Tables/Chapter2kan/Table37'
import Subtitle from '../../../../Subtitle/Subtitle'

const DebtManagement = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/publicaccount" forward="/finances/dsa" />
                        <Title>
                            {ctx.chapterTwo.para281}
                        </Title>
                        <Para >
                            {ctx.chapterTwo.para282}
                        </Para>
                        <ImageComponent src={c215} alt="chart2.14" aspectRatio={1 / 0.5} />
                       
                    {["para283","para284"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  
                    <Subtitle>
                          <i> 
                           {ctx.chapterTwo["para285"]}
                           </i> 
                    </Subtitle>
                    {["para286","para287"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table30 />
                        <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                            ^ Effective Loans and Advances for GoI would be₹14,210 crore as on year ending 2020-21, ₹14,869 crore as on year ending 2021-22 and ₹18,623 crore as on year ending 2022-23 as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore and ₹18,109 crore given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission.<br></br>
                            * Effective Outstanding Fiscal Liabilities would be ₹4,03,519 crore, ₹4,59,740 crore and ₹5,22,847 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore in 2020-21 and ₹ 18,109 crore in 2021-22 given to the state as back-to-back loan under Debt Receipts respectively would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.
                            </i>
                        </h4>

                           
                    {["para288","para289"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}
                           <ImageComponent src={c216} alt="chart2.14" aspectRatio={1 / 0.5} />
                           <ImageComponent src={c217} alt="chart2.14" aspectRatio={1 / 0.5} />
                       
                           <Para>
                            {ctx.chapterTwo.Para290}
                        </Para>

                    <Subtitle>
                           
                           {ctx.chapterTwo["para291"]}
                           
                    </Subtitle>
                    {["para292","para293"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                        <Table31 />
                    
                    <Para >
                        {ctx.chapterTwo.para294}
                    </Para>

                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                        <Table32 />
                    <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                            </i>
                    </h4>

                    {["para295","para296"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)} 

                      <Table33 />     

                    {["para297","para298","para299","para300"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}         
                    <Subtitle>
                         <i> 
                           {ctx.chapterTwo["para301"]}
                        </i> 
                    </Subtitle>
                    <Para >
                        {ctx.chapterTwo.para302}
                    </Para>

                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                        <Table34 />
                    <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                            *All these figures are net disbursement/outflows during the year.<br></br>
                            ^ The effective Loans and Advances from GoI would be₹1,707 crore and ₹2,070 crore by deducting the GST compensation of 12,407 crore for 2020-21 and ₹18,109 crore for 2021-22 received as back to back loans.
                            </i>
                    </h4>

                    <Para >
                            {ctx.chapterTwo.para303}
                    </Para>

                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                        <Table35 />
                    <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                            </i>
                    </h4>

                    {["para304"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}
                    <Subtitle>
                         <i> 
                           {ctx.chapterTwo["para305"]}
                        </i> 
                    </Subtitle>
                    <Para >
                            {ctx.chapterTwo.para306}
                    </Para>

                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                        <Table36 />
                    <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                            </i>
                    </h4>

                    <ImageComponent src={c218} alt="chart2.14" aspectRatio={1 / 0.5} />
                       

                    <Para >
                            {ctx.chapterTwo.para307}
                    </Para>

                    
                        
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
                        <FloatingActionButtons back="/finances/publicaccount" forward="/finances/dsa" />
                        <Title>{ctx.chapter2kannada.Content.para237}</Title>
                        <Para>
                            {ctx.chapter2kannada.Content.para238}
                        </Para>
                        {/* <Chart14 />
                        <h6> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            
                        </h6> */}
                        <ImageComponent  src={k214} alt="chart23" aspectRatio={1 / 0.55} />
                        <h3>*ಸಾಲ-ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಅನುಪಾತವನ್ನು ಲೆಕ್ಕ ಮಾಡಲು ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ 
                            ಪರಿಹಾರದ ಬದಲಿಗೆ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವನ್ನು  (`೧೨,೪೦೭ ಕೋಟಿ ೨೦೨೦-೨೧ರಲ್ಲಿ ಮತ್ತು 
                            `೧೮,೧೦೯ ಕೋಟಿ ೨೦೨೧-೨೨ರಲ್ಲಿ) ಪರಿಗಣಿಸಲಾಗಿಲ್ಲ.
                        </h3>
                        {["para239", "para240"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para241}
                            </i>
                        </Subtitle>    
                        {[ "para242", "para243"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table31kan />
                        <h3>  ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            *  ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ  ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ `12,407 ಕೋಟಿ ಮತ್ತು `೧೮,೧೦೯ ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಬಾಕಿ ಇರುವ ಭಾರತ ಸರ್ಕಾರದ ಸಾಲಗಳು `೧೪,೮೬೯ ಕೋಟಿಗಳಾಗಿದೆ.
                            <br>
                            </br>
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para244}
                        </Para>
                        {["para245","para246"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}
                        {/* <Chart15 /> */}
                        <ImageComponent  src={k215} alt="chart23" aspectRatio={1 / 0.55} />
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>
                        <h3>ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ  ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ 
                            `12,407 ಕೋಟಿ ಮತ್ತು `೧೮,೧೦೯ ಕೋಟಿ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ 
                            ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚದ ಇಲಾಖೆಯು 
                            ನಿರ್ಧರಿಸಿರುವುದರಿಂದ, ಪರಿಣಾಮಕಾರಿ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು `೧೪,೮೬೯ ಕೋಟಿಗಳಾಗುವುದರಿಂದ ಒಟ್ಟು ಋಣಗಳು 
                            `4,೫೯,೭೪೦  ಕೋಟಿಗಳಾಗುವಲ್ಲಿ ಪರಿಣಮಿಸುತ್ತದೆ.</h3>
                        <ImageComponent  src={k216} alt="chart23" aspectRatio={1 / 0.5} />
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>
                        {/* <Chart16 />
                        <h6>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h6>
                         */}
                        {["para247","para248"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        <Para>
                            <h3>
                            {ctx.chapter2kannada.Content.para249}
                            </h3>
                        </Para>  
                        
                        {["para250", "para251", "para252"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table33kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>


                        {["para253", "para254"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table34kan />

                        
                        {["para255", "para256"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para257}
                            </i>
                        </Subtitle> 

                        <Para>
                            {ctx.chapter2kannada.Content.para258}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table35kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>
                        <h3> *  ಈ ಅಂಕೆಗಳು ವರ್ಷದ ನಿವ್ವಳ ವಿತರಣೆಗಳು/ಹೊರಹರಿವು (ವೆಚ್ಚಗಳು)</h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para259}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table36kan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para260}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para261}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para262}
                        </Para>

                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                         <Table37akan /> 
                        <h3>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h3>
                        <ImageComponent  src={k217} alt="chart23" aspectRatio={1 / 0.6} />
                        <Para>
                            {ctx.chapter2kannada.Content.para263}
                        </Para>




                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default DebtManagement