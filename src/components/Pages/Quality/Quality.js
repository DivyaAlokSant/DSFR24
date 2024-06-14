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
                        <Title>{ctx.chapterFour.Content.para1a}</Title>
                        <Title>{ctx.chapterFour.Content.para1b}</Title>
                        {["para1"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFour.Content[item]}</Para>
            )
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
                        <Title>
                            {ctx.chapter4kannada.Content.para01}
                        </Title>
                        {["para1"].map((item, ind) =>
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

export default Quality
