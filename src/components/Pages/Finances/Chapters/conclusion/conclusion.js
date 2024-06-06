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
                            {ctx.chapterTwo.para365}
                        </Title>
                        <Para>
                            {ctx.chapterTwo.para366}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para367}
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para368}
                            </i></b>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para369}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para370}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para371}
                        </Para>
                        {["para372","para373","para374","para375","para376","para377","para378","para379","para380","para381","para382","para383"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}

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
                        <Title>{ctx.chapter2kannada.Content.para348}</Title>

                        <Subtitle><i>
                           {ctx.chapter2kannada.Content.para349}</i>
                           </Subtitle>
                           {["para350"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3>{["para351"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}</h3>
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para352}
                           </Subtitle>
                           {["para353","para354","para355"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para356}
                           </Subtitle>
                           {["para357","para358","para359","para360"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para361}
                           </Subtitle>
                           {["para362"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para363}
                           </Subtitle>
                           {["para364"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para365}
                           </Subtitle>
                           {["para366","para367"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
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