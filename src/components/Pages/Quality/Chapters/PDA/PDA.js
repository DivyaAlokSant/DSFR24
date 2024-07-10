import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Subtitle from "../../../../Subtitle/Subtitle";
import CustomTable from "../../../../CustomTable/CustomTable";


const PDA = () => {

    const ctx = useContext(MyContext)
    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/non-reconciliation" forward="/quality/indiscriminate-use" />

                        <Title>
                            {ctx.chapterFour.Content.para36}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para37}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para38}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para39}
                        </Para>


                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.7: Details of PD Accounts during the year 2022-23"}
                            columns={ctx.tables4.Table7}
                            data={ctx.tables4.Table7} />

                        <Subtitle>
                            {ctx.chapterFour.Content.para40}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para41}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.8: Funds kept in PD Accounts"}
                            columns={ctx.tables4.Table8}
                            data={ctx.tables4.Table8} />
                               <h4 className='footnote'><i>
                              Source:Finance Accounts</i>
                        </h4>

                        {["para42", "para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.9: Closing balances in PD Accounts"}
                            columns={ctx.tables4.Table9}
                            data={ctx.tables4.Table9} />
                               <h4 className='footnote'><i>
                               Source: DDR Ledger </i>
                        </h4>

                        <Para>
                            {ctx.chapterFour.Content.para44a}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para45}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para46}
                        </Para>
                        {["para47", "para48"].map((item, ind) =>
                            <Subtitle key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Subtitle>)}
                        {["para49", "para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                          

                        <CustomTable title={"Table 4.10: Information of the PD accounts opened and closed during 2018-19 to 2022-23."}
                            columns={ctx.tables4.Table10}
                            data={ctx.tables4.Table10} />


                        <Para>
                            {ctx.chapterFour.Content.para51}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para52}
                        </Subtitle>
                        {["para53", "para54"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table-4.11: Inoperative PD Accounts during 2022-23"}
                            columns={ctx.tables4.Table11}
                            data={ctx.tables4.Table11} />

                        {["para55", "para56"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        {["para57"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                    {ctx.chapterFour.Content[item]}
                                
                            </Para>)}
                 <Para tooltips={[
       { word: "Bhavans[25]", tooltip:"Ambedkar Bhavana in Anekal Taluk-₹ 48 lakh; Construction of Samskruthi Bhavana -₹ 10 lakh; Chalavadi Bhavana-₹ 20 lakh; Bayalu Ranga Mandira-₹4 lakh; Gangothri Bhavana for Physically Challenged Person-₹ 20 lakh and Mahila Bhavana-₹15 lakh" },
                            
                        ]}>
                         {ctx.chapterFour.Content.para58}
        </Para>
                    {["para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                
                                    {ctx.chapterFour.Content[item]}
                                
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para60}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para61}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para62}
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFour.Content.para63}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para64}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In lakh
                        </h3>

                        <CustomTable title={"Table 4.12: Difference in the PD Account balances depicted in the Books of Accounts  "}
                            columns={ctx.tables4.Table12}
                            data={ctx.tables4.Table12} />

<Para tooltips={[
       { word: "(Urban)[26]", tooltip:"Information in respect of DC, Mysuru was not made available." },
                            
                        ]}>
                         {ctx.chapterFour.Content.para65}
        </Para>

                        
                        <h3 className='headnote'>
                          (Amount in ₹ )
                        </h3>

                        <CustomTable title={"Table 4.13: Difference in the figures depicted in the Books of Accounts as on 31st March 2023"}
                            columns={ctx.tables4.Table13}
                            data={ctx.tables4.Table13} />

                        <Para>
                            {ctx.chapterFour.Content.para66}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para67}
                        </Subtitle>
                        {["para68", "para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para70}
                        </Subtitle>
                        <Para>
                            {ctx.chapterFour.Content.para71}
                        </Para>
                        <Subtitle>
                            {ctx.chapterFour.Content.para72}
                        </Subtitle>
                        {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
             <Para tooltips={[
       { word: "Mysuru[27]", tooltip:"  Records of DC Bengaluru Urban was not provided." },
                            
                        ]}>
                         {ctx.chapterFour.Content.para74}
        </Para>
                     {["para75"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                                {ctx.chapterFour.Content.para76}
                            </i>
                        </Subtitle>
                        <Subtitle>
                            {ctx.chapterFour.Content.para77}
                        </Subtitle>
                        {["para78", "para79"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterFour.Content.para80}
                        </Subtitle>
                        {["para81", "para82"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}
                        
                        

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
                        <FloatingActionButtons back="/quality/non-reconciliation" forward="/quality/indiscriminate-use" />

                        <Title>
                            {ctx.chapter4kannada.Content.para27h}
                        </Title>
                        {["para27i","para27j"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <Subtitle><i>
                           {ctx.chapter4kannada.Content.para27k}</i>
                        </Subtitle>
                        {["para27l"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.೭: ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿನ ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳ ವಿವರಗಳು"}
                            
                            columns={ctx.tables4kan.Table7}
                            data={ctx.tables4kan.Table7} />     
                        <Subtitle><i>
                           {ctx.chapter4kannada.Content.para27m}</i>
                        </Subtitle>
                        {["para27n"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.೮: ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳಲ್ಲಿ ಇರಿಸಲಾದ ನಿಧಿಗಳು "}
                            
                            columns={ctx.tables4kan.Table8}
                            data={ctx.tables4kan.Table8} />     
             <h4 className='footnote'>
                <i>
                ಆಕರ- ಹಣಕಾಸು ಲೆಕ್ಕಗಳು
                   
                </i></h4> 

                         {["para28","para29"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೪.೯: ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳಲ್ಲಿನ ಅಂತಿಮ ಶಿಲ್ಕು "}
                            
                            columns={ctx.tables4kan.Table9}
                            data={ctx.tables4kan.Table9} />     
             <h4 className='footnote'>
                <i>
                ಆಕರ–ಋಣ, ಠೇವಣಿ ಇರಸಾಲು ಲೆಡ್ಜರ್‌ಗಳು 
                   
                </i></h4>    
                          {["para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                         <Subtitle><i>
                           {ctx.chapter4kannada.Content.para30}</i>
                        </Subtitle>
                        {["para31"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                         <Subtitle>
                           {ctx.chapter4kannada.Content.para32}
                        </Subtitle>
                        <Subtitle>
                           {ctx.chapter4kannada.Content.para33}
                        </Subtitle>
                        {["para34","para35"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.10: 2018-19ರಿಂದ 2022-23ರ ಅವಧಿಯಲ್ಲಿ ತೆರೆಯಲಾದ ಮತ್ತು ಮುಕ್ತಾಯಗೊಳಿಸಲಾದ ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳ ಮಾಹಿತಿ"}
                            
                            columns={ctx.tables4kan.Table10}
                            data={ctx.tables4kan.Table10} />     
                         {["para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                           {ctx.chapter4kannada.Content.para37}
                        </Subtitle>
                        {["para37a","para38"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.11: ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ನಿಷ್ಕ್ರಿಯ ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳು"}
                            
                            columns={ctx.tables4kan.Table11}
                            data={ctx.tables4kan.Table11} /> 
                     {["para39","para40","para41","para42","para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                     <Subtitle>
                           {ctx.chapter4kannada.Content.para44}
                        </Subtitle>
                     {["para45"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                    <Subtitle>
                           {ctx.chapter4kannada.Content.para46}
                        </Subtitle>
                     <Subtitle>
                           {ctx.chapter4kannada.Content.para47}
                        </Subtitle>
                 {["para48"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.12: ಲೆಕ್ಕಪುಸ್ತಕಗಳಲ್ಲಿ ನಮೂದಿಸಲಾದ ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳ ಶಿಲ್ಕುಗಳಲ್ಲಿನ ವ್ಯತ್ಯಾಸಗಳು"}
                            
                            columns={ctx.tables4kan.Table12}
                            data={ctx.tables4kan.Table12} />        
                 {["para49"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-4.13: ೩೧ ಮಾರ್ಚ್‌ ೨೦೨೩ರಲ್ಲಿದ್ದಂತೆ ಲೆಕ್ಕಪತ್ರಗಳ ಪುಸ್ತಕದಲ್ಲಿ ನಮೂದಿಸಿರುವ ಅಂಕಿಅಂಶಗಳಲ್ಲಿ ವ್ಯತ್ಯಾಸಗಳು"}


                            
                            columns={ctx.tables4kan.Table12}
                            data={ctx.tables4kan.Table12} />        

                {["para50"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
              <Subtitle>
                           {ctx.chapter4kannada.Content.para51}
              </Subtitle>
              {["para52","para53"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                <Subtitle>
                           {ctx.chapter4kannada.Content.para54}
              </Subtitle>
              {["para55"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
             <Subtitle>
                           {ctx.chapter4kannada.Content.para56}
              </Subtitle>
              {["para57","para58","para59"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
             <Subtitle><i>
                           {ctx.chapter4kannada.Content.para60}</i>
                </Subtitle>
                <Subtitle>
                           {ctx.chapter4kannada.Content.para61}
                </Subtitle>
                {["para62","para63"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                 <Subtitle>
                           {ctx.chapter4kannada.Content.para64}
                </Subtitle>
                {["para65","para66"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}

                       

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default PDA