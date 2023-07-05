import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from "../../../Tables/Chapter5/Table1";
import Table1kan from "../../../Tables/Chapter5kan/Table1";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Spse = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Mandate" forward="/State/Investment" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para7}
                        </Title>

                        <Para>
                            {ctx.chapterFive.Fifth.Para8.substring(0, 322)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para8.substring(323, 324)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para15}
                                </span>
                                <sup>24</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para8.substring(323, 372)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para8.substring(373, 374)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para16}
                                </span>
                                <sup>25</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para8.substring(373,403)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para8.substring(404, 405)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para17}
                                </span>
                                <sup>26</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para8.substring(403,)}

                        </Para>  


                        {["Para10"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                            <Table1 />

                            <Para>
                              {ctx.chapterFive.Fifth.Para11}
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
                        <FloatingActionButtons back="/State/Mandate" forward="/State/Investment" />


                        <Title>
                            {ctx.chapter5kannada.Content.para8}
                        </Title>
                        {["para9", "para10"].map((item, ind) =>
                            <Para key={ind / 10}>
                            
                                    {ctx.chapter5kannada.Content[item]}
                            
                            </Para>)}
                        <Table1kan />

                        <Para>
                        {ctx.chapter5kannada.Content.para10a}
                        </Para>    

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Spse