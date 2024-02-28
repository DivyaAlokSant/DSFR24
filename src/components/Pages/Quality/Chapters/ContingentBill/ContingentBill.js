import React, { useContext, useState } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table10kan from "../../../Tables/Chapter4kan/Table10";
import c43 from '../../../../../Images/c43.png'
import k43 from '../../../../../Images/k43.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import { Chart3 as Chart3Chap4 } from '../../../Charts/Chap4Charts'
import CustomTable from "../../../../CustomTable/CustomTable";
const ContingentBill = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart43.PNG')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });

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
                        <FloatingActionButtons back="/quality/balances" forward="/quality/PDA" />
                        <Title>
                            {ctx.chapter4kannada.Content.para66}
                        </Title>
                        <Para>
                            {ctx.chapter4kannada.Content.para67}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
                        <ImageComponent src={k43}  aspectRatio={1 / 0.5} />
                       <h4> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು <br></br>		*ಸಾಲಗಳು ಮತ್ತು ಮುಂಗಡಗಳನ್ನು ಹೊರತುಪಡಿಸಿ </h4>
                        <Para>
                            {ctx.chapter4kannada.Content.para68}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table10kan />
                        <h4>ಆಕರ-ಎಮ್‌ಸಿಎ ಮೇಲಿನ ವರದಿ ಮತ್ತು ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h4>
                        <Para>
                            {ctx.chapter4kannada.Content.para69}
                        </Para>
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default ContingentBill