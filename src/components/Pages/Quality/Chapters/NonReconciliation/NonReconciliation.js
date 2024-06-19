import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import CustomTable from "../../../../CustomTable/CustomTable";
import ImageComponent from 'material-ui-image'
import c43 from '../../../../../Images/c43.png'
import ck17 from '../../../../../Images/ck17.png'


const NonReconciliation = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/OB" forward="/quality/cash" />


                        <Title>
                            {ctx.chapterFour.Content.para108}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para109}
                        </Para>
                        <ImageComponent src={c43} alt="chart2.20" aspectRatio={1 / .5} />
                        <Para>
                            {ctx.chapterFour.Content.para110}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.16: Status of Reconciliation of Receipts and Expenditure figures"}
                            columns={ctx.tables4.Table16}
                            data={ctx.tables4.Table16} />
                        <h3 className='footnote'>
                        Source- Report on MCA and Finance Accounts <br></br>
                        </h3>
                        <Para>
                            {ctx.chapterFour.Content.para111}
                        </Para>

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
                        <FloatingActionButtons back="/quality/OB" forward="/quality/cash" />

                        <Title>
                            {ctx.chapter4kannada.Content.para92}
                        </Title>
                      
                        {["para93"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <ImageComponent src={ck17} alt="chart2.14" aspectRatio={1 / 0.4} />
                        {["para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.16: ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವೆಚ್ಚದ ಅಂಕಿಗಳ ಸಮನ್ವಯದ ಸ್ಥಿತಿ "}


                            columns={ctx.tables4kan.Table16}
                            data={ctx.tables4kan.Table16} />        
                         {["para95"].map((item, ind) =>
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

export default NonReconciliation