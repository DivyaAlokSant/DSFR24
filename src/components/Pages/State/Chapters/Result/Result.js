import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import Subtitle from "./../../../../Subtitle/Subtitle"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Result = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Cag" forward="/State/Management" />

                        <Title>
                            {ctx.chapterFive.Fifth.Para97}
                        </Title>
                        <Subtitle>
                          
                            {ctx.chapterFive.Fifth.Para98}
                            
                        </Subtitle>
                     

                        <Para>
                              {ctx.chapterFive.Fifth.Para98a}
                        </Para> 

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para106}
                            </i>
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para107}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para108}
                            </i>
                        </Subtitle>

                        <Para>
                              {ctx.chapterFive.Fifth.Para109}
                        </Para> 

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para110}
                            </i>
                        </Subtitle>

                        {["Para111", "Para112"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}

                        <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para113}
                            </i>
                        </Subtitle>

                        {["Para114"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                   
                            </Para>)}
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para115}
                            </i>
                        </Subtitle>

                            {["Para116", "Para117"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                
                                        {ctx.chapterFive.Fifth[item]}
                                
                                </li> 
                            </Para>)}    

                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para119}
                            </i>
                        </Subtitle>

                            {["Para120", "Para121"].map((item, ind) =>
                             <Para key={ind / 10}>
                                <li>
                                        {ctx.chapterFive.Fifth[item]}
                                </li>
                            </Para>)} 
                            
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para121a}
                            </i>
                        </Subtitle>
                        {["Para121b", "Para121c"].map((item, ind) =>
                             <Para key={ind / 10}>
                                <li>
                                        {ctx.chapterFive.Fifth[item]}
                                </li>
                            </Para>)} 
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para121d}
                            </i>
                        </Subtitle>
                        {["Para121e", "Para121f"].map((item, ind) =>
                             <Para key={ind / 10}>
                                <li>
                                        {ctx.chapterFive.Fifth[item]}
                                </li>
                            </Para>)} 
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para121g}
                            </i>
                        </Subtitle>
                        {["Para121h"].map((item, ind) =>
                             <Para key={ind / 10}>
                               
                                        {ctx.chapterFive.Fifth[item]}
                                
                            </Para>)} 
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para121i}
                            </i>
                        </Subtitle>
                        {["Para121j"].map((item, ind) =>
                             <Para key={ind / 10}>
                               
                                        {ctx.chapterFive.Fifth[item]}
                                
                            </Para>)} 
                            <Subtitle>
                            <i>
                            {ctx.chapterFive.Fifth.Para121k}
                            </i>
                        </Subtitle>
                        {["Para121l"].map((item, ind) =>
                             <Para key={ind / 10}>
                               
                                        {ctx.chapterFive.Fifth[item]}
                                
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
                    <FloatingActionButtons back="/State/Cag" forward="/State/Management"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para80}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para81}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para82}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para83}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para84}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para85}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para86}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para87}
                            </i>
                        </Subtitle>
                        {["Para88", "Para89"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para90}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para91}
                        </Para> 
                        <Para>
                            <h3>
                            {ctx.chapter5kannada.Content.Para92}
                            </h3>
                        </Para> 
                        {["Para93", "Para94", "Para95"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>   
                                {ctx.chapter5kannada.Content[item]}
                                </li>
                            </Para>)} 
                        <Para>
                            <h3>
                            {ctx.chapter5kannada.Content.Para96}
                            </h3>
                        </Para> 
                        {["Para97", "Para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>   
                                {ctx.chapter5kannada.Content[item]}
                                </li>
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Result