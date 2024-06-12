import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table3 from '../../../Tables/Chapter1/Table3'
import Table3kan from '../../../Tables/Chapter1kan/Table3'
import Subtitle from '../../../../Subtitle/Subtitle'
import CustomTable from '../../../../CustomTable/CustomTable'


const AssetsSnapshot = () => {

    const ctx = useContext(MyContext)
    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/snapshot-finances" forward="/overview/fiscalparams" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para43}
                        </Title>
                        {["Para44"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                          <h3 className='headnote'>
                        ₹ in crore
                       </h3>
                        <Table3 />
                        <h4 className='footnote'>
                            <i>Source:Finance Accounts</i>     </h4>
                            <h4 className='footnote'>
                            <i>
                                {ctx.tables1.T3F1}
                                <br></br>
                                </i></h4>
                   
                        {["Para45"].map((item, ind) =>
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
                        <FloatingActionButtons back="/overview/snapshot-finances" forward="/overview/fiscalparams" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para50}
                        </Title>
                        
                        
                        {["para51","para52"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        
                        <CustomTable title={"ಕೋಷ್ಟಕ-1.3: ಆಸ್ತಿಗಳು ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಗಳ ಸಂಕ್ಷಿಪ್ತ ಸ್ಥಿತಿ"}


                         columns={ctx.tables1kan.Table3}
                         data={ctx.tables1kan.Table3} />
                        <h4 className='footnote'>
                            <i>
                                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                                <br></br>
                                * ಭಾರತ ಸರ್ಕಾರಕ್ಕೆ ಪರಿಣಾಮಕಾರಿ ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳು `೧೪,೮೬೯ ಕೋಟಗಳಷ್ಟಾಗುತ್ತದೆ ಏಕೆಂದರೆ, ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚ ಇಲಾಖೆಯು ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್‌-ಟು-ಬ್ಯಾಕ್‌ ಸಾಲವಾಗಿ ಋಣ ಸ್ವೀಕೃತಿ ಅಡಿಯಲ್ಲಿ ನೀಡಿದ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರ ಧನವಾದ ೨೦೨೦-೨೧ರಲ್ಲಿ `೧೨,೪೦೭ ಕೋಟಿ ಮತ್ತು ೨೦೨೧-೨೨ರಲ್ಲಿ `೧೮,೧೦೯ ಕೋಟಿಗಳನ್ನು ಹಣಕಾಸು ಅಯೋಗದಿಂದ ನಿಗದಿಪಡಿಸುವ ಯಾವುದೇ ಮಾನದಂಡದಡಿಯಲ್ಲಿ ರಾಜ್ಯದ ಸಾಲ ಎಂದು ಪರಿಗಣಿಸುವುದಿಲ್ಲ ಎಂದು ನಿರ್ದರಿಸಿತು. 
                                  
                            </i>
                        </h4>
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default AssetsSnapshot
