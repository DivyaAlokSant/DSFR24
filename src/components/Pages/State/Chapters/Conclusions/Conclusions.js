import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "./../../../../Subtitle/Subtitle"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'


const Conclusions= () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Management" forward="/State/Recommend" />

                        <Subtitle>
                            {ctx.chapterFive.para127}
                        </Subtitle>
                        {["para128","para129","para130","para131","para132"].map(
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
                    <FloatingActionButtons back="/State/Management" forward="/State/Recommend"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para102}
                        </Title>
                        {["Para103", "Para104", "Para105"].map((item, ind) =>
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

export default Conclusions