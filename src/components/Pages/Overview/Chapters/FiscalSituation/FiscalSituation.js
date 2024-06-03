import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Subtitle from "../../../../Subtitle/Subtitle"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table5 from '../../../Tables/Chapter1/Table5'
import Table6 from '../../../Tables/Chapter1/Table6'
import Table5kan from '../../../Tables/Chapter1kan/Table5'
import Table6kan from '../../../Tables/Chapter1kan/Table6'
import CustomTable from '../../../../CustomTable/CustomTable'

const FiscalSituation = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para55}
                        </Title>
                        {["Para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapterOne.Profile.Para57}
                        </Subtitle>
                        {["Para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        
                        <Table5 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T5F1}
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile.Para58a.substring(0, 177)}

                            <span className="tooltip">
                                {ctx.chapterOne.Profile.Para58a.substring(177, 185)}
                                <span className="tooltiptext">
                                    Borrowings by PSUs and SPVs are Off-budget borrowings
                                </span>
                                <sup>3</sup>
                            </span>
                            {ctx.chapterOne.Profile.Para58a.substring(185,)}

                        </Para>
                        {["Para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                       
               

                        {["Para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                        <Subtitle>
                            {ctx.chapterOne.Profile["Para61"]}
                        </Subtitle>

                        {["Para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table6 />
                        <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T6F1} 
                            </i>
                        </h4>
                 
                        {["Para64"].map((item, ind) =>
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
                        <FloatingActionButtons back="/overview/fiscalparams" forward="/overview/impact" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para64}
                        </Title>
                        
                        {["para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <Subtitle>
                            {ctx.chapter1kannada.Content.para65a}
                        </Subtitle>
                        {["para66"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <CustomTable title={"ಕೋಷ್ಟಕ-1.೬: ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿಗಳ ಅನುಸರಣೆ"}


                          columns={ctx.tables1kan.Table6}
                          data={ctx.tables1kan.Table6} />
                          <h4 className='footnote'>
                            <i>
                            *ಸೂಚಕಗಳನ್ನು ಲೆಕ್ಕಹಾಕುವಾಗ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆಯ ಅನುಷ್ಠಾನದಿಂದಾದ ಕೊರತೆಯ ಪರಿಹಾರವಾಗಿ ಭಾರತ ಸರ್ಕಾರದಿಂದ ಪಡೆದ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್‌ ಸಾಲವನ್ನು (`೩೦,೫೧೬ ಕೋಟಿ) ಋಣವೆಂದು ಪರಿಗಣಿಸಿಲ್ಲ
                            <br></br>
 </i>
                        </h4>

                         {["para67","para68","para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                          <Subtitle>
                            {ctx.chapter1kannada.Content.para7}
                        </Subtitle>
                        {["para70"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <h4 className='headnote'>

                        (` ಕೋಟಿಗಳಲ್ಲಿ)


                        </h4>

                      <CustomTable title={"ಕೋಷ್ಟಕ-1.7: 202೨-2೩ಕ್ಕೆ ಮಧ್ಯಮಾವಧಿ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆಯ ಪ್ರಕ್ಷೇಪಣೆಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಗಳು"}


                      columns={ctx.tables1kan.Table7}
                        data={ctx.tables1kan.Table7} />
                         <h4 className='footnote'>
                          <i>
                         ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು ಮತ್ತು ಮಧ್ಯಂತರ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆ 20೨1-2೫
                            <br></br>


                            </i>
                         </h4>

                          {["para71"].map((item, ind) =>
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

export default FiscalSituation
