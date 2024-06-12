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
                        {['para14'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para15}</Title>
                        {['para16'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para17}</Title>
                        {['para18'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para19}</Title>
                        {['para20'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para21}</Title>
                        {['para22','para23'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para24}</Title>
                        {['para25'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para26}</Title>
                        <Title>{ctx.execsummary.para27}</Title>
                        {['para28','para29','para30','para31','para32','para33'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                            <Title>{ctx.execsummary.para34}</Title>
                    {['para35','para36','para37','para38','para39'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                         <Title>{ctx.execsummary.para40}</Title>
                         <Title>{ctx.execsummary.para41}</Title>
                         {['para42','para43','para44','para45'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                         <Title>{ctx.execsummary.para46}</Title>
                         {['para47','para48','para49'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                          <Title>{ctx.execsummary.para50}</Title>
                          <Title>{ctx.execsummary.para51}</Title>
                          {['para52','para53'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                        <Title>{ctx.execsummary.para54}</Title>
                        {['para55','para56','para57'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                          <Title>{ctx.execsummary.para58}</Title>
                          <Title>{ctx.execsummary.para59}</Title>
                          {['para60','para61','para62','para63','para64'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                         <Title>{ctx.execsummary.para65}</Title>
                         {['para66','para67','para68'].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                            </Para>
                        )}
                         <Title>{ctx.execsummary.para69}</Title>
                          

                       

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
