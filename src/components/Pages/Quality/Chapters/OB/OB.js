import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import CustomTable from "../../../../CustomTable/CustomTable";
import Subtitle from "../../../../Subtitle/Subtitle";

const OB = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/indiscriminate-use" forward="/quality/non-reconciliation" />

                        <Title>
                            {ctx.chapterFour.Content.para86}
                        </Title>
                        {["para87", "para88"].map((item, ind) =>
                            <Subtitle key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Subtitle>)}

                        <Para>
                            {ctx.chapterFour.Content.para89}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.14: Balances under Suspense and Remittance Head"}
                            columns={ctx.tables4.Table14}
                            data={ctx.tables4.Table14} />
                        {["para90", "para91", "para92", "para93"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterFour.Content.para94}
                        </Para>
                        <Subtitle>
                            <li>
                                {ctx.chapterFour.Content.para95}
                            </li>
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para96}
                        </Para>
                        <Subtitle>
                            <li>
                                {ctx.chapterFour.Content.para97}
                            </li>
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para98}
                        </Para>
                        <Subtitle>
                            <li>
                                {ctx.chapterFour.Content.para99}
                            </li>
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para100}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para101}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para102}
                        </Para>
                        <Subtitle>
                            <li>
                                {ctx.chapterFour.Content.para103}
                            </li>
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para104}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para105}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para106}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.15: Adverse balance under DDR Heads"}
                            columns={ctx.tables4.Table15}
                            data={ctx.tables4.Table15} />
                        <h3 className='footnote'>
                            Source- Office of the AG(A&E) <br></br>
                            Note - There was minus balance under MH 6505, 6506 and 6701, which has not been depicted in the table due to balance being less than rupees one lakh.
                        </h3>

                        <Para>
                            {ctx.chapterFour.Content.para107}
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

                        <FloatingActionButtons back="/quality/indiscriminate-use" forward="/quality/non-reconciliation" />


                        <Title>
                            {ctx.chapter4kannada.Content.para71}
                        </Title>
                        <Title>
                            {ctx.chapter4kannada.Content.para72}
                        </Title>
                        <Subtitle><i>
                           {ctx.chapter4kannada.Content.para73}</i>
                        </Subtitle>
                        {["para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.೧೪: ಅಮಾನತ್ತು ಮತ್ತು ಇರಸಾಲು ಶೀರ್ಷಿಕೆಗಳಡಿಯ ಶಿಲ್ಕುಗಳು "}


                            columns={ctx.tables4kan.Table14}
                            data={ctx.tables4kan.Table14} />        
                     {["para75"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                    {["para76","para77","para78","para79"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                    <Subtitle>
                           {ctx.chapter4kannada.Content.para80}
                        </Subtitle>
                        {["para80a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                    <Subtitle>
                           {ctx.chapter4kannada.Content.para81}
                        </Subtitle>
                        {["para82"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter4kannada.Content.para83}
                        </Subtitle>
                        {["para84"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter4kannada.Content.para85}
                        </Subtitle>
                        {["para86"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter4kannada.Content.para87}
                        </Subtitle>
                        {["para88"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                         <Subtitle><i>
                           {ctx.chapter4kannada.Content.para89}</i>
                        </Subtitle>
                        {["para90"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.15: ಋಣ, ಠೇವಣಿ, ಇರಸಾಲು ಶೀರ್ಷಿಕೆಗಳ ಅಡಿಯಲ್ಲಿ ವ್ಯತಿರಿಕ್ತ ಶಿಲ್ಕುಗಳು "}


                            columns={ctx.tables4kan.Table15}
                            data={ctx.tables4kan.Table15} />        

                            {["para91"].map((item, ind) =>
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

export default OB