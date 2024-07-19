import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Subtitle from '../../../../Subtitle/Subtitle'


const Conclusion =( ) => {

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
                            {ctx.chapterTwo.para345}
                        </Title>
                        <Title>
                            {ctx.chapterTwo.para346}
                        </Title>

                        <Para>
                            {ctx.chapterTwo.para347}
                        </Para>
                        <Para>     <b><i>
                            {ctx.chapterTwo.para348}
                            </i> </b>
                        </Para>
                        <Para>
                            <b><i>
                                {ctx.chapterTwo.para349}
                            </i></b>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para350}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para351}
                        </Para>
                        <Para><b><i>
                            {ctx.chapterTwo.para352}
                            </i></b>
                        </Para>
                        <Para><b><i>
                            {ctx.chapterTwo.para372}
                            </i></b>
                        </Para>
                        {["para373","para374"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                            {["para375","para376"].map((item, ind) =>
                            <Para key={ind / 10}><b><i>
                                {ctx.chapterTwo[item]}
                                </i></b>
                            </Para>)}
                            <Para><b><i>
                            {ctx.chapterTwo.para377}
                            </i></b>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para378}
                        </Para>
                        <Para><b><i>
                            {ctx.chapterTwo.para379}
                            </i></b>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para380}
                        </Para>
                        <Para><b><i>
                            {ctx.chapterTwo.para381}
                            </i></b>
                        </Para>
                        <Para>
                            {ctx.chapterTwo.para382}
                        </Para>
                        <Para><b><i>
                            {ctx.chapterTwo.para383}
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
