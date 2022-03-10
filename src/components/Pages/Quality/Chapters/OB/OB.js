import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table1 from '../../../Tables/Chapter4/Table1'


const OB = () => {

    const ctx = useContext(MyContext)
    console.log(ctx.chapterFour)




    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                      
                        
                        <Title>
                        {ctx.chapterFour.Third.title}
                        </Title>
                        
                           
                         {["Para1","Para2","Para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para> )}
                            {["Para4","Para5","Para6","Para7","Para8","Para9","Para10","Para11","Para12","Para13","Para14","Para15","Para16","Para17","Para18","Para19","Para20","Para21","Para22","Para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Third[item]}
                            </Para> )}
                            

                           
                    
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    {/* <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality" forward="delay" />
                        <Para>
                            {ctx.chapter4kannada.Quality.Funds["para0"]}
                        </Para>
                        <Title>A. Observations relating to completeness of accounts</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Funds.title}</Title>
                        <Title status={ctx.isStatus.status1} id={1}>{ctx.chapter4kannada.Quality.Funds.para1}</Title>
                        {ctx.isStatus.status1
                            ? <div>
                                {['para2', 'para3', 'para4'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                            <p className="footer">
                                In crores
                            </p>
                            <Table1 />
                            {ctx.isStatus.status1
                            ? <div>
                                {['para5'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para6', 'para7', 'para8'].map((item, ind) =>
                                    <Para key={ind}>
                                        <li className="list">
                                            {ctx.chapter4kannada.Quality.Funds[item]}
                                        </li>
                                    </Para>
                                )}
                            </div>
                            : ""}
                        {ctx.isStatus.status1
                            ? <div>
                                {['para9', 'para10'].map((item, ind) =>
                                    <Para key={ind}>
                                        {ctx.chapter4kannada.Quality.Funds[item]}
                                    </Para>
                                )}
                            </div>
                            : ""}
                    </div> */}
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default OB