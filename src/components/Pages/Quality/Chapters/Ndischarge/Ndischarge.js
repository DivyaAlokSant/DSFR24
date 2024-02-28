import React, { useContext, useState } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table5a from "../../../Tables/Chapter4/Table5a";
import CustomTable from "../../../../CustomTable/CustomTable";
import Table4kan from "../../../Tables/Chapter4kan/Table4";
import Table4akan from "../../../Tables/Chapter4kan/Table4a";
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'
import c42 from '../../../../../Images/c42.png'
import k42 from '../../../../../Images/k42.png'
import { Chart2 as Chart2Chap4 } from '../../../Charts/Chap4Charts'
const Ndischarge = () => {

    const ctx = useContext(MyContext)

    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/chart41.png')
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
                        <FloatingActionButtons back="/quality/delay" forward="/quality/pdaccounts" />
                        <Title>{ctx.chapter4kannada.Content.para22}</Title>

                        <Para>
                            {ctx.chapter4kannada.Content.para23}
                        </Para>
                        <Para>
                            {ctx.chapter4kannada.Content.para24}
                        </Para>
                        <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table4kan />
                        <h4>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು 	
                        <br></br>			* ಮಾರ್ಚ್‌ ೨೦೨೨ರ ಬಿಲ್ಲುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ 
                             </h4>
                             <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ )
          </h3>
                        <ImageComponent src={k42}  aspectRatio={1 / 0.5} />
                       <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರು (ಲೆ ಮತ್ತು ಹ) ಅವರ ಕಛೇರಿ </h4>

                        {["para25", "para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className="headnote">
                        (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table4akan />     
                    {["para27a", "para27b", "para27c","para27d","para27e","para27f","para27g","para27h","para27i","para27j","para27k","para27l","para27m","para27n","para27o","para27p","para27q","para27r","para27s","para27t","para27u","para27v","para27w","para27x","para27y","para27z","para27za", "para27zb", "para27zc", "para27za","para27zd","para27ze","para27zf","para27zg","para27zh","para27zi",].map((item, ind) =>
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

export default Ndischarge