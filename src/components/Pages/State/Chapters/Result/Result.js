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

                        <Subtitle>
                            {ctx.chapterFive.para95}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para96}
                        </Subtitle>
                        {["para97"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}     
           <Subtitle>
                            {ctx.chapterFive.para98}
                        </Subtitle>
                        {["para99"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
          <Subtitle>
                            {ctx.chapterFive.para100}
                        </Subtitle>
                        {["para101"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}   
           <Subtitle>
                            {ctx.chapterFive.para102}
                        </Subtitle>
                        {["para103"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para104}
                        </Subtitle>
                        {["para105"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
           <Subtitle>
                            {ctx.chapterFive.para106}
                        </Subtitle>
                        {["para107","para108"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
           <Subtitle>
                            {ctx.chapterFive.para109}
                        </Subtitle>
                        {["para110","para111"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
           <Subtitle>
                            {ctx.chapterFive.para112}
                        </Subtitle>
                        {["para113","para114"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para115}
                        </Subtitle>
                        {["para116","para117"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para118}
                        </Subtitle>
                        {["para119"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para120}
                        </Subtitle>
                        {["para121"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}
          <Subtitle>
                            {ctx.chapterFive.para122}
                        </Subtitle>
                        {["para123"].map(
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