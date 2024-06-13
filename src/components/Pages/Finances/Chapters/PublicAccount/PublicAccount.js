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
import CustomTable from '../../../../CustomTable/CustomTable'
import c46 from '../../../../../Images/c46.png'

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
                            <h4>
                            <i>
                            Note: +ve denotes debit balance and –ve denotes credit balances
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
                            {["para260a","para260b"].map((item, ind) =>
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
                            {ctx.chapterTwo["para264"]}
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
                        <Title>{ctx.chapter2kannada.Content.para214}</Title>

                        {["para215"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                           <Subtitle><i>
                           {ctx.chapter2kannada.Content.para216}</i>
                           </Subtitle>
                           {["para217"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೩೪: ವರ್ಷದ ಮಾರ್ಚ್ 31ರಲ್ಲಿದ್ದಂತೆ ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕದಲ್ಲಿ ಆಂಗವಾರು ನಿವ್ವಳ ಶಿಲ್ಕುಗಳು"}
                            
                            columns={ctx.tables2kan.Table28}
                            data={ctx.tables2kan.Table28} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
    ಟಿಪ್ಪಣಿ : (+) ಎನ್ನುವುದು ಖರ್ಚು ಶಿಲ್ಕನ್ನು ಮತ್ತು (-) ಎನ್ನುವುದು ಜಮೆ ಶಿಲ್ಕನ್ನು ಸೂಚಿಸುತ್ತದೆ

                   
                </i>
        </h4>
      
        <ImageComponent  src={c46} alt="chart23" aspectRatio={1 / 1} />                      
                            {["para218"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para219}</i>
                           </Subtitle>
                           {["para220","para222"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para223}
                           </Subtitle>
                           {["para224"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            {["para225","para226","para227","para228"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para229}
                           </Subtitle>
                           {["para230","para231","para232","para233"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para234}
                           </Subtitle>
                           {["para234","para235","para236","para237"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para238}
                           </Subtitle>
                           {["para239","para240","para241","para242","para243"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para244}
                           </Subtitle>
                           {["para245","para246","para247","para248"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                     <CustomTable title={"ಕೋಷ್ಟಕ-2.೩೫: ರಾಜ್ಯ ವಿಪತ್ತು ಪರಿಹಾರ ನಿಧಿ/ರಾಜ್ಯ ವಿಪತ್ತು ಉಪಶಮನ ನಿಧಿಗಳಡಿಯ ವೆಚ್ಚಗಳು/ಸ್ವೀಕೃತಿಗಳ ವಿವರಗಳು"}
                            
                            columns={ctx.tables2kan.Table29}
                            data={ctx.tables2kan.Table29} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: XVನೇ ಹಣಕಾಸು ಆಯೋಗ ವರದಿ ಮತ್ತು ಲೆಡ್ಜರ್‌
                   
                </i>
        </h4>

                            {["para249"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para250}
                           </Subtitle>
                           {["para251","para252","para253","para254","para255"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para256}
                           </Subtitle>
                           {["para257","para258","para259","para260","para261","para262"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter2kannada.Content.para263}
                           </Subtitle>
                           {["para264","para265"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para266}</i>
                           </Subtitle>
                           {["para267","para268","para269"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para270}</i>
                           </Subtitle>
                           {["para271","para272"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter2kannada.Content.para273}</i>
                           </Subtitle>
                           {["para274","para275","para276","para277","para278","para279","para280","para281","para282","para283","para284"].map((item, ind) =>
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