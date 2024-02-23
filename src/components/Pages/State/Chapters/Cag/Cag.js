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
                            {ctx.chapter5kannada.Content.Para68}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para69}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para70}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para71}
                            </i>
                        </Subtitle>
                        {["Para72", "Para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                        {["Para74", "Para75"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                {ctx.chapter5kannada.Content[item]}
                                </li>
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para76}
                            </i>
                        </Subtitle>
                        {["Para77", "Para78", "Para79"].map((item, ind) =>
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