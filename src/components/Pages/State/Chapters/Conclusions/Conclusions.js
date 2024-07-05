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
        <Para tooltips={[
       { word: "five[57]", tooltip:"  The Karnataka State Veneers Limited, Mysore Cosmetics Limited, Karnataka Telecom Limited, The Mysore Acetate and Chemicals Company Limited and Bangalore Airport Rail Link Limited." },
       { word: "GoK[58]", tooltip:"  The Government of Karnataka (GoK) decided to withdraw the closure orders of NGEF as there were no arrears of loan and proposed for utilisation of land and other valuable properties of the Company for public projects.  Based on the application from GoK, the Hon’ble High Court of Karnataka admitted (June 2017) for withdrawal of closure orders passed earlier." },     
        ]}>

        {ctx.chapterFive.para128}
        </Para>
                        {["para129","para130","para131","para132"].map(
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
                            {ctx.chapter5kannada.Content.Para129}
                        </Title>
                        {["Para130", "Para131", "Para132","Para133","Para134"].map((item, ind) =>
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