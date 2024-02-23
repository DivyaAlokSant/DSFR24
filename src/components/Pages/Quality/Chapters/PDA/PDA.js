import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'
import Subtitle from "../../../../Subtitle/Subtitle";


const PDA = () => {

    const ctx = useContext(MyContext)
    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/non-reconciliation" forward="/quality/compliance" />

                        <Title>
                            {ctx.chapterFour.Content.para36}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para37}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para38}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para39}
                        </Para>

                        <Subtitle>
                            {ctx.chapterFour.Content.para40}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para41}
                        </Para>
                        {["para42", "para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapterFour.Content.para44}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para45}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para46}
                        </Para>
                        {["para47", "para48"].map((item, ind) =>
                            <Subtitle key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Subtitle>)}
                        {["para49", "para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapterFour.Content.para51}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para52}
                        </Subtitle>
                        {["para53", "para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        {["para55", "para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        {["para57", "para58", "para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterFour.Content[item]}
                                </li>
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para60}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para61}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para62}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFour.Content.para63}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para64}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para65}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para66}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para67}
                        </Subtitle>
                        {["para68", "para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para70}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para71}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para72}
                        </Subtitle>
                        {["para73", "para74", "para75"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                                {ctx.chapterFour.Content.para76}
                            </i>
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFour.Content.para77}
                        </Subtitle>
                        {["para78", "para79"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para80}
                        </Subtitle>
                        {["para81", "para82"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para83}
                        </Subtitle>
                        {["para84", "para85"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        {["para86", "para87", "para88"].map((item, ind) =>
                            <Subtitle key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Subtitle>)}

                        <Para>
                            {ctx.chapterFour.Content.para89}
                        </Para>
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
                        <Para>
                            {ctx.chapterFour.Content.para107}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para108}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para109}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para110}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para111}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para112}
                        </Subtitle>
                        {["para113", "para114"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para115}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para116}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para117}
                        </Subtitle>
                        {["para118", "para119"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para120}
                        </Subtitle>

                        <Subtitle>
                            {ctx.chapterFour.Content.para121}
                        </Subtitle>
                        {["para122", "para123"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para124}
                        </Subtitle>
                        {["para125", "para126", "para127"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                        <Subtitle>
                            {ctx.chapterFour.Content.para128}
                        </Subtitle>
                        {["para129", "para130", "para131", "para132"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para133}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para134}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para135}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para136}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para137}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para138}
                        </Para>

                        <Subtitle>
                            {ctx.chapterFour.Content.para139}
                        </Subtitle>

                        {["para140", "para141", "para142", "para143", "para144"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para145}
                        </Subtitle>

                        {["para146", "para147", "para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterFour.Content[item]}
                                </li>
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
                        <FloatingActionButtons back="/quality/non-reconciliation" forward="/quality/compliance" />


                        <Title>
                            {ctx.chapter4kannada.Content.para71}
                        </Title>
                        <Para>
                            {ctx.chapter4kannada.Content.para72}
                        </Para>
                        <Para>
                            {ctx.chapter4kannada.Content.para73}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default PDA