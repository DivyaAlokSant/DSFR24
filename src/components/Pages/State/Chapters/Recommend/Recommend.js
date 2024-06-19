import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "./../../../../Subtitle/Subtitle"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Recommend = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Conclusions" forward="//appendices/appendix-1" />

                        <Subtitle>
                            {ctx.chapterFive.para133}
                        </Subtitle>
                        {["para134", "para135", "para136"].map(
                            (item, ind) => (
                                <Para key={ind / 10}>
                                    <b>
                                    {ctx.chapterFive[item]}
                                    </b>
                                </Para>
                            )
                        )}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter5kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Conclusions" forward="/appendices/appendix-1" />


                        <Title>
                            {ctx.chapter5kannada.Content.Para135}
                        </Title>
                        {["Para136", "Para137","Para138"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                    <li>

                                        {ctx.chapter5kannada.Content[item]}

                                    </li>
                                </h3>
                            </Para>)}
        {["Para139","Para140"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>
                        )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Recommend