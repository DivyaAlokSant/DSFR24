import React, { useContext} from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import CustomTable from "../../../../CustomTable/CustomTable";
import Table4kan from "../../../Tables/Chapter4kan/Table4";
import Table4akan from "../../../Tables/Chapter4kan/Table4a";
import ImageComponent from 'material-ui-image'

const Ndischarge = () => {

    const ctx = useContext(MyContext)

    


    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/NonRemittance" forward="/quality/fund-transfer" />
                        <Title>
                            {ctx.chapterFour.Content.para14}
                        </Title>
                        {["para15", "para16"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)} 
                            <h3 className='headnote'>
                                ₹ In crore
                            </h3>

                            <CustomTable title={"Table 4.3: Details of interest not paid"}
                                columns={ctx.tables4.Table3}
                                data={ctx.tables4.Table3} />    
                                   <h4 className='footnote'><i>
                                   * Closing Balance as of Dec 2022</i>
                        </h4>

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
                        <FloatingActionButtons back="/quality/NonRemittance" forward="/quality/fund-transfer" />
                        <Title>{ctx.chapter4kannada.Content.para14}</Title>
                        {["para15","para16"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.2: ಗಳಿಸಿದ ಬಡ್ಡಿ ಮತ್ತು ಅದರ ವಹಿವಾಟಿನ ವಿವರಗಳು"}
                            
                            columns={ctx.tables4kan.Table4}
                            data={ctx.tables4kan.Table4} /> 
                                <h4 className='footnote'>
                <i>
                * ಡಿಸೆಂಬರ್‌ 2022ರಲ್ಲಿದ್ದಂತೆ ಅಂತಿಮ ಶಿಲ್ಕು
                   
                </i></h4> 
                      

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Ndischarge