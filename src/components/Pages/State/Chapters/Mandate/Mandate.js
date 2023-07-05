import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Mandate = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
        ? (ctx.chapterFive
            ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/State/Definition" forward="/State/Spse" />
                        <Title>
                            {ctx.chapterFive.Fifth.Para5}
                        </Title>
                        <Para>
                        {ctx.chapterFive.Fifth.Para6}
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
                    <FloatingActionButtons back="/State/Definition" forward="/State/Spse" />


                        <Title>
                            {ctx.chapter5kannada.Content.para6}
                        </Title>
                        <Para>
                        {ctx.chapter5kannada.Content.para7}
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Mandate