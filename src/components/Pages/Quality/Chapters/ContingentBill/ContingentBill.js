import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table10kan from "../../../Tables/Chapter4kan/Table10";
import c42 from '../../../../../Images/c42.png'

import ImageComponent from 'material-ui-image'
import CustomTable from "../../../../CustomTable/CustomTable";
import ck16 from '../../../../../Images/ck16.png'

const ContingentBill = () => {

    const ctx = useContext(MyContext)
    
    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/delay" forward="/quality/PDA" />


                        <Title>
                            {ctx.chapterFour.Content.para28}
                        </Title>
                        {["para29", "para30"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.5: Year wise progress in submission of NDC bills against the AC bills"}
                            columns={ctx.tables4.Table5}
                            data={ctx.tables4.Table5} />
                            
                            <h4>
                            Source: Finance Accounts 				*Excluding Bills for the Month of March 2023                
          </h4>
                        <Para>                            
                            {ctx.chapterFour.Content.para31}  
                        </Para> 

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.6: Age-wise pendency of AC bills"}
                            columns={ctx.tables4.Table6}
                            data={ctx.tables4.Table6} />

                        <Para>                            
                            {ctx.chapterFour.Content.para32}  
                        </Para> 
                        <ImageComponent src={c42} alt="chart2.20" aspectRatio={1 / .45} />

                        {["para33", "para34", "para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                     </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/delay" forward="/quality/PDA" />
                        <Title>
                            {ctx.chapter4kannada.Content.para27}
                        </Title>
                        {["para27a","para27b"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.5: ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳಿಗೆ ಸವಿವರ ಬಿಲ್ಲುಗಳ ಸಲ್ಲಿಕೆಯಲ್ಲಿನ ವರ್ಷಾವಾರು ಪ್ರಗತಿ "}
                            
                            columns={ctx.tables4kan.Table5}
                            data={ctx.tables4kan.Table5} /> 
                                <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು 				* ಮಾರ್ಚ್‌ ೨೦೨3ರ ಬಿಲ್ಲುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ 
                </i></h4> 
             
                        {["para27c"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.6: ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ವರ್ಷಾವಾರು ಬಾಕಿ ಇರುವಿಕೆ"}
                            
                            columns={ctx.tables4kan.Table6}
                            data={ctx.tables4kan.Table6} /> 
                         {["para27d"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <ImageComponent src={ck16} alt="chart2.20" aspectRatio={1 / .45} />      
                        {["para27e","para27f","para27g"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default ContingentBill