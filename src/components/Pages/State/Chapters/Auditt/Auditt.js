import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Subtitle from "../../../../Subtitle/Subtitle";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Auditt = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Loss" forward="/State/Appointment" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para71}
                        </Title>
                        <Subtitle>
                              {ctx.chapterFive.Fifth.Para72}
                        </Subtitle>  
                        {["Para72a", "Para72b"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}
                            <Subtitle>
                              {ctx.chapterFive.Fifth.Para72c}
                        </Subtitle> 
                            {[ "Para72d", "Para72e", "Para72f"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}
                            <Para>
                            {ctx.chapterFive.Fifth.Para72g}
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
                    <FloatingActionButtons back="/State/Loss" forward="/State/Appointment"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para52s}
                        </Title>
                        <Para>
                            {ctx.chapter5kannada.Content.Para53}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Auditt