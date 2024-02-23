import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "../../../../Subtitle/Subtitle";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table11 from "../../../Tables/Chapter4/Table11";
import Table11kan from "../../../Tables/Chapter4kan/Table11";

const IndiscriminateUse = () => {
    const ctx = useContext(MyContext)
    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/PDA" forward="/quality/OB" />
                
                        <Title>
                            {ctx.chapterFour.Content.para83}
                        </Title>
                        {["para84", "para85"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                        {/* <Para>
                        {ctx.chapterFour.Fourth.Para4}
                        </Para> */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ?<div >
                <Navbar />
                <div className="contentwrapper" id="home">
                <FloatingActionButtons back="/quality/reconciliation" forward="/quality/submission" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para74}
                    </Title>
                    <Subtitle>
                    {ctx.chapter4kannada.Content.para75}   
                    </Subtitle>
                    {["para76","para77"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                        <Table11kan/>
                     
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default IndiscriminateUse