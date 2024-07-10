import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Subtitle from "../../../../Subtitle/Subtitle";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

import CustomTable from "../../../../CustomTable/CustomTable";
import Table10kan from '../../../Tables/Chapter3kan/Table10'
import Table12kan from '../../../Tables/Chapter3kan/Table12'
import Table13kan from '../../../Tables/Chapter3kan/Table13'
import Table14kan from '../../../Tables/Chapter3kan/Table14'
import Table15kan from '../../../Tables/Chapter3kan/Table15'
import Table16kan from '../../../Tables/Chapter3kan/Table16'
import Table17kan from '../../../Tables/Chapter3kan/Table17'


const Outcome = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">

          <FloatingActionButtons back="/budget/audit" forward="/budget/conclusion" />
          <Title>{ctx.chapterThree.Profile.para116}</Title>
          {[ "para117", "para118", "para119", "para120"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle><i>
            {ctx.chapterThree.Profile["para121"]}</i>
          </Subtitle>
          <Subtitle>
            {ctx.chapterThree.Profile["para121a"]}
          </Subtitle>
          {["para121b", "para122", "para122a", "para123", "para124", "para125", "para126", "para127", "para128", "para129", "para130", "para131", "para132", "para133", "para134"].map(
            (item, ind) => (
              <Para key={ind / 10}  >{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para135"]}
          </Subtitle>
          <Subtitle>
            {ctx.chapterThree.Profile["para136"]}
          </Subtitle>
          {["para137"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para138"]}
          </Subtitle>
          {["para139"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para140"]}
          </Subtitle>
          {["para141"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para142"]}
          </Subtitle>
          {["para143"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.12: Budget and Expenditure"}
            columns={ctx.tables3.Table17}
            data={ctx.tables3.Table17} />
          <h4>
            Source:Grant Register, Voucher Level Computerisation cell,O/o AG A&E, Karnataka
          </h4>


          {["para144","para144a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para145"]}
          </Subtitle>
          <h2><b>
            {ctx.chapterThree.Profile["para146"]}</b></h2>
        
          {["para147", "para148"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
          (Amount in ₹)
          </h3>
          <CustomTable title={"Table 3.13: Heads of Accounts with Persistent Savings in Grant No.1"}
            columns={ctx.tables3.Table18}
            data={ctx.tables3.Table18} />
          <h4>
            Source:Grant Register, Voucher Level Computerisation cell,O/o AG A&E, Karnataka
          </h4>
          <h2><b>
          {ctx.chapterThree.Profile["para149"]}</b></h2>
          {["para150", "para151"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.14: Details of Anticipated Savings Surrendered/Partially Surrendered"}
            columns={ctx.tables3.Table19}
            data={ctx.tables3.Table19} />
          <h4>
            Source:Grant Register, Voucher Level Computerisation cell,O/o AG A&E, Karnataka
          </h4>




          {["para152", "para153", "para154", "para155"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h2><b>
          {ctx.chapterThree.Profile["para156"]}</b></h2>
          {["para157"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.15: Details of proposals for surrender and their acceptance"}
            columns={ctx.tables3.Table20}
            data={ctx.tables3.Table20} />
          <h4>

          </h4>


          {["para158", "para159"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <h2><b>
           {ctx.chapterThree.Profile["para160"]}</b></h2>
          {["para161", "para162", "para163"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.16: Rush of Expenditure"}
            columns={ctx.tables3.Table21}
            data={ctx.tables3.Table21} />
          <h4>

          </h4>

          {["para164", "para165", "para166","para166a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para167"]}
          </Subtitle>
        <h2><b>
            {ctx.chapterThree.Profile["para168"]}</b></h2>
          
          {["para169", "para170", "para171","para171a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <h2><b>
            {ctx.chapterThree.Profile["para172"]}</b></h2>
         
          {["para173", "para173a","para174"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.17: Details of delay in submission of Budget Estimates"}
            columns={ctx.tables3.Table22}
            data={ctx.tables3.Table22} />
          <h4>

          </h4>


          {["para175","para175a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
            <h2><b>
            {ctx.chapterThree.Profile["para176"]}
            </b></h2>
          <Para tooltips={[
            { word: "allocations[22]", tooltip: "GoI released their funds through State Budget" },

          ]}>
            {ctx.chapterThree.Profile.para177}
          </Para>
          {["para178"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
         <h2><b>
            {ctx.chapterThree.Profile["para179"]}
            </b></h2>
          {["para180"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.18: Details of expenditure incurred as per SNA and implementing Agencies"}
            columns={ctx.tables3.Table23}
            data={ctx.tables3.Table23} />
          <h4>

          </h4>
          {["para180a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

<h2><b>
            {ctx.chapterThree.Profile["para181"]}
            </b></h2>
          {["para182", "para183","para183a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h2><b>
            <Para tooltips={[
              { word: "balance[23]", tooltip: "Saving bank account with the zero Balance." },

            ]}>
              {ctx.chapterThree.Profile["para184"]}
            </Para>

            </b></h2>
          {["para185", "para186","para186a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
        <h2><b>
            {ctx.chapterThree.Profile["para187"]}
            </b></h2>
          {["para188"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
          (₹ in crore)
          </h3>
          <CustomTable title={"Table 3.19: Variation in total expenditure "}
            columns={ctx.tables3.Table24}
            data={ctx.tables3.Table24} />
          <h4>

          </h4>
          {["para188a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

<h2><b>
            {ctx.chapterThree.Profile["para189"]}
            </b></h2>
          {["para190"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
         <h2><b>
            {ctx.chapterThree.Profile["para191"]}
            </b></h2>
          {["para192", "para193"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.20: CSS Scheme and Designated Bank for SNA Account"}
            columns={ctx.tables3.Table25}
            data={ctx.tables3.Table25} />
          <h4>

          </h4>


          <h2><b>
            {ctx.chapterThree.Profile["para194"]}
            </b></h2>
          {["para195"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
          (₹ in crore)
          </h3>
          <CustomTable title={"Table 3.21: Variation in figures"}
            columns={ctx.tables3.Table26}
            data={ctx.tables3.Table26} />
          <h4>

          </h4>


          {["para196"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para197"]}
          </Subtitle>
          <h2><b>
            {ctx.chapterThree.Profile["para198"]}
            </b></h2>
          <Para tooltips={[
            { word: "accounts[24]", tooltip: "  Account No.6402677843 of State Bank of India, Vidhana Soudha Branch and Account No. 00425201001227 of Canara Bank, Hebbal Branch" },

          ]}>
            {ctx.chapterThree.Profile.para199}
          </Para>
          <h2><b>
            {ctx.chapterThree.Profile["para200"]}
            </b></h2>
          {["para201", "para202", "para203", "para204"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle><i>
            {ctx.chapterThree.Profile["para205"]}</i>
          </Subtitle>
          <h2><b>
            {ctx.chapterThree.Profile["para206"]}
            </b></h2>
          {["para207", "para208", "para209", "para210", "para211", "para212"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={""}
            columns={ctx.tables3.Table27}
            data={ctx.tables3.Table27} />
          <h4>

          </h4>

          <Subtitle>
            {ctx.chapterThree.Profile["para213"]}
          </Subtitle>
          {["para214"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para215"]}
          </Subtitle>
          {["para216", "para217"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
          (₹ in crore)
          </h3>
          <CustomTable title={"Table 3.22: Budget and expenditure under the Department of Health and Family Welfare Services for the years 2020-21 to 2022-23"}
            columns={ctx.tables3.Table28}
            data={ctx.tables3.Table28} />
          <h4>
            Source: Appropriation Accounts,Grant Register
          </h4>



          {["para218"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para219"]}
          </Subtitle>
          {["para220", "para221"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            (₹ In lakh)
          </h3>
          <CustomTable title={"Table 3.23: Persistent Savings"}
            columns={ctx.tables3.Table29}
            data={ctx.tables3.Table29} />
          <h4>
            Source: Grant Register
          </h4>


          <Subtitle>
            {ctx.chapterThree.Profile["para222"]}
          </Subtitle>
          {["para223"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            (₹ In lakh)
          </h3>
          <CustomTable title={"Table 3.24: Rush of Expenditure"}
            columns={ctx.tables3.Table30}
            data={ctx.tables3.Table30} />
          <h4>
            Source: Grant Register
          </h4>


          <Subtitle>
            {ctx.chapterThree.Profile["para224"]}
          </Subtitle>
          {["para225", "para226"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h2><b>
            {ctx.chapterThree.Profile["para227"]}</b></h2>
          
          {["para227a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
          (₹ in crore)
          </h3>
          <CustomTable title={"Table 3.25: Variation in expenditure for the year 2022-23 in respect of two CSS implemented by Health and Family Welfare Department"}
            columns={ctx.tables3.Table31}
            data={ctx.tables3.Table31} />
          <h4>

          </h4>


          {["para228"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para229"]}
          </Subtitle>
          {["para230", "para231"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}



        </div>
      </div>
    )
      : (
        <div>
          <Navbar />
          <FaSpinner icon="spinner" className="spinner" />
        </div>
      )
  ) : ctx.chapter3kannada ? (
    <div>
      <Navbar />
      <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/audit" forward="/budget/conclusion" />

        <Title>{ctx.chapter3kannada.Content.para4}</Title>
        {["para40","para41","para42","para43"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para44}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para45}
                           </Subtitle>
        {["para46","para47","para48","para49","para5","para50","para51","para52","para53","para54","para55","para56","para57","para58"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para59}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para6}
                           </Subtitle>
                           {["para60"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para61}
                           </Subtitle>
                           {["para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para63}
                           </Subtitle>
                           {["para64"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para65}
                           </Subtitle>
                           {["para65a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.12: ಆಯವ್ಯಯ ಮತ್ತು ವೆಚ್ಚ"}
                            
                            columns={ctx.tables3kan.Table11}
                            data={ctx.tables3kan.Table11} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ವಹಿ 
                   
                </i></h4> 
                            {["para66","para67"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para68}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para69}
                           </Subtitle>
                           {["para7","para70"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.13: ಅನುದಾನ ಸಂಖ್ಯೆ-೧ರಲ್ಲಿ ನಿರಂತರ ಉಳಿತಾಯಗಳಿದ್ದ ಲೆಕ್ಕಶೀರ್ಷಿಕೆಗಳು"}
                            
                            columns={ctx.tables3kan.Table12}
                            data={ctx.tables3kan.Table12} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ವಹಿ 
                   
                </i></h4> 

                            <Subtitle>
                           {ctx.chapter3kannada.Content.para71}
                           </Subtitle>
                           {["para72","para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.14: ಅಧ್ಯರ್ಪಣೆ ಮಾಡಿದ/ಭಾಗಶಃ ಅಧ್ಯರ್ಪಣೆ ಮಾಡಿದ ನಿರೀಕ್ಷಿತ ಉಳಿತಾಯದ ವಿವರಗಳು"}
                            
                            columns={ctx.tables3kan.Table13}
                            data={ctx.tables3kan.Table13} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ವಹಿ 
                   
                </i></h4> 
                            {["para74","para75","para76","para77"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para78}
                           </Subtitle>
                           {["para79"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.15: ಅಧ್ಯರ್ಪಣೆಗೆ ಪ್ರಸ್ತಾವನೆಗಳು ಮತ್ತು ಅವುಗಳ ಸ್ವೀಕಾರ"}
                            
                            columns={ctx.tables3kan.Table14}
                            data={ctx.tables3kan.Table14} />
                            {["para8","para80"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para81}
                           </Subtitle>
                           {["para82","para83","para84"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.16: ವೆಚ್ಚದ ಒತ್ತಡ"}
                            
                            columns={ctx.tables3kan.Table14}
                            data={ctx.tables3kan.Table14} />
                            {["para85","para86","para87","para88","para89"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para9}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para90}
                           </Subtitle>
                           {["para91","para92","para93","para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}

                          <Subtitle>
                           {ctx.chapter3kannada.Content.para95}
                           </Subtitle>
                           {["para96","para97","para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.17: ಆಯವ್ಯಯ ಅಂದಾಜುಗಳನ್ನು ಸಲ್ಲಿಸುವಲ್ಲಿನ ವಿಳಂಬಗಳಲ್ಲಿನ ವಿವರಗಳು"}
                            
                            columns={ctx.tables3kan.Table15}
                            data={ctx.tables3kan.Table15} />
                            {["para181","para182"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para183}
                           </Subtitle>
                           {["para184","para185"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para186}
                           </Subtitle>
                           {["para187"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.18: ಎಸ್‌ಎನ್‌ಎ ಮತ್ತು ಅನುಷ್ಠಾನ ಏಜೆನ್ಸಿಗಳ ಪ್ರಕಾರ ಭರಿಸಿದ ವೆಚ್ಚದ ವಿವರಗಳು "}
                            
                            columns={ctx.tables3kan.Table16}
                            data={ctx.tables3kan.Table16} />

                            {["para188"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para189}
                           </Subtitle>
                           {["para190","para191","para192","para193"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para194}
                           </Subtitle>
                           {["para195","para196","para197"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para198}
                           </Subtitle>
                           {["para199"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.19: ಒಟ್ಟು ವೆಚ್ಚದಲ್ಲಿ ವ್ಯತ್ಯಯ "}
                            
                            columns={ctx.tables3kan.Table17}
                            data={ctx.tables3kan.Table17} />
                            {["para200"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para201}
                           </Subtitle>
                           {["para202"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para203}
                           </Subtitle>
                           {["para204","para205"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.20: ಕೇಂದ್ರ ಪ್ರಾಯೋಜಿತ ಯೋಜನೆ ಮತ್ತು ಎಸ್‌ಎನ್‌ಎ ಖಾತೆಗಾಗಿ ನಿಗದಿಪಡಿಸಿದ ಬ್ಯಾಂಕ್‌"}
                            
                            columns={ctx.tables3kan.Table18}
                            data={ctx.tables3kan.Table18} />
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para206}
                           </Subtitle>
                           {["para207"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.21: ಅಂಕಿಅಂಶಗಳಲ್ಲಿ ವ್ಯತ್ಯಯಗಳು"}
                            
                            columns={ctx.tables3kan.Table19}
                            data={ctx.tables3kan.Table19} />
                            {["para208"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para209}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para210}
                           </Subtitle>
                           {["para211"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para212}
                           </Subtitle>
                           {["para213","para214","para215"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter3kannada.Content.para216}</i>
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para217}
                           </Subtitle>
                           {["para218","para219","para220","para221","para222","para223"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table20}
                            data={ctx.tables3kan.Table20} /> 
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para224}
                           </Subtitle>
                           {["para225"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para226}
                           </Subtitle>
                           {["para227","para228"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.22: 2020-21ರಿಂದ 2022-23ರ ಅವಧಿಯಲ್ಲಿ ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸೇವೆಗಳ ಇಲಾಖೆಯಡಿಯಲ್ಲಿ ಆಯವ್ಯಯ ಮತ್ತು ವೆಚ್ಚಗಳು"}
                            
                            columns={ctx.tables3kan.Table21}
                            data={ctx.tables3kan.Table21} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            {["para229"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para230}
                           </Subtitle>
                           {["para231","para232"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.23: ಸತತ ಉಳಿತಾಯಗಳು"}
                            
                            columns={ctx.tables3kan.Table22}
                            data={ctx.tables3kan.Table22} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para233}
                           </Subtitle>
                           {["para234"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.24: ವೆಚ್ಚದ ಒತ್ತಡ"}
                            
                            columns={ctx.tables3kan.Table23}
                            data={ctx.tables3kan.Table23} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para235}
                           </Subtitle>
                           {["para236","para237"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para238}
                           </Subtitle>
                           {["para239"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.25: ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಇಲಾಖೆ ಅನುಷ್ಟಾನಗೊಳಿದ ಎರಡು ಕೇಂದ್ರ ಪ್ರಾಯೋಜಿತ ಯೋಜನೆಗಳ ಸಂಬಂಧವಾಗಿ ೨೦೨೨-೨೩ಅರ ಅವಧಿಯಲ್ಲಿನ ವೆಚ್ಚದಲ್ಲಿನ ವ್ಯತ್ಯಯಗಳು"}
                            
                            columns={ctx.tables3kan.Table24}
                            data={ctx.tables3kan.Table24} />
                            {["para240"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para241}
                           </Subtitle>
                           {["para242","para243"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}






      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Outcome;
