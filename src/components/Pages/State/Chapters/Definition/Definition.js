import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "./../../../../Subtitle/Subtitle";
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

                        <Subtitle>
                            {ctx.chapterFive.para3}
                        </Subtitle>
                        {["para4","para5", "para6"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
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