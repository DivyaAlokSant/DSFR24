import React, { useContext } from 'react'
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
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
//import Table24b from '../../../Tables/Chapter2/Table24b'
import Table25 from '../../../Tables/Chapter2/Table25'
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


import c29 from '../../../../../Images/c29.png'

import c210 from '../../../../../Images/c210.png'

import c211 from '../../../../../Images/c211.png'
import c212 from '../../../../../Images/c212.png'
import c213 from '../../../../../Images/c213.png'
import ImageComponent from 'material-ui-image'
import CustomTable from '../../../../CustomTable/CustomTable'
import c17 from '../../../../../Images/c17.png'
import c18 from '../../../../../Images/c18.png'
import c19 from '../../../../../Images/c19.png'
import c20 from '../../../../../Images/c20.png'
import c45 from '../../../../../Images/c45.png'


const Application = () => {

    const ctx = useContext(MyContext)
    // const [url, setURL] = useState("");

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
                        <ImageComponent src={c29} alt="chart23" aspectRatio={1 / 0.5} />
                        <Para>
                            {ctx.chapterTwo.Para97}
                        </Para>
                        {/* <Chart8 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        <ImageComponent src={c210} alt="chart23" aspectRatio={1 / 0.5} />
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
                        {/* <Table14 /> */}
                <CustomTable title={"Table 2.20: Revenue Expenditure – Basic parameters"}
            columns={ctx.tables2.Table14}
            data={ctx.tables2.Table14} />

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
                        <ImageComponent src={c211} alt="chart23" aspectRatio={1 / 0.5} />
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
                        {["Para119", "Para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        {["Para122", "Para123", "Para124", "Para125", "Para126", "Para127"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                    {ctx.chapterTwo[item]}
                                
                            </Para>)}
                        {["Para128", "Para129", "Para130"].map((item, ind) =>
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
                        {["Para131", "Para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <h2><b>
                            {ctx.chapterTwo.Para133}</b></h2>
                        
                        {["Para134", "Para135"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                    <h2><b>
                            {ctx.chapterTwo.Para136}</b></h2>
                        
                        {["Para137"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <Subtitle>
                            {ctx.chapterTwo.Para138}
                        </Subtitle>
                        {["Para139", "Para140", "Para141", "Para142", "Para143", "Para144",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                       <h2><b>
                            {ctx.chapterTwo.Para145}</b></h2>
                        
                        {["Para146", "Para147"].map((item, ind) =>
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

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table18 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["Para152", "Para153"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            <ImageComponent src={c212} alt="chart23" aspectRatio={1 / 0.8} />
                           


                        <Subtitle>
                            <li>
                                {ctx.chapterTwo.Para154}
                            </li>
                        </Subtitle>
                        {["Para155", "Para156"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para157}
                        </Subtitle>
                        <h2><b>
                            {ctx.chapterTwo.Para158}</b></h2>
                        

                        <Para >
                            {ctx.chapterTwo.Para159}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table19 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["Para160", "Para161"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <Subtitle>
                            {ctx.chapterTwo.Para162}
                        </Subtitle>
                        {["Para163", "Para164", "Para165"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                            <ImageComponent src={c213} alt="chart23" aspectRatio={1 / 0.8} />
                       

                        <Para >
                            {ctx.chapterTwo.Para166}
                        </Para>

                        <Subtitle>
                            {ctx.chapterTwo.Para167}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para168}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table20 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        <Para >
                            {ctx.chapterTwo.Para169}
                        </Para>
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding: "5px 5px 5px 20px",
                            borderRadius: "5px",
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
                        {["Para174", "Para175", "Para176"].map((item, ind) =>
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

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table21 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>


                        {["Para179", "Para180", "Para181"].map((item, ind) =>
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
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table22 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>


                        {["Para184", "Para185", "Para186", "Para187", "Para188"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Para189}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para190}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table23 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>



                        {["Para191", "Para192", "Para193", "Para194", "Para195", "Para196", "Para197"].map((item, ind) =>
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
                        <Table24 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table25 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>



                        {["Para200", "Para201", "Para202"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

                        <Subtitle>
                            {ctx.chapterTwo.Para203}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para204}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table26 />
                        <h4>
                            <i>
                                Source:Department of Industries and Commerce
                            </i>
                        </h4>
                        

                        <Subtitle>
                            {ctx.chapterTwo.Para205}
                        </Subtitle>
                        <Para >
                            {ctx.chapterTwo.Para206}
                        </Para>
                        
                        <Para >
                            {ctx.chapterTwo.Para207}
                        </Para>
                        <Table27 />      
                        <h3 className='headnote'>
                            ₹ in per cent
                        </h3>           
                        <h4>
                            <i>
                                Source:Finance Accounts
                            </i>
                        </h4>
                       

                        {["Para208", "Para209", "Para210", "Para211", "Para212"].map((item, ind) =>
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
                        <Title>{ctx.chapter2kannada.Content.para95}</Title>
                        {["para96","para97"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                    <Subtitle><i>
                           {ctx.chapter2kannada.Content.para98}</i>
                           </Subtitle>
                           {["para99"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.1೯: ಒಟ್ಟು ವೆಚ್ಚ – ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ಸಂಯೋಜನೆ"}
                            
                            columns={ctx.tables2kan.Table18}
                            data={ctx.tables2kan.Table18} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು.
                   
                </i>
        </h4>
                            {["para100"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c17} alt="chart23" aspectRatio={1 / 1} />                     
                            {["para101"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c18} alt="chart23" aspectRatio={1 / 1} />                      
                            {["para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para103}</i>
                           </Subtitle>
                           {["para104","para105","para106"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೨೦: ರಾಜಸ್ವ ವೆಚ್ಚ–ಮೂಲ ಪ್ರಮಿತಿಗಳು"}
                            
                            columns={ctx.tables2kan.Table19}
                            data={ctx.tables2kan.Table19} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಸಂಬಂಧಿತ ವರ್ಷಗಳ ಹಣಕಾಸು ಲೆಕ್ಕಗಳು.
                   
                </i>
        </h4>
                            {["para107"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c19} alt="chart23" aspectRatio={1 / 1} />                      

                            {["para108"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para103}
                           </Subtitle>
                           {["para110"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೨೧: 20೨೧-2೨ಕ್ಕೆ ಹೋಲಿಸಿದರೆ 202೨-2೩ರಲ್ಲಿ ರಾಜಸ್ವ ವೆಚ್ಚದಲ್ಲಿನ ವ್ಯತ್ಯಾಸ"}
                            
                            columns={ctx.tables2kan.Table20a}
                            data={ctx.tables2kan.Table20a} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>

                            {["para111","para112","para113","para114","para115","para116","para117","para118"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para119}
                           </Subtitle>
                           {["para120"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೨೨: ಆಯವ್ಯಯ ಅನುಮೋದನೆಗೆ ಪ್ರತಿಯಾಗಿ ಉದ್ದೇಶ ಶೀರ್ಷಿಕೆವಾರು ವೆಚ್ಚ"}
                            
                            columns={ctx.tables2kan.Table20b}
                            data={ctx.tables2kan.Table20b} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4>

                            {["para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para122}
                           </Subtitle>
                           {["para122a","para123","para124","para125","para126","para127","para128","para129","para130","para131","para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.23: ಬದ್ಧ ವೆಚ್ಚದ ಘಟಕಗಳು"}
                            
                            columns={ctx.tables2kan.Table20c}
                            data={ctx.tables2kan.Table20c} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4> 
                            {["para132a","para133"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para134}
                           </Subtitle>
                           {["para135","para136"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para137}
                           </Subtitle>
                           {["para138","para139","para140","para141","para142","para143","para144","para145"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para146}
                           </Subtitle>
                           {["para147","para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para149}
                           </Subtitle>
                           {["para150"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para151}
                           </Subtitle>
                           {["para152"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.24: 2018-23ರ ಅವಧಿಯಲ್ಲಿ ಸಹಾಯಧನಗಳ ಮೇಲಿನ ವೆಚ್ಚ "}
                            
                            columns={ctx.tables2kan.Table20d}
                            data={ctx.tables2kan.Table20d} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4> 

                            {["para153","para154"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c20} alt="chart23" aspectRatio={1 / 1} />                      

                            <Subtitle>
                           {ctx.chapter2kannada.Content.para155}
                           </Subtitle>
                           {["para156","para157"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para158}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter2kannada.Content.para159}
                           </Subtitle>
                           {["para160"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.೨೫: ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳಿಗೆ ಹಣಕಾಸಿನ ನೆರವು"}
                            
                            columns={ctx.tables2kan.Table20}
                            data={ctx.tables2kan.Table20} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4> 


                            {["para161","para162"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para163}
                           </Subtitle>
                           {["para164","para165","para166"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c45} alt="chart23" aspectRatio={1 / 1} />                      

                            {["para167"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para168}
                           </Subtitle>
                           {["para169"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.26: 2021-22ಕ್ಕೆ ಹೋಲಿಸಿದರೆ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಬಂಡವಾಳ ವೆಚ್ಚ"}
                            
                            columns={ctx.tables2kan.Table21}
                            data={ctx.tables2kan.Table21} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4> 
                            {["para170","para172"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para173}
                           </Subtitle>
                           {["para174"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para175}
                           </Subtitle>
                           {["para176","para177","para178"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para179}
                           </Subtitle>
                           {["para180"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.2೭: ಹೂಡಿಕೆಯ ಮೇಲಿನ ಪ್ರತಿಫಲ"}
                            
                            columns={ctx.tables2kan.Table22}
                            data={ctx.tables2kan.Table22} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
        </h4> 
                            {["para181","para182","para183"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para184}
                           </Subtitle>
                           {["para185"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            {["para186","para187","para188","para189","para190"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para191}
                           </Subtitle>
                           {["para192"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.2೯: ಕಳೆದ ಐದು ವರ್ಷಗಳಲ್ಲಿ ವಿತರಿಸಲಾದ ಮತ್ತು ವಸೂಲಿ ಮಾಡಿದ ಸಾಲಗಳ ಪ್ರಮಾಣ"}
                            
                            columns={ctx.tables2kan.Table23}
                            data={ctx.tables2kan.Table23} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
                </h4>
                            
                            {["para193","para194","para195","para196","para197","para198","para199"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para200}
                           </Subtitle>
                           {["para201"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-2.೩೦: 31 ಮಾರ್ಚ್ 202೩ರಲ್ಲಿದ್ದಂತೆ ₹ಒಂದು ಕೋಟಿಗಿಂತ ಹೆಚ್ಚಿನ ಅಪೂರ್ಣ ಯೋಜನೆಗಳ ವರ್ಷಾವಾರು ವಿವರ  (₹ ಕೋಟಿಗಳಲ್ಲಿ)"}
                            
                            columns={ctx.tables2kan.Table24}
                            data={ctx.tables2kan.Table24} />
                             <CustomTable title={"ಕೋಷ್ಟಕ-2.೩೧: 31 ಮಾರ್ಚ್ 202೩ರಲ್ಲಿದ್ದಂತೆ ₹ಒಂದು ಕೋಟಿಗಿಂತ ಹೆಚ್ಚಿನ ಅಪೂರ್ಣ ಯೋಜನೆಗಳ ಇಲಾಖಾವಾರು ವಿವರ  (₹ ಕೋಟಿಗಳಲ್ಲಿ)"}
                            
                            columns={ctx.tables2kan.Table25}
                            data={ctx.tables2kan.Table25} />

                            {["para202","para203","para204"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para205}
                           </Subtitle>
                           {["para206"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.32: ಸಾರ್ವಜನಿಕ-ಖಾಸಗಿ ಸಹಭಾಗಿತ್ವದಲ್ಲಿನ ಹೊಣೆಗಾರಿಕೆಗಳು"}
                            
                            columns={ctx.tables2kan.Table26}
                            data={ctx.tables2kan.Table26} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
                </h4>
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para207}
                           </i>
                           </Subtitle>
                           {["para208"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            (ಶೇಕಡಾವಾರು)
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೩೩: ರಾಜ್ಯಗಳ ಹಣಕಾಸಿನ ಆದ್ಯತೆ"}
                            
                            columns={ctx.tables2kan.Table27}
                            data={ctx.tables2kan.Table27} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ-ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i>
                </h4>

                            {["para209","para210","para211","para212","para213"].map((item, ind) =>
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

export default Application