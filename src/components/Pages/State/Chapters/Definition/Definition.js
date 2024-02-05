import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Definition = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State" forward="/State/Mandate" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para2}
                        </Title>
                        {/* {["Para3", "Para4"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    <i>
                                        {ctx.chapterFive.Fifth[item]}
                                    </i>
                                </li>
                            </Para>)} */}
                            {["Para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFive.Fifth[item]}
                            </Para>)}
                        <Para>
                            {ctx.chapterFive.Fifth.Para4.substring(0, 26)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para4.substring(27, 28)}
                                <span className="tooltiptext">
                                Companies (Removal of Difficulties) Seventh Order, 2014 issued by Ministry of Corporate Affairs vide Gazette Notification dated 4 September 2014.</span>
                                <sup>30</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para4.substring(26,)}
                            {["Para4a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFive.Fifth[item]}
                            </Para>)}
                        </Para>    

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
                    <FloatingActionButtons back="/State" forward="/State/Mandate" />


                        <Title>
                            {ctx.chapter5kannada.Content.para3}
                        </Title>
                        {["para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                    {ctx.chapter5kannada.Content[item]}
                                
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Definition