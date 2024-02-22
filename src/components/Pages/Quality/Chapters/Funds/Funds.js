import React, { useContext } from "react"
import Navbar from "./../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../../../Context/MyProvider';
import Para from "./../../../../Para/Para"
import Title from "./../../../../Title/Title";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'
import Table1kan from '../../../Tables/Chapter4kan/Table1'
import Subtitle from "./../../../../Subtitle/Subtitle";


const Funds = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="/quality/NonRemittance" />
                        <Title>
                            {ctx.chapterFour.Content.para2}
                        </Title>
                        <Title>
                            {ctx.chapterFour.Content.para3}
                        </Title>
                       
                       
                        {["para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                        <Para>
                            {ctx.chapterFour.Content.para6}
                            
                        </Para>   
                        <Para>                            
                            {ctx.chapterFour.Content.para7}  
                        </Para>
                        
                        {/* <Para>
                            <li>
                                {ctx.chapterFour.first.Para6}
                            </li>
                        </Para>
                        {["Para7", "Para8", "Para9"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.first[item]}
                            </Para>)} */}

                        {/* <h3 className="headnote">
                            ₹ In lakhs
                        </h3>
                        <Table1 /> */}

                        

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
                        <FloatingActionButtons back="/quality" forward="/quality/delay" />
                        <Title>{ctx.chapter4kannada.Content.para1}</Title>

                        <Para>
                            {ctx.chapter4kannada.Content.para2}
                        </Para>
                        <Title>{ctx.chapter4kannada.Content.para3}</Title>
                        <Para>
                            {ctx.chapter4kannada.Content.para4}
                        </Para>
                        {["para5", "para6", "para7", "para8", "para9", "para10", "para11", "para12", "para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className="headnote">
                            (` ಲಕ್ಷಗಳಲ್ಲಿ)
                        </h3>
                       <Table1kan />
                        <Para>
                            {ctx.chapter4kannada.Content.para14}
                        </Para>
                   


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Funds