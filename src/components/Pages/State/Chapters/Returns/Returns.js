import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table5 from "../../../Tables/Chapter5/Table5";
import Table5kan from "../../../Tables/Chapter5kan/Table5";
import Table6 from "../../../Tables/Chapter5/Table6";
import Table6kan from "../../../Tables/Chapter5kan/Table6";
// import Table1 from '../../../Tables/Chapter4/Table1'


const Returns = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />
                        <Subtitle>
                            {ctx.chapterFive.para31}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFive.para32}
                        </Subtitle>
                        
                        {["para33","para34","para35"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 
                 <Subtitle>
                            {ctx.chapterFive.para36}
                        </Subtitle>
                        {["para37","para38","para39"].map(
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
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/State/Investment" forward="/State/Debt" />


                        <Title>
                            {ctx.chapter5kannada.Content.para25}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para26}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para20}
                        </Para> 
                        <Para>
                            {ctx.chapter5kannada.Content.para27}
                        </Para>
                        <Table5kan />

                        <Para>
                            {ctx.chapter5kannada.Content.para28}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.para29}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.para30}
                        </Para> 
                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <Table6kan />
                        
                        <Para>
                            {ctx.chapter5kannada.Content.para31}
                        </Para>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Returns