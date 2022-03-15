import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"


const Quality = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.execsummary
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/budget/Recommendations" forward="/Quality/funds" />
                        <Title>{ctx.execsummary.para3}</Title>
                        {['para4'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para11}</Title>
                        {['para12'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummary.para41}</Title>
                        {['para42', 'para43','para44'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
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
                        <FloatingActionButtons back="/budget/Recommendations" forward="/Quality/funds" />
                        <Title>{ctx.execsummarykan.title}</Title>
                        {['para1', 'para2'].map((item, ind) =>
                            <Para key = {ind/10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para3}</Title>
                        <Title >{ctx.execsummarykan.para4}</Title>
                        {['para5a','para5', 'para6', 'para7'].map((item, ind) =>
                            <Para key = {ind/10}>
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

export default Quality
