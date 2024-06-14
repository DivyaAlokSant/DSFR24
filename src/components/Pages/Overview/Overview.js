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
                       
                        <Title><i>{ctx.execsummary.para1}</i></Title>
                        <Title><i>{ctx.execsummary.para10}</i></Title>
                       {['para11',"para12"].map((item, ind) =>
                             <i><Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para>  </i>
                        )}
                        {['para13',"para14"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para15}</i></Title>
                         {['para16',"para17","para18","para19"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para20}</i></Title>
                          {['para21',"para22","para23","para24","para25","para26"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                        <Title><i>{ctx.execsummary.para27}</i></Title>
                        {['para28',"para29"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para30}</i></Title>
                          {['para31'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para32}</i></Title>
                         {['para33'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para34}</i></Title>
                          {['para35'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                           <Title><i>{ctx.execsummary.para36}</i></Title>
                           {['para37',"para38","para39"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para40}</i></Title>
                         <Title><i>{ctx.execsummary.para41}</i></Title>
                       
                         {['para42'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para43}</i></Title>
                          {['para44',"para45"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para46}</i></Title>
                          {['para47'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para48}</i></Title>
                         {['para49'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                             <Title><i>{ctx.execsummary.para50}</i></Title>
                             {['para51'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                        <Title><i>{ctx.execsummary.para52}</i></Title>
                        {['para53',"para54"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para55}</i></Title>
                         {['para56'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para57}</i></Title>
                         {['para58'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para59}</i></Title>
                          {['para60'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para61}</i></Title>
                         {['para62'].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                         <Title><i>{ctx.execsummary.para63}</i></Title>
                         {['para64',"para65"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
                               </Para> 
                        )}
                          <Title><i>{ctx.execsummary.para66}</i></Title>
                          {['para67',"para68","para69","para2"].map((item, ind) =>
                             <Para key={ind / 10}>
                                {ctx.execsummary[item]}
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
