import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import c21 from '../../../../../Images/c21.png'

import ImageComponent from 'material-ui-image'
import Table2 from '../../../Tables/Chapter2/Table2'
import Table2kan from '../../../Tables/Chapter2kan/Table2'

const  SourcesApplication = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                        <Title>{ctx.chapterTwo.Para4}</Title>
                        <Para>
                            {ctx.chapterTwo.Para5}
                        </Para>
                        
                        <Table2/>
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {/* <Chart11a />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        <Chart12b />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4> */}
                        <ImageComponent flex="4" aspectRatio = "2" resizeMode = 'contain' src={c21} color ="#ffffff00" />
                        
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
                <FloatingActionButtons back="/finances/major-sources" forward="/finances/resources" />
                    <Title>{ctx.chapter2kannada.Content.para7}</Title>
                    <Para>
                        {ctx.chapter2kannada.Content.para8}
                    </Para>
                    <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    <Table2kan/>
                    <h4 className='footnote'>
                            <i>
                            ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                                <br></br>
                                * ಋಣ ಸ್ವೀಕೃತಿಗಳಡಿಯಲ್ಲಿ ರಾಜ್ಯಕ್ಕೆ ಬ್ಯಾಕ್-ಟು-ಬ್ಯಾಕ್ ಸಾಲವಾಗಿ ನೀಡಲಾದ ೨೦೨೦-೨೧ರಲ್ಲಿ `12,407 ಕೋಟಿ ಮತ್ತು ೨೦೨೧-೨೨ರಲ್ಲಿ  `೧೮,೧೦೯ ಕೋಟಿ  ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಪರಿಹಾರವನ್ನು, ಹಣಕಾಸು ಆಯೋಗವು ಸೂಚಿಸಬಹುದಾದ ಯಾವುದೇ ಮಾನದಂಡಗಳಿಗೆ ರಾಜ್ಯದ ಸಾಲವೆಂದು ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ ಎಂದು ಭಾರತ ಸರ್ಕಾರದ ವೆಚ್ಚ ಇಲಾಖೆಯು ನಿರ್ಧರಿಸಿರುವುದರಿಂದ ಪರಿಣಾಮಕಾರಿ ಸಾರ್ವಜನಿಕ ಋಣ ಸ್ವೀಕೃತಿಗಳು (ನಿವ್ವಳ) ೨೦೨೦-೨೧ರಲ್ಲಿ `೬೧,೧೦೫ ಕೋಟಿ ಮತ್ತು ೨೦೨೧-೨೨ರಲ್ಲಿ `೪೮,೫೬೦ ಕೋಟಿ ಆಗುತ್ತದೆ.
                            </i>
                    </h4>
                    {/* <ImageComponent  src={k212} alt="chart23" aspectRatio={1 / 0.6} /> */}
                    
                    <Para>
                        {ctx.chapter2kannada.Content.t2fa}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f2}
                    </Para>
                    <Para>
                        {ctx.chapter2kannada.Content.t2f1}
                    </Para>
                    
                    {/* <Chart11a />

                    <Chart12b />
                    */}
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default SourcesApplication