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
                            {ctx.chapter5kannada.Content.Para97}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para98}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para99}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para100}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para101}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para102}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para103}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para104}
                            </i>
                        </Subtitle>
                        {["Para105", ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para106}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para107}
                        </Para> 
                        <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para108}
                            
                        </Subtitle>
                        {["Para109","Para110" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                         <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para111}
                            
                        </Subtitle>
                        {["Para112","Para113" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                         <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para114}
                            
                        </Subtitle>
                        {["Para115","Para116" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                        <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para117}
                            
                        </Subtitle>
                        {["Para118","Para119" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                         <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para120}
                            
                        </Subtitle>
                        {["Para121" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                       <Subtitle>
                            
                            {ctx.chapter5kannada.Content.Para122}
                            
                        </Subtitle>
                        {["Para123" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)} 
                      <Subtitle>
                         <i> 
                            {ctx.chapter5kannada.Content.Para124}
                            </i>   
                        </Subtitle>
                        {["Para125" ].map((item, ind) =>
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

export default Result