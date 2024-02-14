import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'
import Table18 from '../../../Tables/Chapter2/Table18'
import Table19 from '../../../Tables/Chapter2/Table19'
import Table20 from '../../../Tables/Chapter2/Table20'
import Table20a from '../../../Tables/Chapter2/Table20a'
import Table20b from '../../../Tables/Chapter2/Table20b.js'
import Table20c from '../../../Tables/Chapter2/Table20c.js'
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
//import Table24b from '../../../Tables/Chapter2/Table24b'
import Table25 from '../../../Tables/Chapter2/Table25'
import Table25a from '../../../Tables/Chapter2/Table25a'
import Table26 from '../../../Tables/Chapter2/Table26'
import Table27 from '../../../Tables/Chapter2/Table27'
import Table13kan from '../../../Tables/Chapter2kan/Table13'
import Table14kan from '../../../Tables/Chapter2kan/Table14'
import Table15kan from '../../../Tables/Chapter2kan/Table15'
import Table16kan from '../../../Tables/Chapter2kan/Table16'
import Table17kan from '../../../Tables/Chapter2kan/Table17'
import Table18kan from '../../../Tables/Chapter2kan/Table18'
import Table18akan from '../../../Tables/Chapter2kan/Table18a'
import Table19kan from '../../../Tables/Chapter2kan/Table19'
import Table20akan from '../../../Tables/Chapter2kan/Table20a'
import Table20bkan from '../../../Tables/Chapter2kan/Table20b'
import Table20ckan from '../../../Tables/Chapter2kan/Table20c'
import Table20dkan from '../../../Tables/Chapter2kan/Table20d'

import Table22kan from '../../../Tables/Chapter2kan/Table22'
import Table23kan from '../../../Tables/Chapter2kan/Table23'
import Table24kan from '../../../Tables/Chapter2kan/Table24'
import Table25kan from '../../../Tables/Chapter2kan/Table25'
import Table26kan from '../../../Tables/Chapter2kan/Table26'
import Table27kan from '../../../Tables/Chapter2kan/Table27'
import Table28kan from '../../../Tables/Chapter2kan/Table28'
import {
     Chart11, Chart12,
   Chart7, Chart8, Chart9
} from '../../../Charts/Chap2Charts'
import c27 from '../../../../../Images/c27.png'
import k27 from '../../../../../Images/k27.png'
import c28 from '../../../../../Images/c28.png'
import k28 from '../../../../../Images/k28.png'
import c29 from '../../../../../Images/c29.png'
import k29 from '../../../../../Images/k29.png'
import c210 from '../../../../../Images/c210.png'
import k210 from '../../../../../Images/k210.png'
import c211 from '../../../../../Images/c211.png'
import k211 from '../../../../../Images/k211.png'
import c212a from '../../../../../Images/c212a.png'
import k212a from '../../../../../Images/k212a.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import Table20kan from '../../../Tables/Chapter2kan/Table20'
import { Chart11a } from '../../../Charts/Chap2Charts'


const Application = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    // getFirebase()
    //     .storage()
    //     .ref('/pdfs/2542text.png')
    //     .getDownloadURL()
    //     .then((url) => {
    //         setURL(url);
    //     });


    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapterTwo.Para91}</Title>
                        {["Para92", "Para93"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapterTwo["Para94"]}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo["Para95"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table13 />
                        <h4 className='footnote'>
                            <i>
                            Source: Finance Accounts of respective years.
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para96}
                        </Para>
                        {/* <Chart7 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent src={c27} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para97}
                        </Para>
                        {/* <Chart8 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c28} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo["Para99"]}
                        </Subtitle>
                        {["Para100", "Para101", "Para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table14 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts of respective years
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Para103}
                        </Para>
                        {/* <Chart9 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                         <ImageComponent  src={c29} alt="chart23" aspectRatio={1 / 0.5} />
                        {["Para104"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para105}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para106}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table15 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para107", "Para108"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            
                        {["Para109", "Para110", "Para111", "Para112", "Para113", "Para114"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapterTwo[item]}
                                </li>
                            </Para>)}

                            
                        <Subtitle>
                            {ctx.chapterTwo.Para115}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Para116}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table16 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses
                            </i>
                        </h4>
                        {["Para117"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para118}
                        </Subtitle>
                        {["Para119","Para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        {["Para122", "Para123","Para124","Para125","Para126","Para127"].map((item, ind) =>
                        <Para key={ind / 10}>
                            <li>
                            {ctx.chapterTwo[item]}
                            </li>
                        </Para>)}
                        {["Para128","Para129","Para130"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table17 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses
                            </i>
                        </h4>    
                        {["Para131","Para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                        <Subtitle>
                            {ctx.chapterTwo.Para133}
                        </Subtitle>
                        {["Para134","Para135"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                        
                        <Subtitle>
                            {ctx.chapterTwo.Para136}
                        </Subtitle>
                        {["Para137"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                            
                        <Subtitle>
                            {ctx.chapterTwo.Para138}
                        </Subtitle>
                        {["Para139","Para140","Para141","Para142","Para143","Para144",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    
                        
                        <Subtitle>
                            {ctx.chapterTwo.Para145}
                        </Subtitle>
                        {["Para146","Para147"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}    

                        <Subtitle>
                            {ctx.chapterTwo.Para148}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para149}
                        </Para>

                        <Subtitle>
                            {ctx.chapterTwo.Para150}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para151}
                        </Para>
                        
                        {["Para152","Para153"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                        
                        <Subtitle>
                            <li>
                            {ctx.chapterTwo.Para154}
                            </li>
                        </Subtitle>
                        {["Para155","Para156"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                        <Subtitle>
                            {ctx.chapterTwo.Para157}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterTwo.Para158}
                        </Subtitle>  
                        
                        <Para >
                            {ctx.chapterTwo.Para159}
                        </Para>  
                        
                        {["Para160","Para161"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                        
                        <Subtitle>
                            {ctx.chapterTwo.Para162}
                        </Subtitle>  
                        {["Para163","Para164","Para165"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}     
                        <Para >
                            {ctx.chapterTwo.Para166}
                        </Para>     
                        
                        <Subtitle>
                            {ctx.chapterTwo.Para167}
                        </Subtitle>  
                        <Para >
                            {ctx.chapterTwo.Para168}
                        </Para>     
                         
                        <Para >
                            {ctx.chapterTwo.Para169}
                        </Para>     
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding:"5px 5px 5px 20px",
                            borderRadius:"5px",
                            textAlign: 'center'
                            }}>
                            
                            {["Para170"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        </div>
                        <Subtitle>
                            {ctx.chapterTwo.Para171}
                        </Subtitle>  
                        <Para >
                            {ctx.chapterTwo.Para172}
                        </Para>     
                        <Subtitle>
                            {ctx.chapterTwo.Para173}
                        </Subtitle> 
                        {["Para174","Para175","Para176"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}     
                        <Subtitle>
                            <li>
                            {ctx.chapterTwo.Para177}
                            </li>
                        </Subtitle>  
                        <Para >
                            
                            {ctx.chapterTwo.Para178}
                        </Para>    
                        {["Para179","Para180","Para181"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                            <li>
                            {ctx.chapterTwo.Para182}
                            </li>
                        </Subtitle>     
                        <Para >                            
                            {ctx.chapterTwo.Para183}
                        </Para> 
                        {["Para184","Para185","Para186","Para187","Para188"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                            {ctx.chapterTwo.Para189}
                        </Subtitle>
                        <Para >                            
                            {ctx.chapterTwo.Para190}
                        </Para> 
                        {["Para191","Para192","Para193","Para194","Para195","Para196","Para197"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapterTwo[item]}
                                </li>
                            </Para>)} 
                        <Subtitle>
                            {ctx.chapterTwo.Para198}
                        </Subtitle>    
                        <Para >                            
                            {ctx.chapterTwo.Para199}
                        </Para> 
                        {["Para200","Para201","Para202"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}                            
                            </Para>)} 

                        <Subtitle>
                            {ctx.chapterTwo.Para203}
                        </Subtitle>    
                        <Para >                            
                            {ctx.chapterTwo.Para204}
                        </Para>        

                        <Subtitle>
                            {ctx.chapterTwo.Para205}
                        </Subtitle>    
                        <Para >                            
                            {ctx.chapterTwo.Para206}
                        </Para> 
                        <Para >                            
                            {ctx.chapterTwo.Para207}
                        </Para>        
                        {["Para208","Para209","Para210","Para211","Para212"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapterTwo[item]}
                                </li>
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
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapter2kannada.Content.para72}</Title>
                        {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content["para74"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para75"]}
                        </Subtitle>
                        {["para76"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table13kan />
                        <h3>
                        ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                        
                        
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para77}
                        </Para>
                        <ImageComponent  src={k27} alt="chart23" aspectRatio={1 / 0.5} />
                        {/* <Chart7 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para> */}
                        <Para>
                            {ctx.chapter2kannada.Content.para78}
                        </Para>
                        <ImageComponent  src={k28} alt="chart23" aspectRatio={1 / 0.6} />
                        {/* <Chart8 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para> */}
                        <Para>
                            {ctx.chapter2kannada.Content["para79"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para80"]}
                        </Subtitle>
                        {[ "para81", "para82", "para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table14kan />
                        <Para>
                            {ctx.chapter2kannada.Content["t13a"]}
                        </Para>

                        

                        <Para>
                            {ctx.chapter2kannada.Content.para84}
                        </Para>
                        <ImageComponent  src={k29} alt="chart23" aspectRatio={1 / 0.5} />
                        {/* <Chart9 />
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para> */}
                        {["para85", "para86", "para87",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>    
                        <Table15kan />
                       
                        <Para>
                            {ctx.chapter2kannada.Content["t3fb"]}
                        </Para>
                        {["para88", "para89", "para90",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>      
                        <Table16kan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        * ಉದ್ದೇಶ ಶೀರ್ಷಿಕೆ ಕ್ರೋಢೀಕೃತ ಸಂಬಳಗಳು ಅಧಿಕಾರಿಗಳ ವೇತನ, ಸಿಬ್ಬಂದಿ ವೇತನ, ಮಧ್ಯಂತರ ಪರಿಹಾರ, ತುಟ್ಟಿಭತ್ಯೆ, ಇತರ ಭತ್ಯೆಗಳು, ವೈದ್ಯಕೀಯ ಭತ್ಯೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳ ಮರುಪಾವತಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.
                        </h3> 
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content["t15b"]}
                        </Para>
                        {["para91", "para92", "para93", "para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>     
                        <Table17kan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        # ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಮೇಲಿನ ಬಡ್ಡಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ
                        <br></br>
                        @ ಹಣಕಾಸಿನ ಸಹಾಯದ ರೂಪದಲ್ಲಿ ಸಹಾಯಧನಗಳನ್ನು ಹೊರತುಪಡಿಸುತ್ತದೆ
                        <br></br>
                        * ಪಂಚಾಯತ್‌ ರಾಜ್‌ ಸಂಸ್ಥೆಗಳ ಸಂಬಳೇತರ ಬಾಬ್ತುಗಳು ಮತ್ತು ಪಂಚಾಯತ್‌ ರಾಜ್‌ ಸಂಸ್ಥೆಗಳ ಮತ್ತು ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಇತರ ವೆಚ್ಚಗಳ ಬಾಬ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.
                        </h3> 
                        <ImageComponent  src={k210} alt="chart23" aspectRatio={1 / 0.5} />
                        
                        {["para95" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Para>
                            {ctx.chapter2kannada.Content["para96"]}
                        </Para>
                        {["para97", "para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content["para99"]}
                        </Para>
                        {["para100","para101", "para102", "para103", "para104", "para105", "para106",
                            "para107", "para108", "para109", "para110", "para111", "para112", "para113"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter2kannada.Content[item]}
                                </Para>)}
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para114"]}
                        </Subtitle>   
                        {["para115", "para116"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}    
                        
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para117"]}
                        </Subtitle>      
                        
                        <Para>
                            {ctx.chapter2kannada.Content["para118"]}
                        </Para>
                        
                        <Table18kan />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para119}
                        </Para>

                        <ImageComponent  src={k211} alt="chart23" aspectRatio={1 / 0.6} />

                        {/* <Chart11 />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para> */}
                        {["para120", "para121", "para122"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para122a"]}
                        </Subtitle>     
                            
                        {[ "para123", "para124"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table18akan />
                        <h3>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        {["para125","para126", "para127", "para128", "para129"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table19kan />
                        <h3 className='headnote'>
                        ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        </h3>
                            
                        
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para>
                        {["para130","para131", "para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                        <Table20akan />
                        {/* <Chart12 />
                        <Para>
                            {ctx.chapter2kannada.Content["t15a"]}
                        </Para> */}

                        <Para>
                            {ctx.chapter2kannada.Content.para133}
                        </Para>

                        {["para133","para134", "para135", "para136", "para137"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>    
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                            </Para>)}

                        <Para>
                            {ctx.chapter2kannada.Content.para138}
                        </Para>
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20bkan />
                        <h3>
                        *	ಸಾಲ ಅಲ್ಲದ ನಿವ್ವಳ ಸ್ವಂತ ರಾಜಸ್ವ ಆದಾಯವನ್ನು ಲೆಕ್ಕ ಹಾಕುವಾಗ ಉಪಕರ (ಸೆಸ್) ಮತ್ತು ವಸೂಲಿ ಶುಲ್ಕಗಳನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ. ಮುಂದುವರೆದಂತೆ, ೨೦೨೦-೨೧ ಮತ್ತು ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಬ್ಯಾಕ್‌ ಟು ಬ್ಯಾಕ್‌ ಸಾಲವಾಗಿ ಸ್ವೀಕರಿಸಿದ ಪರಿಹಾರವನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ. 
                        <br></br>
                        #	ಹದಿಮೂರು, ಹದಿನಾಲ್ಕು ಮತ್ತು ಹದಿನೈದನೆಯ ಹಣಕಾಸು ಆಯೋಗದ ಹಂಚಿಕೆಗಳನ್ನು ಒಳಗೊಂಡಿಲ್ಲ.

                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para139}
                        </Para>

                        <Subtitle>
                            {ctx.chapter2kannada.Content["para140"]}
                        </Subtitle>     

                        {["para141","para142"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20ckan />
                        <h3>
                        ಆಕರ: ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಮತ್ತು ವೈದ್ಯಕೀಯ ಶಿಕ್ಷಣ ಇಲಾಖೆಯಿಂದ ಒದಗಿಸಲ್ಪಟ್ಟ ಮಾಹಿತಿ
                        </h3>
                        <Para>
                            {ctx.chapter2kannada.Content.para143}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content["para144"]}
                            </i>
                        </Subtitle>

                        {["para145","para146"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <ImageComponent  src={k212a} alt="chart23" aspectRatio={1 / 0.6} />
                        <Para>
                            {ctx.chapter2kannada.Content.para147}
                        </Para>  

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table20dkan />
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)} 

                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding: "5px 5px 5px 20px",
                            borderRadius: "5px"
                        }}>
                            <p>
                                {ctx.chapter2kannada.Content.para149}
                            </p>
                        </div>
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para150}
                            </i>
                        </Subtitle>     
                        {["para151","para152","para153","para154","para155"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)} 

                        <Table22kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>
                        
                        {["para156","para157","para158","para159","para160"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)} 

                        <Table23kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>    

                        {["para161","para162","para163","para164","para165"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)}

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table24kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para166","para167","para168","para169","para170","para171","para172"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                        </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content.para173}
                        </Para> 

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table25kan/>

                        <Para>
                            {ctx.chapter2kannada.Content.para174}
                        </Para>

                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para175}
                            </h4>
                        </Para>
                        <Para>
                            {ctx.chapter2kannada.Content.para176}
                        </Para>    

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table26kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table27kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            </i>
                        </h3>

                        {["para177", "para178"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                        </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para179}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para180}
                        </Para>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table28kan/>
                        <h3>
                            <i>
                        ಆಕರ : ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                        <br></br>
                        ಒವೆ: ಒಟ್ಟು ವೆಚ್ಚ, ಬಂವೆ: ಬಂಡವಾಳ ವೆಚ್ಚ, ಅವೆ: ಅಭಿವೃದ್ಧಿ ವೆಚ್ಚ (ಸಾಮಾಜಿಕ ಮತ್ತು ಆರ್ಥಿಕ ವಲಯಗಳ ಅಡಿಯಲ್ಲಿ ಒಟ್ಟು ವೆಚ್ಚವನ್ನು ಒಳಗೊಂಡಿದೆ).
                            </i>
                        </h3>

                        <Para>
                            {ctx.chapter2kannada.Content.para181}
                        </Para>
                        {["para182", "para183","para184", "para185", "para186"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter2kannada.Content[item]}
                                </li>
                        </Para>)}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Application