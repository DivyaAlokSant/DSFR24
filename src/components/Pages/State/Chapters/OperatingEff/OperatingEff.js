import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Subtitle from "./../../../../Subtitle/Subtitle"
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Table8 from "../../../Tables/Chapter5/Table8";
import Table8kan from "../../../Tables/Chapter5kan/Table8";
import Table9 from "../../../Tables/Chapter5/Table9";
import Table9kan from "../../../Tables/Chapter5kan/Table9";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const OperatingEff = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Performance" forward="/State/Loss" />

                        <Subtitle>
                            {ctx.chapterFive.para44}
                        </Subtitle>
                        {["para45"].map(
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
                    <FloatingActionButtons back="/State/Performance" forward="/State/Loss"  />


                        <Title>
                            {ctx.chapter5kannada.Content.para36}
                        </Title>
                        <Para>
                            {ctx.chapter5kannada.Content.para37}
                        </Para>
                       
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default OperatingEff