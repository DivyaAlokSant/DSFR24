import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Recommend= () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Conclusions" forward="//appendices/appendix-1" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para130}
                        </Title>
                        {["Para131", "Para132","Para133"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    
                                        {ctx.chapterFive.Fifth[item]}
                                    
                                </li>
                            </Para>)}

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
                    <FloatingActionButtons back="/State/Conclusions" forward="/appendices/appendix-1"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para106}
                        </Title>
                        {["Para107", "Para108"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                    <li>   
                                    
                                        {ctx.chapter5kannada.Content[item]}
                                    
                                    </li>
                                </h3>
                            </Para>)} 


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Recommend