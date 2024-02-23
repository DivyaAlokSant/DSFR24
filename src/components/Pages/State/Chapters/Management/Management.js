import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Subtitle from "./../../../../Subtitle/Subtitle"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Management= () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Result" forward="/State/Conclusions" />

                        <Subtitle>
                            {ctx.chapterFive.para124}
                        </Subtitle>
                        {["para125","para126"].map(
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
                    <FloatingActionButtons back="/State/Result" forward="/State/Conclusions"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para99}
                        </Title>
                        {["Para100", "Para101"].map((item, ind) =>
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

export default Management