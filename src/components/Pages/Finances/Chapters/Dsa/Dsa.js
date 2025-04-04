import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'

import c219 from '../../../../../Images/c219.png'

import c220 from '../../../../../Images/c220.png'

import ImageComponent from 'material-ui-image'

import Table37 from '../../../Tables/Chapter2/Table37'
import Table3೭kan from '../../../Tables/Chapter2kan/Table3೭'
import Table38 from '../../../Tables/Chapter2/Table38'
import Table38kan from '../../../Tables/Chapter2kan/Table38'
import Table39kan from '../../../Tables/Chapter2kan/Table39'
import Table40kan from '../../../Tables/Chapter2kan/Table40'
import Table41kan from '../../../Tables/Chapter2kan/Table41'
import Subtitle from '../../../../Subtitle/Subtitle'
import CustomTable from '../../../../CustomTable/CustomTable'
import c51 from '../../../../../Images/c51.png'
import c52 from '../../../../../Images/c52.png'
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
                        <Title>{ctx.chapterTwo.para308}</Title>
                        {["para309","para310","para311","para312"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                          
                        <Table37 />
                    <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts<br></br>
                           
                            <br></br>
                            *Outstanding Public Debt is the sum of outstanding balances under the heads 6003-Internal Debt and 6004-Loans and Advances from Government of India and Off-Budget borrowings.
                                #For the years 2020-21 and 2021-22, Net debt available to the State Government is calculated as excess of Public Debt receipts over Public Debt repayment and interest payments on Public Debt and does not include back-to-back loans received from GoI as GST compensation.  
                                <br></br>
                                ^The back-to-back Loan (₹ 30,516 crore) received from GoI in lieu of GST compensation has not been considered as Debt for working out the indicator.
                                <br></br>
                                ** Effective Outstanding Public Debt would be ₹3,13,771 crore, ₹3,60,593 crore and ₹3,89,823 crore as the Department of Expenditure, GoI had decided that GST compensation of ₹12,407 crore in 2020-21 and ₹ 18,109 crore in 2021-22 given to the state as back-to-back loan under Debt Receipts respectively would not be treated as debt of the state for any norms which may be prescribed by the Finance Commission.   
                                <br></br>
                                ## Quantum Spread is Interest Spread as percentage of debt stock.  Interest Spread is the difference of rate of growth of GSDP and Average interest rate on Outstanding public debt. If the Quantum Spread together with primary deficit is zero, debt-GSDP ratio would be constant, or debt would stabilize eventually. If it is negative, debt-GSDP would be rising and in case if it is positive, debt-GSDP would eventually tally.      
                            
                            </i>
                    </h4>

                           <Para >
                               {ctx.chapterTwo["para313"]}
                           </Para>   
                        {["para314","para315","para316","para317","para319"].map((item, ind) =>
                           <Para key={ind / 10}>
                           <li>
                               {ctx.chapterTwo[item]}
                            </li>
                           </Para>)}  
                           <Subtitle>
                         <i> 
                           {ctx.chapterTwo["para320"]}
                        </i> 
                    </Subtitle>

                           {["para321"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

{/* 
                           <Table38 /> */}
                           
                            
                           <CustomTable title={"Table 2.44: Public Debt Sustainability-real growth and real interest"}
                            
                            columns={ctx.tables2.Table38a}
                            data={ctx.tables2.Table38a} />
                            <h4 className='footnote'>
                
                •	Real economic growth rate has been calculated for real GSDP (i.e., at constant prices*). 
                        
                       
                      
                </h4>
                <h4 className='footnote'>
                •	Real interest rate is calculated as average interest rate on fiscal liabilities minus inflation. Average inflation** has been obtained from RBI.  
                </h4>
        
                              <h4 className='footnote'>
                <i>
                * Information furnished by Directorate of Economics and Statistics
                ** As published by RBI on November 19, 2022 and Handbook on statistics of Indian States
                  
                </i>
        </h4>
        {["para322"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}
                           <Subtitle>
                           <i>
                            {ctx.chapterTwo["para323"]}
                            </i> 
                    </Subtitle>

                        {["para323a","para324"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                           
                    
                    {["para325"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  
                           <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                     <CustomTable title={"Table 2.45:  Utilisation of borrowed funds"}
                            
                            columns={ctx.tables2.Table38b}
                            data={ctx.tables2.Table38b} />
                              <h4 className='footnote'>
                <i>
                Source: Finance Accounts
                   
                </i>
        </h4>  
        <h4 className='footnote'>
                <i>
                * During 2020-21 and 2021-22, total borrowings are inclusive of back-to-back loan. GoI had decided that GST compensation of ₹12,407 crore and ₹18,109 crore given to the State as back-to-back loan during 2020-21 and 2021-22 respectively under Debt Receipt would not be treated as debt of the State for any norms which may be prescribed by the Finance Commission.
                </i>
        </h4>        

                    {["para326"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  
                    <Subtitle>
                           <i>
                            {ctx.chapterTwo["para327"]}
                            </i> 
                    </Subtitle>
                    {["para328"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}
                           <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                     <CustomTable title={"Table 2.46: Guarantees given by the State Government"}
                            
                            columns={ctx.tables2.Table38c}
                            data={ctx.tables2.Table38c} />
                              <h4 className='footnote'>
                <i>
                Source: Finance Accounts
                   
                </i>
        </h4>    
                    <Para tooltips={[
                     { word: "sectors[18]", tooltip:"Irrigation (₹14,475 crore), Co-operation (₹1,374 crore), Finance (₹695 crore), Power (₹18,179 crore), Housing (₹1,900 crore), Transport (₹911 crore) and other sectors (₹728 crore)" },
                            
                        ]}>
                         {ctx.chapterTwo.para329}
                        </Para>

                    {["para330","para331","para332"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                      
                   
                   {["para333","para334"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  

                 <Para tooltips={[
                     { word: "availed[19]", tooltip:"As per the annexure to Statement Number 2, Finance Accounts Vol 1." },
                            
                        ]}>
                         {ctx.chapterTwo.para335}
                        </Para>


                        {["para336"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                           </Para>)}  
                           <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                     <CustomTable title={"Table 2.47: Cash Balances and their investment"}
                            
                            columns={ctx.tables2.Table38d}
                            data={ctx.tables2.Table38d} />
                              <h4 className='footnote'>
                <i>
                Source: Finance Accounts
                   
                </i>
        </h4>    

                    {["para337","para338","para338a","para339","para340"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                    </Para>)}  
                    <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                     <CustomTable title={"Table 2.48: Cash Balance Investment Account (Major Head-8673)"}
                            
                            columns={ctx.tables2.Table38e}
                            data={ctx.tables2.Table38e} />
                              <h4 className='footnote'>
                <i>
                Source: Finance Accounts
                   
                </i></h4>
                    {["para341","para342"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                    </Para>)} 

                    <ImageComponent src={c219} alt="chart2.19" aspectRatio={1 / 0.75} />
                      

                    {["para343"].map((item, ind) =>
                           <Para key={ind / 10}>
                               {ctx.chapterTwo[item]}
                    </Para>)} 
                    <ImageComponent src={c220} alt="chart2.20" aspectRatio={1 / 0.5} />
                    
                    <Para >
                            {ctx.chapterTwo.para344}
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
                        <FloatingActionButtons back="/finances/debtmanagement" forward="/finances/conclusion" />
                        <Title>{ctx.chapter2kannada.Content.para311}</Title>

                        {["para312","para313","para314","para315"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.42: ಋಣ ಸಹಿಷ್ಣುತೆ ಸೂಚಕಗಳ ಪ್ರವೃತ್ತಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table36}
                            data={ctx.tables2kan.Table36} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                     {["para316","para317","para318","para319","para320","para321"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para322}
                           </Subtitle>
                           {["para323"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.43: ಬಡ್ಡಿ ದರ, ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಬೆಳವಣಿಗೆ ದರ ಮತ್ತು ಪ್ರಾಥಮಿಕ ಆಯವ್ಯಯ ಶಿಲ್ಕನ್ನು ಅವಲಂಬಿಸಿ ಸಾರ್ವಜನಿಕ ಋಣದ ಚಲನಶೀಲತೆ"}
                            
                            columns={ctx.tables2kan.Table37a}
                            data={ctx.tables2kan.Table37a} />
                             
                            {["para324"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.44: ಸಾರ್ವಜನಿಕ ಋಣ ಸಹಿಷ್ಣುತೆ-ವಾಸ್ತವಿಕ ವೃದ್ಧಿ ಮತ್ತು ವಾಸ್ತವಿಕ ಬಡ್ಡಿ "}
                            
                            columns={ctx.tables2kan.Table38}
                            data={ctx.tables2kan.Table38} />  
                            {["para325","para326"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para327}</i>
                           </Subtitle>
                           {["para328"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.45: ಸಾಲ ಪಡೆದ ಹಣದ ಬಳಕೆ"}
                            
                            columns={ctx.tables2kan.Table39}
                            data={ctx.tables2kan.Table39} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            {["para329"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para330}</i>
                           </Subtitle>
                           {["para331"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.46: ರಾಜ್ಯ ಸರ್ಕಾರವು ನೀಡಿದ ಖಾತರಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table40}
                            data={ctx.tables2kan.Table40} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            {["para332","para333","para334"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para335}</i>
                           </Subtitle>
                           {["para336","para337","para338","para339"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.೪೭: ನಗದು ಶಿಲ್ಕುಗಳು ಮತ್ತು ಅವುಗಳ ಹೂಡಿಕೆ"}
                            
                            columns={ctx.tables2kan.Table41}
                            data={ctx.tables2kan.Table41} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            {["para340","para341","para342","para343","para344"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.48: ನಗದು ಶಿಲ್ಕು ಹೂಡಿಕೆ ಲೆಕ್ಕ (ಪ್ರಧಾನ ಲೆಕ್ಕಶೀರ್ಷಿಕೆ-೮೬೭೩)"}
                            
                            columns={ctx.tables2kan.Table42}
                            data={ctx.tables2kan.Table42} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                         

                            {["para345","para346"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                            <ImageComponent  src={c51} alt="chart23" aspectRatio={1 / 1} />                      
                            {["para347"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c52} alt="chart23" aspectRatio={1 / 1} />                      




                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Dsa