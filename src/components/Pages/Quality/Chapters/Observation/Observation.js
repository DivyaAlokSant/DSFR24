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


const Observation = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/compliance" forward="/quality/conclusion" />

                        <Title>
                            {ctx.chapterFour.Content.para120}
                        </Title>
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
                        <FloatingActionButtons back="/quality/misappropriations" forward="/quality/conclusion" />

                        <Title>
                            {ctx.chapter4kannada.Content.para95}
                        </Title>
                        {["para97"].map((item, ind) =>
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

export default Observation