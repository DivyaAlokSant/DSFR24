import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import ContentSlider from '../../../../ContentSlider/ContentSlider'
import ImageComponent from 'material-ui-image'
import c13 from '../../../../../Images/c13.png'
import k3 from '../../../../../Images/k3.png'

import Subtitle from '../../../../Subtitle/Subtitle'


const Structure = () => {

    const ctx = useContext(MyContext)

    
    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/basis" forward="/overview/budgetprocess" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para26}
                        </Title>
                       
                       
                        <Para>
                            {ctx.chapterOne.Profile.Para27}
                        </Para>

                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27a}
                            title="Consolidated fund"
                        />
                        <ContentSlider
                            position="right"
                            content={ctx.chapterOne.Profile.Para27b}
                            title="Contingency fund"
                        />
                        <ContentSlider
                            position="left"
                            content={ctx.chapterOne.Profile.Para27c}
                            title="Public Account"
                        />

                        <Para>
                            {ctx.chapterOne.Profile.Para28}
                        </Para>

                        {["Para29", "Para30", "Para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para32", "Para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li style={{ marginLeft: "25px", listStyle: "square" }}>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        {["Para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterOne.Profile[item]}
                                </li>
                            </Para>
                        )}
                        <Para>
                            {ctx.chapterOne.Profile["Para35"]}
                        </Para>
                        <Title>
                        Chart 1.3: Pictorial depiction of the structure of Government Accounts
                        </Title>
                        <ImageComponent flex="2" aspectRatio = "2" resizeMode = 'contain' src={c13} color ="#ffffff00" />
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/basis" forward="/overview/budgetprocess" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para31}
                        </Title>
                        <ContentSlider
                            position="left"
                            content={ctx.chapter1kannada.Content.para31a}
                            title="ಸಂಚಿತ ನಿಧಿ"
                        />
                        <ContentSlider
                            position="right"
                            content={ctx.chapter1kannada.Content.para31b}
                            title="ಸಾದಿಲ್ವಾರು ನಿಧಿ"
                        />
                        <ContentSlider
                            position="left"
                            content={ctx.chapter1kannada.Content.para31c}
                            title="ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕ"
                        />

                       
                        {["para32","para33","para34","para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <Subtitle>
                            {ctx.chapter1kannada.Content.para36}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para37}
                        </Subtitle>
                        {["para38"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                         <Subtitle>
                            {ctx.chapter1kannada.Content.para39}
                        </Subtitle>
                        {["para4"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        <Subtitle>
                            {ctx.chapter1kannada.Content.para40}
                        </Subtitle>
                        {["para41","para42"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}
                        /<ImageComponent src={k3}  aspectRatio={1 / 0.5} /> 
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Structure
