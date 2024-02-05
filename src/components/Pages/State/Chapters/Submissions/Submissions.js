import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Table11 from "../../../Tables/Chapter5/Table11";
import Table11kan from "../../../Tables/Chapter5kan/Table11";
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Submissions = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Appointment" forward="/State/Cag" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para76}
                        </Title>
                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para77}
                        </Subtitle>

                        <Para>
                            {ctx.chapterFive.Fifth.Para78.substring(0, 185)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para78.substring(186, 187)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para80}
                                </span>
                                <sup>39</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para78.substring(186,)}
                        </Para>

                        {["Para79","Para80", "Para81"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                            <Para>
                            {ctx.chapterFive.Fifth.Para82.substring(0, 73)}

                            <span className="tooltip">
                                {ctx.chapterFive.Fifth.Para82.substring(74, 74)}
                                <span className="tooltiptext">
                                {ctx.chapterFive.Fifth.Para88}
                                </span>
                                <sup>40</sup>
                            </span>

                            {ctx.chapterFive.Fifth.Para82.substring(74,)}
                        </Para>

                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para83}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para84}
                        </Para> 

                        <Table11 />
                        <h4>
                        Number of companies which presented the accounts for the year 2021-22 for C&AG’s audit by 30 September 2022. - Represents number of accounts received and certified by C&AG for 2021-22.
                        </h4>

                        <Para>
                              {ctx.chapterFive.Fifth.Para85}
                        </Para>
                        <Para>
                              {ctx.chapterFive.Fifth.Para85a}
                        </Para>
                        <Para>
                              {ctx.chapterFive.Fifth.Para85b}
                        </Para>
                        
                        


                        <Subtitle>
                            {ctx.chapterFive.Fifth.Para86}
                        </Subtitle>
                        <Para>
                              {ctx.chapterFive.Fifth.Para87}
                        </Para>
                        <Para>
                              {ctx.chapterFive.Fifth.Para87a}
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
                    <FloatingActionButtons back="/State/Appointment" forward="/State/Cag"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para57}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para58}
                            </i>
                        </Subtitle>
                        {["Para59", "Para60","Para61","Para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para63}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para64}
                        </Para> 
                        <Table11kan />
                        <Para>
                            {ctx.chapter5kannada.Content.Para65}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para66}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para67}
                        </Para> 



                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Submissions