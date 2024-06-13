import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c23 from '../../../../../Images/c23.png'
import ck13 from '../../../../../Images/ck13.png'
import ck14 from '../../../../../Images/ck14.png'
import ckt12 from '../../../../../Images/ckt12.png'
import ckt13 from '../../../../../Images/ckt13.png'
import c16 from '../../../../../Images/c16.png'
import c62 from '../../../../../Images/c62.png'



import c24 from '../../../../../Images/c24.png'

import c25 from '../../../../../Images/c25.png'



import ImageComponent from 'material-ui-image'
import Table3 from '../../../Tables/Chapter2/Table3'
import Table9 from '../../../Tables/Chapter2/Table9'
import Table10 from '../../../Tables/Chapter2/Table10'
import Table11 from '../../../Tables/Chapter2/Table11'
import Table12 from '../../../Tables/Chapter2/Table12'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'

import Table5 from '../../../Tables/Chapter2/Table5'
import Table6 from '../../../Tables/Chapter2/Table6'
import Table7 from '../../../Tables/Chapter2/Table7'
import Table8 from '../../../Tables/Chapter2/Table8'
import Subtitle from '../../../../Subtitle/Subtitle'

import Table3kan from '../../../Tables/Chapter2kan/Table3'

import Table6kan from '../../../Tables/Chapter2kan/Table6'
import Table7kan from '../../../Tables/Chapter2kan/Table7'
import Table8kan from '../../../Tables/Chapter2kan/Table8'
import Table9kan from '../../../Tables/Chapter2kan/Table9'
import Table10kan from '../../../Tables/Chapter2kan/Table10'
import Table11kan from '../../../Tables/Chapter2kan/Table11'
import Table4 from '../../../Tables/Chapter2/Table4'
import ck12 from '../../../../../Images/ck12.png'
import c26a from '../../../../../Images/c26a.png'
import c27a from '../../../../../Images/c27a.png'
import t24a from '../../../../../Images/t24a.png'
import c63 from '../../../../../Images/c63.png'
import CustomTable from '../../../../CustomTable/CustomTable'

const Resources = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapterTwo.Para6}</Title>
                        <Para>
                            {ctx.chapterTwo.Para7}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Para8}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para9}
                        </Para>

                        <ImageComponent src={c23} alt="chart23" aspectRatio={1 / 0.8} />
                       
                      

                        
                        <Subtitle>
                            {ctx.chapterTwo.Para10}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para10a}
                        </Para>
                        <Table3 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts and Economic Survey of Gok<br></br>
                            </i>
                            [1]Buoyancy ratio indicates the elasticity or degree of responsiveness of a fiscal variable with respect to a given change in the base variable.  For instance, revenue buoyancy with respect to GSDP at 0.63 implies that Revenue Receipts tend to increase by 0.63 percentage points, if the GSDP increases by one per cent.
                            <br></br>
                            [2]Revenue buoyancy refers to the growth rate of Revenue Receipts to growth rate of GSDP.
                            <br></br>
                            [3]Own revenue buoyancy refers to growth rate of Tax Revenue and non-Tax revenue to growth rate of GSDP.  It excludes devolution from GoI.
                        </h4>
                        {/* <Chrt2 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts and Economic Survey of Gok
                            </i>
                        </h4>
                        <Chrt3 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        <ImageComponent src={c24} alt="chart23" aspectRatio={1 / 0.5} />
                        <ImageComponent src={c25} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para11}
                        </Para>
                        {["Para12", "Para13", "Para14", "Para15", "Para15a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para16}
                        </Subtitle>
                        {["Para17", "Para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterTwo.Para19}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para21}
                        </Para>
                        {/* <Chrt4 /> */}
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <ImageComponent  src={c26a} alt="chart23" aspectRatio={1 / 1} />                      
                        <ImageComponent  src={c27a} alt="chart23" aspectRatio={1 / 1} />                      
                        <Para>
                        {ctx.chapterTwo.Para21a}
                        </Para>
                        <ImageComponent src={t24a} alt="table24" aspectRatio={1 / 0.6} />
                        
                        {/* <Table4 /> */}
                        
                        {["Para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para24}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para25}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table5 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                      

                        <Para>
                            {ctx.chapterTwo.Para27.substring(0, 356)}

                            <span className="tooltip">
                                {ctx.chapterTwo.Para27.substring(356, 358)}
                                <span className="tooltiptext">
                                Under Major Heads 0005 – CGST (₹9,786.19 crore), 0006 – SGST (₹61,403.30 crore) and 0008 – IGST (Nil).
                                </span>
                                <sup>8</sup>
                            </span>

                            {ctx.chapterTwo.Para27.substring(357,)}
                        </Para>

                        {["Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            
                                              
                        <Subtitle>
                            {ctx.chapterTwo["Para29"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para30}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para31"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para32}
                        </Para>
                        <Table6 />
                        <h4 className='footnote'>
                            <i>
                                Source: Departmental information
                                
                            </i>
                        </h4>
                        <Subtitle>
                            {ctx.chapterTwo.Para33}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para34}
                        </Para>
                        

                        <Table7 />
                        <h4 className='footnote'>
                            <i>
                            Source: Departmental information
                            </i>
                           

                        </h4>
                     
                        <h4 className='footnote'>
                        <i>
                            *Does not include the case for the year 2022-23 as these would be due for assessment in the next financial year.
                            </i>
                        </h4>
                         

                        <Subtitle>
                            {ctx.chapterTwo["Para36"]}
                        </Subtitle>
                        {["Para37", "Para37a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Table8 />  
                        <h4 className='footnote'>
                            <i>
                            Source: Departmental information
                            </i>
                        </h4> 
                         
                        <Para>
                            {ctx.chapterTwo.Para38}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo["Para39"]}
                        </Subtitle>
                        {["Para40", "Para41", "Para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        {["Para43", "Para44"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}

                        <Para>
                            {ctx.chapterTwo["Para45"]}
                        </Para>
                        {/* <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding:"5px 5px 5px 20px",
                            borderRadius:"5px",
                            textAlign: 'center'
                            }}>
                            <Subtitle>
                            {ctx.chapterTwo["Para46"]}
                            </Subtitle>    
                           
                        </div> */}
                        <Subtitle>
                            {ctx.chapterTwo["Para47"]}
                            </Subtitle>
                            {["Para48", "Para49"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Table9 /> 
                        <h4 className='footnote'>
                            <i>
                            Source: Inspection Reports and information furnished by colleges and Department of Higher Education
                            </i>
                        </h4> 

                        <Para>
                            {ctx.chapterTwo["Para50"]}
                        </Para>

                        {["Para51", "Para52"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                            <ImageComponent  src={c62} alt="chart23" aspectRatio={1 / 1} />                      
                        
                        {["Para53", "Para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}     

                        <Subtitle>
                            {ctx.chapterTwo.Para55}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para56}
                        </Para>     

                        <Table10 />     
                        
                        <Subtitle>
                            {ctx.chapterTwo.Para57}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para58}
                        </Para>   

                        <Table11 />    

                        {["Para59", "Para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                            <i>
                            {ctx.chapterTwo.Para61}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para62}
                        </Para>     
                        {/* <ImageComponent src={c28} alt="chart2.7" aspectRatio={1 / 0.5} /> */}
                        <ImageComponent src={c63} alt="table24" aspectRatio={1 / 0.6} />

                        <Subtitle>
                            {ctx.chapterTwo.Para63}
                        </Subtitle>
                        {["Para64", "Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ In Crore
                    </h3>

                        <Table12/>    

                        <Para>
                            {ctx.chapterTwo.Para66}
                        </Para>

                        {/* <Table13/>   */}
                        <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                            <CustomTable title={"Table 2.14: Trends in Central Tax transfers"}
                            
                            columns={ctx.tables2.Table13a}
                            data={ctx.tables2.Table13a} />
                             <h3 className='footnote'>
                            Source:Finance Accounts
                    </h3>

                        <Para>
                            {ctx.chapterTwo.Para67}
                        </Para>   

                        <Subtitle>
                            {ctx.chapterTwo.Para68}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para69}
                        </Para>    
                        <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                            <CustomTable title={"Table 2.15: Grants-in-aid from GoI"}
                            
                            columns={ctx.tables2.Table13b}
                            data={ctx.tables2.Table13b} />
                             <h3 className='footnote'>
                            Source:Finance Accounts
                    </h3>

                        
                        {/* <Table14/>      */}

                        <Para>
                            {ctx.chapterTwo.Para70}
                        </Para>    

                        <Subtitle>
                            {ctx.chapterTwo.Para71}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para72}
                        </Para>      

                        {["Para73", "Para74", "Para75","Para76",].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>    
                                {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}    

                        <Para>
                            {ctx.chapterTwo.Para77}
                        </Para>  

                        {/* <Table15 />    */}
                        <CustomTable title={"Table 2.16: Recommended and actual release of grants during 2022-23"}
                            
                            columns={ctx.tables2.Table13c}
                            data={ctx.tables2.Table13c} />
                             <h3 className='footnote'>
                             Source: XV FC Report and Finance Accounts
                    </h3>
                       

                        <Subtitle>
                            {ctx.chapterTwo.Para78}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para79}
                        </Para> 
                              
                        <Para>
                            {ctx.chapterTwo.Para79a}
                        </Para> 

                        <Subtitle>
                            {ctx.chapterTwo.Para80}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para81}
                        </Para> 
                        <Subtitle>
                            {ctx.chapterTwo.Para82}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para83}
                        </Para> 
                        <Subtitle>
                            {ctx.chapterTwo.Para84}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para85}
                        </Para> 
                            
                        {/* <Table16 />     */}
                        <h3 className='headnote'>
                            ₹ In crore
                    </h3>
                            <CustomTable title={"Table 2.17: Trends in growth and composition of Capital Receipts"}
                            
                            columns={ctx.tables2.Table13d}
                            data={ctx.tables2.Table13d} />
                             <h3 className='footnote'>
                            Source:Finance Accounts
                    </h3>
                      
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables2.T16f1} <br></br> 
                                {ctx.tables2.T16f2} <br></br>
                                {ctx.tables2.T16f3} 
                            
                            </i>
                        </h4>


                        {["Para86", "Para87"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}     

                        <Subtitle>
                            {ctx.chapterTwo.Para88}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para89}
                        </Para>    
                        {/* <Table17 /> */}
                        <CustomTable title={"Table 2.18: Tax and non-Tax receipts vis-à-vis projections during 2022-23"}
                            
                            columns={ctx.tables2.Table13e}
                            data={ctx.tables2.Table13e} />
                           
                        <h4 className='footnote'>
                            <i>
                            Source: XV FC Report and Finance Accounts. <br></br>
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para90}
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
                        <FloatingActionButtons back="/finances/sources-application" forward="/finances/application" />
                        <Title>{ctx.chapter2kannada.Content.para9}</Title>
                        
                        <Para>
                            {ctx.chapter2kannada.Content.para10}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para11}
                            </i>
                        </Subtitle>
                        {["para12", "para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                       
                        <ImageComponent  src={ck12} alt="chart23" aspectRatio={1 / 1} />    
                       
                                               
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para16}
                            </i>
                        </Subtitle>
                        {["para17"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                             
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.3: ರಾಜಸ್ವ ಸ್ವೀಕೃತಿಗಳಲ್ಲಿನ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ವೃದ್ಧಿ"}
                                        
                                        columns={ctx.tables2kan.Table3}
                                        data={ctx.tables2kan.Table3} />
                         <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ
                               
                            </i>
                    </h4>
                       
                        <Para>
                            {ctx.chapter2kannada._collections_.t3f1}
                        {/* <ImageComponent  src={k24} alt="chart23" aspectRatio={1 / 0.6} /> */}
                        {/* <ImageComponent  src={k25} alt="chart23" aspectRatio={1 / 0.6} /> */}
                        </Para>
                        {/* <Para>
                            {ctx.chapter2kannada._collections_.t3f2}
                        </Para>
                        <Chrt2 />
                        
                        <Para>
                            <i>
                            {ctx.chapter2kannada._collections_.c4f1}
                            </i>
                        </Para> */}
                        <Para>
                            
                            {ctx.chapter2kannada._collections_.f6}
                            
                        </Para>
                        {/* <Chrt3 />
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4> */}
                            {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                        <Para>
                            <h5>
                            {ctx.chapter2kannada.Content.para18}
                            </h5>
                        </Para>
                        {["para19","para20","para21","para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                         <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para23}
                            </i>
                        </Subtitle>
                        {["para24","para25"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                         <Subtitle>
                           
                            {ctx.chapter2kannada.Content.para26}
                      
                        </Subtitle>
                        {["para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <title>
                            ನಕ್ಷೆ-2.6: 201೮-೧೯ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಸ್ವಂತ ತೆರಿಗೆ ರಾಜಸ್ವದ ಪ್ರವೃತ್ತಿ
                            </title>
                            <ImageComponent  src={ck13} alt="chart23" aspectRatio={1 / 1} />    
                            <title>
                            ನಕ್ಷೆ-2.೭: 201೮-೧೯ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಸ್ವಂತ ತೆರಿಗೆ ರಾಜಸ್ವದ ಬೆಳವಣಿಗೆ/ಕುಸಿತ
                            </title>
                            <ImageComponent  src={ck14} alt="chart23" aspectRatio={1 / 1} />    
                        {["para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                         <title>   
                    "ಕೋಷ್ಟಕ-2.4: 201೮-೧೯ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ರಾಜ್ಯದ ಸ್ವಂತ ತೆರಿಗೆ ಆದಾಯದ ಘಟಕಗಳು"
                    </title>
                    <ImageComponent  src={ckt12} alt="chart23" aspectRatio={1 / 1} />                     
                                        
                         <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                               
                            </i>
                    </h4>
                       
                            {["para29"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para30}
                           </Subtitle>
                       {["para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.5: ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಸ್ವೀಕೃತಿಗಳು"}
                            
                                        columns={ctx.tables2kan.Table5a}
                                        data={ctx.tables2kan.Table5a} />
                         <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                               
                            </i>
                    </h4>
                   

                            
                    {["para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para33}
                           </Subtitle>
                           {["para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para35}
                           </Subtitle>
                           {["para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.6 ರಾಜಸ್ವದಲ್ಲಿನ ಬಾಕಿಗಳು"}
                            
                                        columns={ctx.tables2kan.Table6}
                                        data={ctx.tables2kan.Table6} />
                         <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಇಲಾಖೆಯು ನೀಡಿದ ಮಾಹಿತಿ
                               
                            </i>
                    </h4>

                            <Subtitle>
                           {ctx.chapter2kannada.Content.para37}
                           </Subtitle>
                           {["para38"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.7: ಮೌಲ್ಯಮಾಪನದಲ್ಲಿ ಬಾಕಿ"}
                            
                            columns={ctx.tables2kan.Table7}
                            data={ctx.tables2kan.Table7} />
             <h4 className='footnote'>
                <i>
                ಆಕರ: ಇಲಾಖೆಯು ನೀಡಿದ ಮಾಹಿತಿ
                   
                </i>
        </h4>

                            {["para39"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para40}
                           </Subtitle>
                           {["para41","para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.8 ಪತ್ತೆ ಮಾಡಿದ ತೆರಿಗೆ ವಂಚನೆ ಪ್ರಕರಣಗಳು "}
                            
                            columns={ctx.tables2kan.Table8}
                            data={ctx.tables2kan.Table8} />
             <h4 className='footnote'>
                <i>
                ಆಕರ: ಇಲಾಖೆಯು ನೀಡಿದ ಮಾಹಿತಿ
                   
                </i>
        </h4>
                
                            {["para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para44}
                           </Subtitle>
                           {["para45","para46","para47","para48","para49","para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h5>
                            {ctx.chapter2kannada.Content.para50a}
                            </h5>
                            {["para51","para52"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.9: ಕಾಲೇಜುಗಳು ಜಮೆ ಮಾಡಿದ ಮತ್ತು ಕಡಿಮೆ ಜಮೆ ಮಾಡಿದ ಬೋಧನಾ ಶುಲ್ಕದ ವಿವರಗಳು"}
                            
                            columns={ctx.tables2kan.Table9}
                            data={ctx.tables2kan.Table9} />
                            <h4 className='footnote'>
                <i>
                ಆಕರ: ಇಲಾಖೆಯು ನೀಡಿದ ಮಾಹಿತಿ
                   
                </i>
        </h4>


                            {["para53","para54","para55"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 

                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    <title>
                    ಕೋಷ್ಟಕ-2.೧೦: ರಾಜ್ಯದ ತೆರಿಗೆಯೇತರ ಆದಾಯದ ಅಂಗಗಳು 
                    </title>
                    <ImageComponent  src={ckt13} alt="chart23" aspectRatio={1 / 1} />                     

                    <h4 className='footnote'>
                <i>
                ಆಕರ: ಇಲಾಖೆಯು ನೀಡಿದ ಮಾಹಿತಿ
                   
                </i>
        </h4>


                            {["para56","para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para58}
                           </Subtitle>
                           {["para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.11: ಕಡಿಮೆ ಮೌಲ್ಯಮಾಪನದಿಂದ ರಾಜಸ್ವದ ನಷ್ಟ"}
                            
                            columns={ctx.tables2kan.Table10}
                            data={ctx.tables2kan.Table10} />
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para60}
                           </Subtitle>
                           {["para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.12: ರಾಜಸ್ವದ ನಷ್ಟ"}
                            
                            columns={ctx.tables2kan.Table11}
                            data={ctx.tables2kan.Table11} />

                            {["para62","para63"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para64}
                           </i>
                           </Subtitle>
                           {["para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c16} alt="chart23" aspectRatio={1 / 1} />                     
                            <h5>
                            {ctx.chapter2kannada.Content.para66}
                            </h5>
                            {["para67","para68"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.13: ಕೇಂದ್ರ ತೆರಿಗೆಗಳು ಮತ್ತು ಸುಂಕಗಳಲ್ಲಿ ರಾಜ್ಯ ಪಾಲು;ಹಣಕಾಸು ಆಯೋಗದ ಪ್ರಕ್ಷೇಪಣೆಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಿಕ ಹಂಚಿಕೆಗಳು  "}
                            
                            columns={ctx.tables2kan.Table12}
                            data={ctx.tables2kan.Table12} />
                            
                            {["para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.14: ಕೇಂದ್ರ ತೆರಿಗೆ ವರ್ಗಾವಣೆಯಲ್ಲಿನ ಪ್ರವೃ"}
                            
                            columns={ctx.tables2kan.Table13}
                            data={ctx.tables2kan.Table13} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>
                            {["para70"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para71}
                           </i>
                           </Subtitle>
                           {["para72"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.15: ಭಾರತ ಸರ್ಕಾರದ ಸಹಾಯಾನುದಾನಗಳು"}
                            
                            columns={ctx.tables2kan.Table14}
                            data={ctx.tables2kan.Table14} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>

                            {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para74}
                           </Subtitle>
                           {["para75","para76","para77","para78","para79","para80"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-೨.1೬: 2022-23ರ ಅವಧಿಯಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಿದ ಮತ್ತು ವಾಸ್ತವಿಕವಾಗಿ ಬಿಡುಗಡೆಯಾದ ಅನುದಾನಗಳು"}
                            
                            columns={ctx.tables2kan.Table15}
                            data={ctx.tables2kan.Table15} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: XVನೇ ಹಣಕಾಸು ಆಯೋಗದ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>

                            <Subtitle>
                           {ctx.chapter2kannada.Content.para81}
                           </Subtitle>
                           {["para82","para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para84}
                           </Subtitle>
                           {["para85"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para86}
                           </Subtitle>
                           {["para87"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para88}</i>
                           </Subtitle>
                           {["para89"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.17: ಬಂಡವಾಳ ಸ್ವೀಕೃತಿಗಳ ವೃದ್ಧಿ ಮತ್ತು ಸಂಯೋಜನೆಯಲ್ಲಿನ ಪ್ರವೃತ್ತಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table16}
                            data={ctx.tables2kan.Table16} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು 
                   
                </i>
        </h4>

                            {["para90","para91"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para92}</i>
                           </Subtitle>
                           {["para93"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.1೮: 202೨-2೩ರಲ್ಲಿ ಪ್ರಕ್ಷೇಪಗಳಿಗೆ ಮುಖಾಮುಖಿಯಾಗಿ ತೆರಿಗೆ ಮತ್ತು ತೆರಿಗೆಯೇತರ ಸ್ವೀಕೃತಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table17}
                            data={ctx.tables2kan.Table17} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: XVನೆಯ ಹಣಕಾಸು ಆಯೋಗದ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು.
                   
                </i>
        </h4>
                            {["para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                                                       
                           

                       
                        {/* <ImageComponent  src={k26} alt="chart23" aspectRatio={1 / 0.7} /> */}
                        {/* <Chrt4 /> */}
                       
                        {/* <ImageComponent  src={kt24} alt="chart23" aspectRatio={1 / 0.7} /> */}
                        
                       
                       
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Resources