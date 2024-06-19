import Subtitle from "./../../../../Subtitle/Subtitle"
import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Cag = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Submissions" forward="/State/Result" />
                        <Subtitle>
                            {ctx.chapterFive.para83}
                        </Subtitle>   
                        <Subtitle>
                            {ctx.chapterFive.para84}
                        </Subtitle>
                        {["para85"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}     
              <Subtitle>
                            {ctx.chapterFive.para86}
                        </Subtitle>
                        {["para87","para88","para89","para90"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}    
            <Subtitle>
                            {ctx.chapterFive.para91}
                        </Subtitle>         
                        {["para92","para93","para94"].map(
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
                    <FloatingActionButtons back="/State/Submissions" forward="/State/Result"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para85}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para86}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para87}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para88}
                            </i>
                        </Subtitle>
                        {["Para89", "Para90","Para91","Para92"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para93}
                            </i>
                        </Subtitle>
                        {["Para94", "Para95","Para96"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                       

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Cag