import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c23 from '../../../../../Images/c23.png'

import c24 from '../../../../../Images/c24.png'

import c25 from '../../../../../Images/c25.png'

import c26 from '../../../../../Images/c26.png'

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
import Table5kan from '../../../Tables/Chapter2kan/Table5'
import Table6kan from '../../../Tables/Chapter2kan/Table6'
import Table7kan from '../../../Tables/Chapter2kan/Table7'
import Table8kan from '../../../Tables/Chapter2kan/Table8'
import Table9kan from '../../../Tables/Chapter2kan/Table9'
import Table10kan from '../../../Tables/Chapter2kan/Table10'
import Table11kan from '../../../Tables/Chapter2kan/Table11'
import Table4 from '../../../Tables/Chapter2/Table4'
import ck12 from '../../../../../Images/ck12.png'
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
                        <h3>
                            <i>
                            Source: Finance Accounts
                            </i>
                        </h3>
                      

                        
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
                        {["Para12", "Para13", "Para14", "Para15", "Para15a", "Para15b"].map((item, ind) =>
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
                        {/* <Chrt4 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        {/* <ImageComponent src={c26} alt="chart2.6" aspectRatio={1 / 0.5} />
                        <ImageComponent src={c27} alt="chart2.7" aspectRatio={1 / 0.5} /> */}
                        <Para>
                        {ctx.chapterTwo.Para21a}
                        </Para>
                        {/* <ImageComponent src={t24} alt="table24" aspectRatio={1 / 0.6} /> */}
                        
                        <Table4 />
                        
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
                                <sup>7</sup>
                            </span>

                            {ctx.chapterTwo.Para27.substring(357,)}
                        </Para>

                        {["Para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            
                        {["Para28a","Para28b","Para28c"].map((item, ind) =>
                            <Para key={ind / 10}>
                            <li> 
                                {ctx.chapterTwo[item]}
                            </li>
                            </Para>)}
                        <Para>
                            {ctx.chapterTwo.Para28d}
                        </Para>    
                        
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
                        <Subtitle>
                            {ctx.chapterTwo.Para33}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para34}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Para35}
                        </Para>

                        <Table7 />
                        <h4 className='footnote'>
                            <i>
                            Source: Departmental information
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
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding:"5px 5px 5px 20px",
                            borderRadius:"5px",
                            textAlign: 'center'
                            }}>
                            <Subtitle>
                            {ctx.chapterTwo["Para46"]}
                            </Subtitle>    
                            <Subtitle>
                            {ctx.chapterTwo["Para47"]}
                            </Subtitle>
                            {["Para48", "Para49"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        </div>
                        <Table9 /> 
                        <Para>
                            {ctx.chapterTwo["Para50"]}
                        </Para>

                        {["Para51", "Para52"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    

                        
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
                       

                        <Subtitle>
                            {ctx.chapterTwo.Para63}
                        </Subtitle>
                        {["Para64", "Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 

                        <Table12/>    

                        <Para>
                            {ctx.chapterTwo.Para66}
                        </Para>

                        <Table13/>  

                        <Para>
                            {ctx.chapterTwo.Para67}
                        </Para>   

                        <Subtitle>
                            {ctx.chapterTwo.Para68}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para69}
                        </Para>    
                        
                        <Table14/>     

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

                        <Table15 />   

                        <Subtitle>
                            {ctx.chapterTwo.Para78}
                        </Subtitle>
                          
                        <Para>
                            {ctx.chapterTwo.Para79}
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
                            
                        <Table16 />    
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
                        <Table17 />
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
                        {["para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
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
                    {["para32"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.Para33}
                           </Subtitle>
                           {["para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.Para35}
                           </Subtitle>
                           {["para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.Para37}
                           </Subtitle>
                           {["para38"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            {["para39"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.Para40}
                           </Subtitle>
                           {["para41","para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            {["para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
                            <Subtitle>
                           {ctx.chapter2kannada.Content.Para44}
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
                            {["para53","para54","para55"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
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
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para60}
                           </Subtitle>
                           {["para61"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 
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
                            <h5>
                            {ctx.chapter2kannada.Content.para66}
                            </h5>
                            {["para67","para68"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            {["para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
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
                            {["para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                                                       
                           

                       
                        {/* <ImageComponent  src={k26} alt="chart23" aspectRatio={1 / 0.7} /> */}
                        {/* <Chrt4 /> */}
                       
                        {/* <ImageComponent  src={kt24} alt="chart23" aspectRatio={1 / 0.7} /> */}
                        
                       
                        
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table5kan />
                        
                        {/* <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        
                        <Table7kan/> */}
                        
                       
                            
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        {/* <Table9kan/> */}
                       
                        {/* <ImageComponent  src={kt26} alt="chart23" aspectRatio={1 / 0.7} /> */}
                        
                            
                        <Table6kan />    
                        
                         
                        
                       

                       

                        <Table7kan/>    
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4>

                       

                        <Table8kan/>    
                        <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h4>

                       

                      

                        <Table9kan/>

                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Resources