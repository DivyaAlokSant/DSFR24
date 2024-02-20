import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Subtitle from '../../../../Subtitle/Subtitle'


const Conclusion = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                        <Title>
                            {ctx.chapterTwo.para124}
                        </Title>
                        <Subtitle>
                            {ctx.chapterTwo.para125}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para126}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para127}
                            </i></b>
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.para128}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para129}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para130}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para131}
                            </i></b>
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.para132}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para133}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para134}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para135}
                            </i></b>
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para136}
                            </i></b>
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.para137}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para138}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para139}
                            </i></b>
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.para140}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para141}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para142}
                            </i></b>
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.para143}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.para144}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para145}
                            </i></b>
                        </Para>

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter2kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/dsa" forward="/budget" />
                        <Title>{ctx.chapter2kannada.Content.para303}</Title>

                        <Para>
                            <h3>
                            {ctx.chapter2kannada.Content.para304}
                            </h3>
                        </Para>

                        <Para>
                            {ctx.chapter2kannada.Content.para305}
                        </Para>
                        {["para306", "para307"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)} 

                        {["para308", "para309"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}     
                        {["para310", "para311"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)} 
                        {["para312", "para313"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}     
                        {["para314", "para315", "para316"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)} 
                        <Para>
                            {ctx.chapter2kannada.Content.para317}
                        </Para>    

                        {["para318", "para319"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)}
                        <Para>
                            {ctx.chapter2kannada.Content.para320}
                        </Para>  
                        {["para321", "para322"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)}  

                        <Para>
                            {ctx.chapter2kannada.Content.para323}
                        </Para>
                        {["para324"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <h3>
                                {ctx.chapter2kannada.Content[item]}
                                </h3>
                            </Para>)}



                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Conclusion