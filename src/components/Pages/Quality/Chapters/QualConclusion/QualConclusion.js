import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"


const QualConclusion = () => {

    const ctx = useContext (MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/follow" forward="/quality/recommendations" />

                        <Title>
                            {ctx.chapterFour.Content.para139}
                        </Title>
                        {["para140", "para141", "para142", "para143", "para144"].map((item, ind) =>
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
                        <FloatingActionButtons back="/quality/follow" forward="/quality/recommendations" />
                        <Title>
                            {ctx.chapter4kannada.Content.para98}
                        </Title>
                        {["para99", "para100", "para101", "para102","para102a"].map((item, ind) =>
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

export default QualConclusion