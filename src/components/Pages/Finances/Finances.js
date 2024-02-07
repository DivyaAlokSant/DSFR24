import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Finances.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Finances = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.execsummary
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/impact" forward="/finances/introduction" />
                        <Title>
                            {ctx.chapterTwo.Introduction.title}
                            </Title>
                        <Para>
                            {ctx.chapterTwo.Introduction.para1}
                        </Para>


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execsummarykan
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/impact" forward="/finances/introduction" />
                        <Title>{ctx.execsummarykan.para4}</Title>
                        {['para5'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para8}</Title>
                        {['para9'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        {/* <Title >{ctx.execsummarykan.para15}</Title> */}
                        <Title >{ctx.execsummarykan.para20}</Title>
                        {['para21','para22'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para23}</Title>
                        {['para24'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                         <Title >{ctx.execsummarykan.para25}</Title>
                        {['para26'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                         <Title >{ctx.execsummarykan.para27}</Title>
                        {['para28'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                         <Title >{ctx.execsummarykan.para29}</Title>
                        {['para30'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                         <Title >{ctx.execsummarykan.para31}</Title>
                        {['para32'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
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

export default Finances