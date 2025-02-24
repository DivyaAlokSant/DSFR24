import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Navbar from "./../../../../Navbar/Navbar"
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table1 from '../../../Tables/Chapter1/Table1'
import Table1kan from '../../../Tables/Chapter1kan/Table1'
import ImageComponent from 'material-ui-image'




import c11 from '../../../../../Images/C11.png'
import c12 from  '../../../../../Images/c12.png'

import Subtitle from '../../../../Subtitle/Subtitle'
import CustomTable from '../../../../CustomTable/CustomTable'
//import TableauChart from '../../../../TablueChart/TableauChart'
import k1 from  '../../../../../Images/k1.png'
import k2 from  '../../../../../Images/k2.png'

const Profile = () => {

    const ctx = useContext(MyContext)
    // console.log(ctx)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/introduction" forward="/overview/basis" />
                        <Title>
                            1.2 Profile of the state
                        </Title>

                        <Para tooltips={[
                            { word: "line[1]", tooltip: "As per Economic Survey of India 2022-23." },

                        ]}>
                            {ctx.chapterOne.Profile.para2}
                        </ Para>

                        <Title>
                            {ctx.chapterOne.Profile.para3}
                        </Title>

                        {["para4"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {["para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {/* <Para>
                            {ctx.chapterOne.Profile.para5.substring(0, 186)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.para5.substring(186, 195)}
                                <span className="tooltiptext">
                                    The difference between per capita income of the State and National’s average during 2020-21 was ₹99,828
                                </span>
                                <sup>2</sup>
                            </span>
                            {ctx.chapterOne.Profile.para5.substring(195, 350)}

                        </Para> */}

                        <Para>
                            {ctx.chapterOne.Profile.para6}
                        </Para>
                        {["para7", "para8","para8b"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        {/* Table 1 goes here */}
                        {/* <Table1 id="table1" /> */}
                        <CustomTable    title={"Table 1.1 Trends in GSDP/GSVA compared to the GDP/GVA (at current prices)"}
                        columns={ctx.tables1.Table1}
                        data={ctx.tables1.Table1} /> 
                        {/* /* ENglish */}
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T1F1} <br></br>
                                {ctx.tables1.T1F1a} <br></br>
                                {ctx.tables1.T1F2}<br></br>
                                {ctx.tables1.T1F2a}<br></br>
                                {ctx.tables1.T1F2b}<br></br>
                                {ctx.tables1.T1F2c}<br></br>
                                {/* {ctx.tables1.T1F2d}<br></br> */}
                               
                            </i>
                        </h4>

                        <Para tooltips={[
                            { word: "Statistics[2]", tooltip: "The GSDP as per the Economic Survey of Karnataka is ₹25,00,733 crore, which differs from the GSDP (₹25,67,340 crore) projected by Ministry of Finance, GoI." },

                        ]}>
                            {ctx.chapterOne.Profile.para8a}
                        </Para>
                       
                        <ImageComponent  aspectRatio={1/.6} src={c11} color="#ffffff00" />
                        {["Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        {["Para10"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        
                        {/* Chart 1 goes here */}
                        {/* <Chart1 />
                        <TableauChart /> */}
                        

                        

                        {/* <Para>
                            {ctx.chapterOne.Profile.Para10.substring(0, 165)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para10.substring(165, 174)}
                                <span className="tooltiptext">
                                    Product taxes or subsidies are paid or received on per unit of product. Some examples of product taxes are excise tax, sales tax, service tax and import and export duties. Product subsidies include food, petroleum and fertilizer subsidies, interest subsidies given to farmers, households, etc. through banks
                                </span>
                                <sup>3</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para10.substring(174,)}

                        </Para> */}
                        {/* <Title>
                            Chart 1.2: Sectoral growth in GSDP
                        </Title>
                        <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={c2} color="#ffffff00" />
                        <Chart2 />
                        <h4 className='footnote'>
                            <i>
                                Source:Economic Survey of Karnataka 2021-22
                                <br></br>

                            </i>
                        </h4> */}

                        <Title>
                            Chart 1.2: Sectoral growth in GSDP
                        </Title>
                        <ImageComponent  src={c12} color="#ffffff00" />
                        <Para>
                            {ctx.chapterOne.Profile.Para11}
                        </Para>

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
                        <FloatingActionButtons back="/overview/introduction" forward="/overview/basis" />

                        <Title>
                            {ctx.chapter1kannada.Content.para11a}
                        </Title>
                        {["para12"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para13}
                        </Subtitle>
                        <Para>
                            {ctx.chapter1kannada.Content.para13a.substring(0, 344)}

                            <span className="tooltip">
                                {ctx.chapter1kannada.Content.para13a.substring(344, 349)}
                                <span className="tooltiptext">
                                    2020-21ರ ಭಾರತದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆಯ ಪ್ರಕಾರ
                                </span>
                                <sup>1</sup>
                            </span>

                            {ctx.chapter1kannada.Content.para13a.substring(349,)}
                        </Para>
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para14}
                        </Subtitle>

                        {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para16}
                        </Subtitle>
                        {["para17","para18","para19","para2"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                       
                         <CustomTable title={"ಕೋಷ್ಟಕ-1.1: ಜಿಡಿಪಿ/ಜಿವಿಎಗೆ ಹೋಲಿಸಿದರೆ ಜಿಎಸ್‌ಡಿಪಿ/ಜಿಎಸ್‌ವಿಎಗಳ ಪ್ರವೃತ್ತಿಗಳು(ಪ್ರಸಕ್ತ ದರಗಳಲ್ಲಿ)"}


                                columns={ctx.tables1kan.Table1}
                                data={ctx.tables1kan.Table1} />
                                <h4 className='footnote'>
                            <i>
                            ಆಕರ: *ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ 2022-23ರ ಪ್ರಕಾರ ಅಖಿಲ ಭಾರತ ಜಿಡಿಪಿ (2018-19 ರಿಂದ 2022-23)
                            # ಜಿಎಸ್‌ಡಿಪಿ (2018-19ರಿಂದ 2021-22) ಅಂಕಿಗಳು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ ೨೦೨೨-೨೩ರ ಪ್ರಕಾರ ಮತ್ತು ೨೦೨೨-೨೩ರ ಜಿಎಸ್‌ಡಿಪಿ ಅಂಕಿಗಳು ಭಾರತ ಸರ್ಕಾರದ ಹಣಕಾಸು ಮಂತ್ರಾಲಯದ ಪ್ರಕಾರ
                            ^ ಜಿವಿಎ ಅಂಕಿಗಳನ್ನು ರಾಷ್ಟೃೀಯ ಲೆಕ್ಕಗಳ ಅಂಕಿಅಂಶಗಳು, ಸಿಎಸ್‌ಒ, ಎಮ್‌ಒಎಸ್‌ಪಿಎಲ್‌ ನಿಂದ ಪಡೆಯಲಾಗಿದೆ.
                            $ ಜಿವಿಎಸ್‌ಎ ಅಂಕಿಗಳು ಕರ್ನಾಟಕದ ಆರ್ಥಿಕ ಮತ್ತು ಅಂಕಿಅಂಶಗಳ ನಿರ್ದೇಶನಾಲಯದ ಪ್ರಕಾರ
                             @ ಕರ್ನಾಟಕ ಸರ್ಕಾರದ 2022-23ರ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆಯ ಪ್ರಕಾರ ತಲಾ ಜಿಎಸ್‌ಡಿಪಿ (2018-19 ರಿಂದ 2021-22) ಮತ್ತು 2022-23ನೇ ಸಾಲಿನ ತಲಾ ಜಿಎಸ್‌ಡಿಪಿಯನ್ನು 2022-23ರ ಕರ್ನಾಟಕದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆಯ ಪ್ರಕಾರ 6.75 ಕೋಟಿ ರಾಜ್ಯದ ಪ್ರಕ್ಷೇಪಿತ  ಜನಸಂಖ್ಯೆಯ ಆಧಾರದ ಮೇಲೆ ಲೆಕ್ಕ ಹಾಕಲಾಗಿದೆ. 
                             a. ೨೦೧೮-೧೯ರಿಂದ ೨೦೨2-೨3ರ ಅವಧಿಗೆ ತಲಾ ಜಿಡಿಪಿಯನ್ನು ಭಾರತ ಸರ್ಕಾರದ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆಯ ಜನಸಂಖ್ಯಾ ಅಂಕಿಗಳನ್ನು ಪರಿಗಣಿಸಿ ಲೆಕ್ಕ ಹಾಕಲಾಗಿದೆ

                            </i>
                        </h4>
                        {["para21a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={k1} color="#ffffff00" />
                          {["para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        {["para22","para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                    <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={k2} color="#ffffff00" />

                        {["para24"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                  
                        
                       
                       
                       
                        
                         



                       

                        {/* Table 1 goes here */}
                       
                        {/* <h4>
                            {ctx.chapter1kannada.Content.t1f1} <br></br>
                            {ctx.chapter1kannada.Content.t1f2}<br></br>
                            {ctx.chapter1kannada.Content.t1f3}
                        </h4> */}
                      
                        {/* <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={kc1} color="#ffffff00" /> */}

                        {/* <h4 className='footnote'>
                            <i>
                                ಆಕರ: ಅಖಿಲ ಭಾರತ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಮತ್ತು ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಅಂಕಿ ಅಂಶಗಳು (201೭-1೮ರಿಂದ
                                ೨೦೨೦-೨೧) ಕರ್ನಾಟಕ  ಸರ್ಕಾರ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ - 202೧-2೨. <br></br>
                                ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದ ಅಂಕಿ ಅಂಶಗಳು 2020-21, ಅಂಕಿಅಂಶಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ಅನುಷ್ಠಾನ ಸಚಿವಾಲಯದ ಪ್ರಕಾರ.

                            </i>
                        </h4> */}
                        {/* Chart 1 goes here */}
                        {/* <Chart1 /> */}
                        {/* <Chart1Kan/> */}
                        {/* <Para>
                            {ctx.chapter1kannada.Content.para12.substring(0, 403)}

                            <span className="tooltip">
                                {ctx.chapter1kannada.Content.para12.substring(403, 413)}
                                <span className="tooltiptext">
                                    ಉತ್ಪನ್ನದ ಮೇಲಿನ ತೆರಿಗೆಗಳು ಅಥವಾ ಸಹಾಯಧನಗಳನ್ನು ಉತ್ಪನ್ನದ ಘಟಕವನ್ನಾಗಿ ಪಾವತಿಸಲಾಗುತ್ತದೆ/ ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ.
                                    ಉದಾಹರಣೆಯಾಗಿ ಉತ್ಪನ್ನದ ಮೇಲಿನ ತೆರಿಗೆಗಳಿಗೆ ಅಬಕಾರಿ ತೆರಿಗೆ, ಮಾರಾಟ ತೆರಿಗೆ, ಸೇವಾ ತೆರಿಗೆ ಮತ್ತು ಆಮದು ಮತ್ತು ರಫ್ತು
                                    ಸುಂಕಗಳಾಗಿವೆ. ಬ್ಯಾಂಕಿನ ಮೂಲಕ ಪಡೆಯುವ ಉತ್ಪನ್ನ ಸಹಾಯಧನಗಳು ಆಹಾರ, ಪೆಟ್ತೋಲಿಯಮ್ ಮತ್ತು ಗೊಬ್ಬರ
                                    ಸಹಾಯಧನಗಳು, ರೈತರಿಗೆ ನೀಡಲಾಗುವ ಬಡ್ಡಿ ಸಹಾಯಧನಗಳು, ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳು ಮುಂತಾದವುಗಳನ್ನು
                                    ಒಳಗೊಂಡಿವೆ.
                                </span>
                                <sup>3</sup>
                            </span>

                            {ctx.chapter1kannada.Content.para12.substring(413,)}
                        </Para> */}
                       
                        
                        {/* <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={kc2} color="#ffffff00" /> */}
                        <h4>
                            
                            <br></br>

                        </h4>
                        
                        {/* <Title>
                            ನಕ್ಷೆ-1.3: ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನದಲ್ಲಿ ವಿಭಾಗೀಯ ಬೆಳವಣಿಗೆ
                        </Title> */}
                        {/* <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={kc3} color="#ffffff00" /> */}
                       
                        {/* <Chart3 /> */}

                     
                       
                        {/* { <ImageComponent flex="2" aspectRatio="2" resizeMode='contain' src={k3} color="#ffffff00" /> } */}
                     
                        {/* <Chart4 /> */}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Profile
