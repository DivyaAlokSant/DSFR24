import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table28 from '../../../Tables/Chapter2/Table28'
import c214 from '../../../../../Images/c214.png'

import ImageComponent from 'material-ui-image'
import Table29 from '../../../Tables/Chapter2/Table29'
import Table29kan from '../../../Tables/Chapter2kan/Table29'
import Table30kan from '../../../Tables/Chapter2kan/Table30'
import Table31akan from '../../../Tables/Chapter2kan/Table31a'
import Subtitle from '../../../../Subtitle/Subtitle'

const PublicAccount = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title>{ctx.chapterTwo.para213}</Title>

                        {["para214"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapterTwo["para215"]}
                            </i>
                        </Subtitle>
                        {["para216"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}


                            <Table28 />
                        <h4>
                            <i>
                                Source:Finance Accounts
                            </i>
                        </h4>    
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>  
                        <ImageComponent src={c214} alt="chart2.14" aspectRatio={1 / 0.5} />
                       

 
                        {["para217"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapterTwo["para218"]}
                            </i>
                        </Subtitle>
                        {["para219","para220"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            
                            {ctx.chapterTwo["para221"]}
                        
                        </Subtitle>
                        {["para222"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}
                        <Subtitle>
                            
                            {ctx.chapterTwo["para223"]}
                        
                        </Subtitle>  
                        {["para224","para225","para226"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                            <Subtitle>
                            
                            {ctx.chapterTwo["para227"]}
                        
                        </Subtitle> 
                       
                         <Para tooltips={[
                            { word: "GreenTax[16]", tooltip: " Green Tax Cess is cess in old vehicles which have completed fifteen years in respect of two wheelers and non-transport vehicles and seven years in res[ect of transport vehicles at the time of renewal of Certificate of Registration in addition to the tax levied at the rates specified for the purpose of implementation of various measures to control air pollution" },
                            
                        ]}>
                         {ctx.chapterTwo.para228}
                        </Para>
                            
                        {["para229","para230","para231"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                            
                            {ctx.chapterTwo["para232"]}
                        
                        </Subtitle>
                        {["para233","para234","para235"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}   
                        <Subtitle>
                            
                            {ctx.chapterTwo["para236"]}
                        
                        </Subtitle> 
                        {["para237","para238","para240","para241","para242"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}   
                            
                        <Subtitle>
                            
                            {ctx.chapterTwo["para243"]}
                        
                        </Subtitle> 
                        {["para244","para245","para246","para247","para248"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                        <Table29 />
                        <h4>
                            <i>
                                Source: XV Finance Commission and Ledger
                            </i>
                        </h4>    
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>   

                             {["para249"].map((item, ind) =>


                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table29 />
                        <h4 className='footnote'>
                            <i>
                            Source: XV Finance Commission and Ledger
                            </i>
                        </h4>

                        <Para >
                            {ctx.chapterTwo.para249}
                        </Para>      
                        <Subtitle>
                            
                            {ctx.chapterTwo["para250"]}
                        
                        </Subtitle> 
                        {["para251","para252","para253","para254","para255"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}   
                        <Subtitle>
                            
                            {ctx.chapterTwo["para256"]}
                        
                        </Subtitle> 
                        {["para257","para258","para259","para260"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)} 
                        <Subtitle>
                            
                            {ctx.chapterTwo["para261"]}
                        
                        </Subtitle> 
                        {["para262","para263"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                           <i>
                            {ctx.chapterTwo["para261"]}
                            </i> 
                        </Subtitle> 
                        {["para265","para266","para267"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                           <i>
                            {ctx.chapterTwo["para268"]}
                            </i> 
                        </Subtitle> 
                        {["para269","para270"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                        <Subtitle>
                           <i>
                            {ctx.chapterTwo["para271"]}
                            </i> 
                        </Subtitle>
                        {["para272","para273","para274","para275","para276","para277"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}   
                     <Para tooltips={[
                     { word: "portal[17]", tooltip:"Portal maintained by CEO, National Authority, Ministry of Environment, Forest and Climate change for collection and transfer of user charges to NCAF." },
                            
                        ]}>
                         {ctx.chapterTwo.para278}
                        </Para>
                    
                    {["para279","para280"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo[item]}
                            </Para>)}  
                            
                                       
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
                        <FloatingActionButtons back="/finances/application" forward="/finances/debtmanagement" />
                        <Title>{ctx.chapter2kannada.Content.para187}</Title>

                        <Para>
                            {ctx.chapter2kannada.Content.para188}
                        </Para>

                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para189}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter2kannada.Content.para190}
                        </Para>

                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table29kan />
                        <h3> ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                            <br>
                            </br>
                            ಟಿಪ್ಪಣಿ : (+) ಎನ್ನುವುದು ಖರ್ಚು ಶಿಲ್ಕನ್ನು ಮತ್ತು (-) ಎನ್ನುವುದು ಜಮೆ ಶಿಲ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ
                        </h3>

                        {/* <ImageComponent  src={k213} alt="chart23" aspectRatio={1 / 0.55} /> */}

                        <Para>
                            {ctx.chapter2kannada.Content.para191}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para192}
                            </i>
                        </Subtitle>


                        {["para193", "para194"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para195}
                            </h4>
                        </Para>     
                        <Para>
                            {ctx.chapter2kannada.Content.para196}
                        </Para>
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para197}
                            </h4>
                        </Para> 
                        {["para198", "para199", "para200", "para201", "para202"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para203}
                            </h4>
                        </Para> 
                        {["para204", "para205", "para206", "para207" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para208}
                            </h4>
                        </Para>    
                        {["para209", "para210", "para211", "para212" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para213}
                            </h4>
                        </Para>
                        {["para214", "para215", "para216" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        
                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table30kan />
                        <h3> 
                            <i>
                            ಆಕರ: 15ನೇ ಹಣಕಾಸು ಆಯೋಗ ಮತ್ತು ಖಾತೆ/ಖಾತಾ ಪುಸ್ತಕ
                            </i>
                            <br>
                            </br>
                            
                        </h3>


                        <Para>
                            {ctx.chapter2kannada.Content.para217}
                        </Para>    
                        <Para>
                            <h4>
                            {ctx.chapter2kannada.Content.para218}
                            </h4>
                        </Para>
                        {["para219", "para220", "para221", "para222", "para223" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para224}
                            </i>
                        </Subtitle>    
                        {["para225", "para226" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter2kannada.Content.para227}
                            </i>
                        </Subtitle>  
                        {["para228", "para229" ].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}  
                        {["para230", "para231","para232", "para233"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                {ctx.chapter2kannada.Content[item]}
                                
                        </Para>)}
                        
                        <Para>
                            {ctx.chapter2kannada.Content.para234}
                        </Para>


                        <h3 className='headnote'>
                             (` ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Table31akan />


                        {["para235", "para236" ].map((item, ind) =>
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

export default PublicAccount