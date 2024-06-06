import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table30 from '../../../Tables/Chapter2/Table30'

import c215 from '../../../../../Images/c215.png'

import c216 from '../../../../../Images/c216.png'


import c217 from '../../../../../Images/c217.png'
import c218 from '../../../../../Images/c218.png'

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
import c47 from '../../../../../Images/c47.png'
import CustomTable from '../../../../CustomTable/CustomTable'
import c48 from '../../../../../Images/c48.png'
import c49 from '../../../../../Images/c49.png'
import c50 from '../../../../../Images/c50.png'

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
                        <Title>{ctx.chapter2kannada.Content.para283}</Title>
                       
                        {["para284"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c47} alt="chart23" aspectRatio={1 / 1} />                      
                 {["para285","para286"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para287}</i>
                           </Subtitle>
                           {["para288","para289"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.3೬: ಘಟಕವಾರು ಸಾಲದ ಪ್ರವೃತ್ತಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table30}
                            data={ctx.tables2kan.Table30} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>
                            {["para290","para291"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c48} alt="chart23" aspectRatio={1 / 1} />                      
                            <ImageComponent  src={c49} alt="chart23" aspectRatio={1 / 1} />                      

                            {["para292"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para293}</i>
                           </Subtitle>
                           {["para294","para295"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.3೭: ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಪ್ರವೃತ್ತಿ"}
                            
                            columns={ctx.tables2kan.Table31}
                            data={ctx.tables2kan.Table31} />
                            {["para296"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.3೭(ಎ): ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಘಟಕವಾರು ಸ್ಥಿತಿ"}
                            
                            columns={ctx.tables2kan.Table31a}
                            data={ctx.tables2kan.Table31a} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4>

                            {["para297","para298"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-೨.೩೮: ವಿತ್ತೀಯ ಸೂಚಕಗಳ ಮೇಲೆ ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲಗಳ ಪ್ರಭಾವ"}
                            
                            columns={ctx.tables2kan.Table32}
                            data={ctx.tables2kan.Table32} />

                            {["para299","para300","para301","para302","para303"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para304}</i>
                           </Subtitle>
                           {["para305"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.3೯: ವಿತ್ತೀಯ ಕೊರತೆಯ ಅಂಶಗಳು ಮತ್ತು ಅದರ ಹಣಕಾಸು ವ್ಯವಸ್ಥೆ"}
                            
                            columns={ctx.tables2kan.Table33}
                            data={ctx.tables2kan.Table33} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4>

                            {["para306"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.೪೦: 202೨-2೩ರ ಅವಧಿಯಲ್ಲಿ ವಿತ್ತೀಯ ಕೊರತೆಗೆ ಹಣಕಾಸು ಒದಗಿಸುವ ಘಟಕಗಳ ಅಡಿಯಲ್ಲಿ ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವಿತರಣೆಗಳು"}
                            
                            columns={ctx.tables2kan.Table34}
                            data={ctx.tables2kan.Table34} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4>

                            {["para307"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para308}</i>
                           </Subtitle>
                           {["para309"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.೪೧: ಸಾರ್ವಜನಿಕ ಋಣದ ಅವಧಿ ಪೂರ್ಣತೆಯ ಚಿತ್ರಣ"}
                            
                            columns={ctx.tables2kan.Table35}
                            data={ctx.tables2kan.Table35} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                <ImageComponent  src={c50} alt="chart23" aspectRatio={1 / 1} />                      

                            {["para310"].map((item, ind) =>
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

export default DebtManagement