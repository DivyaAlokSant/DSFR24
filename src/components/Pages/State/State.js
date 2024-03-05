import React, { useContext} from "react"
import Navbar from "../../Navbar/Navbar"
import './State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
// import Table10 from "../../../Tables/Chapter4/Table10";
// import Table10kan from "../../../Tables/Chapter4kan/Table10";

// import ImageComponent from 'material-ui-image'
// import { getFirebase } from '../../../../../firebase/firebase'

const State = () => {

    const ctx = useContext(MyContext)
    

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/recommendations" forward="/State/Definition" />


                <Title>
                            {ctx.chapterFive.para1}
                </Title>
                <Para tooltips={[
       { word: "revealed[28]", tooltip:"Six SPSEs failed to provide SFAR related information sought (July 23), which includes two working companies viz., Karnataka State Medical Supplies Corporation Limited, and Karnataka Handloom Development Corporation Limited" },
       { word: "year[29]", tooltip:"Latest accounts certified upto 30 September 2023" },                    
        ]}>
                         {ctx.chapterFive.para2}
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
                    <FloatingActionButtons back="/quality/recommendations" forward="/State/Definition" />
                    <Title>
                   {ctx.execsummarykan.para47}
                        </Title>
                        <Para>
                        {ctx.execsummarykan.para48}
                        </Para>
                        <Para>
                        {ctx.execsummarykan.para49}
                        </Para>
                        <Para>
                        {ctx.execsummarykan.para50}
                        </Para>
                        <Para>
                        {ctx.execsummarykan.para51}
                        </Para>
                        <Para>
                        {ctx.execsummarykan.para52}
                        </Para>
                        
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default State