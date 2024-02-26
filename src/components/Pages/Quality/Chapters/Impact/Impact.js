import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const ImpactMajor = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/quality/cash" forward="/quality/compliance" />
                         
                        <Title>
                        {ctx.chapterFour.Content.para115}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para116}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                <Navbar />
                <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/quality/non-submission" forward="/quality/misappropriations" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para91}
                    </Title>
                    {["para92"].map((item, ind) =>
                        <Para key={ind / 10}>
                            {ctx.chapter4kannada.Content[item]}
                        </Para> )}
                
                </div>
            </div>
            : <div>
                <Navbar />
                <FaSpinner icon="spinner" className="spinner" />
            </div>)
    )
}

export default ImpactMajor