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
          {["para113", "para115", "para116", "para117", "para118", "para119", "para120"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para121"]}
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
          <Subtitle>
            {ctx.chapterThree.Profile["para146"]}
          </Subtitle>
          {["para147", "para148"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.13: Heads of Accounts with Persistent Savings in Grant No.1"}
            columns={ctx.tables3.Table18}
            data={ctx.tables3.Table18} />
          <h4>
            Source:Grant Register, Voucher Level Computerisation cell,O/o AG A&E, Karnataka
          </h4>

          <Subtitle>
            {ctx.chapterThree.Profile["para149"]}
          </Subtitle>
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
          <Subtitle>
            {ctx.chapterThree.Profile["para156"]}
          </Subtitle>
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
          <Subtitle>
            {ctx.chapterThree.Profile["para160"]}
          </Subtitle>
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
          <Subtitle>
            {ctx.chapterThree.Profile["para168"]}
          </Subtitle>
          {["para169", "para170", "para171","para171a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para172"]}
          </Subtitle>
          {["para173", "para174"].map(
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
          <Subtitle>
            {ctx.chapterThree.Profile["para176"]}
          </Subtitle>
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
          <Subtitle>
            {ctx.chapterThree.Profile["para179"]}
          </Subtitle>
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

          <Subtitle>
            {ctx.chapterThree.Profile["para181"]}
          </Subtitle>
          {["para182", "para183","para183a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            <Para tooltips={[
              { word: "balance[23]", tooltip: "  Saving bank account with the zero Balance." },

            ]}>
              {ctx.chapterThree.Profile["para184"]}
            </Para>

          </Subtitle>
          {["para185", "para186","para186a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para187"]}
          </Subtitle>
          {["para188"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

          </h3>
          <CustomTable title={"Table 3.19: Details of expenditure incurred as per SNA and implementing Agencies"}
            columns={ctx.tables3.Table24}
            data={ctx.tables3.Table24} />
          <h4>

          </h4>
          {["para188a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

          <Subtitle>
            {ctx.chapterThree.Profile["para189"]}
          </Subtitle>
          {["para190"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para191"]}
          </Subtitle>
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


          <Subtitle>
            {ctx.chapterThree.Profile["para194"]}
          </Subtitle>
          {["para195"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>

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
          <Subtitle>
            {ctx.chapterThree.Profile["para198"]}
          </Subtitle>
          <Para tooltips={[
            { word: "accounts[24]", tooltip: "  Account No.6402677843 of State Bank of India, Vidhana Soudha Branch and Account No. 00425201001227 of Canara Bank, Hebbal Branch" },

          ]}>
            {ctx.chapterThree.Profile.para199}
          </Para>
          <Subtitle>
            {ctx.chapterThree.Profile["para200"]}
          </Subtitle>
          {["para201", "para202", "para203", "para204"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para205"]}
          </Subtitle>
          <Subtitle>
            {ctx.chapterThree.Profile["para206"]}
          </Subtitle>
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

          </h3>
          <CustomTable title={"Table 3.22: Budget and expenditure under the Department of Health and Family Welfare Services for the years 2020-21 to 2022-23"}
            columns={ctx.tables3.Table28}
            data={ctx.tables3.Table28} />
          <h4>
            Source: Appropriation Accounts
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
          <Subtitle>
            {ctx.chapterThree.Profile["para227","para227a"]}
          </Subtitle>
          <h3 className='headnote'>

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

        <Title>{ctx.chapter3kannada.Content.para124}</Title>
        {["para125", "para126", "para127", "para128", "para129", "para130",
          "para131", "para132", "para133"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table10kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {["para134", "para135", "para136"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table12kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {["para137"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para138", "para139"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>

        <Table13kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para140", "para141", "para141a"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table14kan />
        <h4>*  ಉಳಿತಾಯಗಳನ್ನು ಪರಿಷ್ಕೃತ ಅಂದಾಜಿನ ಮೇಲೆ ಲೆಕ್ಕ ಹಾಕಲಾಗಿದೆ.</h4>
        {["para142a", "para142b", "para142", "para143", "para144", "para145", "para146", "para147", "para148", "para149", "para150", "para151", "para152", "para153", "para154", "para155", "para156"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table15kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {["para158", "para159", "para160"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table16kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para161", "para162"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
          (₹ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table17kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para163", "para164", "para165", "para166", "para167", "para168"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }


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
