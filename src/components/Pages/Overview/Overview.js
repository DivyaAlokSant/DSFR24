import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Overview.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import Para from "../../Para/Para"
import Title from "../../Title/Title";
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import { Helmet } from "react-helmet";
import Subtitle from "../../Subtitle/Subtitle";


const Overview = () => {

    const ctx = useContext(MyContext)


    return (
        ctx.langPref
            ? (ctx.execsummary
                ?
                <div >
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>SFR Overview</title>
                        <link rel="canonical" href="https://cedar.gov.in/sfrreport/#/overview" />
                    </Helmet>
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                       
                        <Title>{ctx.execsummary.para1}</Title>
                        {['para2'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para3}</Title>
                        {['para4'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para5}</Title>
                        {['para6'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para7}</Title>
                        {['para8'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para9}</Title>
                        {['para10'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para11}</Title>
                        {['para12'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para13}</Title>
                        {['para14','para15'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para16}</Title>
                        {['para17'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para18}</Title>
                        <Title>{ctx.execsummary.para19}</Title>
                        {['para20','para21','para22','para23','para24','para25'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Subtitle><i>{ctx.execsummary.para26}</i></Subtitle>
                        {['para27','para28','para29','para30','para31'].map((item, ind) =>
                            <Para key={ind / 10}>
                            <li>
                                <i> 
                                {ctx.execsummary[item]}
                                </i>
                            </li>
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para32}</Title>
                        <Title>{ctx.execsummary.para33}</Title>
                        {['para34','para35','para36','para37'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Subtitle><i>{ctx.execsummary.para38}</i></Subtitle>
                        {['para39','para40','para41'].map((item, ind) =>
                            <Para key={ind / 10}>
                            <li>
                                <i> 
                                {ctx.execsummary[item]}
                                </i>
                            </li>
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para42}</Title>
                        <Title>{ctx.execsummary.para43}</Title>
                        {['para44','para45'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Subtitle><i>{ctx.execsummary.para46}</i></Subtitle>
                        {['para47','para48','para49'].map((item, ind) =>
                            <Para key={ind / 10}>
                            <li>
                                <i> 
                                {ctx.execsummary[item]}
                                </i>
                            </li>
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para50}</Title>
                        <Subtitle>{ctx.execsummary.para51}</Subtitle>
                        {['para52','para53','para54','para55','para56'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Subtitle><i>{ctx.execsummary.para57}</i></Subtitle>
                        {['para58','para59','para60'].map((item, ind) =>
                            <Para key={ind / 10}>
                            <li>
                                <i> 
                                {ctx.execsummary[item]}
                                </i>
                            </li>
                            </Para>
                        )}


                    </div>
                </div> : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.execsummarykan
                ?
                <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/preface/" forward="/overview/introduction" />
                        
                        
                        <Title >{ctx.execsummarykan.para6}</Title>
                        {['para7'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )}
                        <Title >{ctx.execsummarykan.para15}</Title>
                        <Para >{ctx.execsummarykan.para16}</Para>
                        {/* {['para17','para18','para19'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummarykan[item]}
                            </Para>
                        )} */}
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Overview
