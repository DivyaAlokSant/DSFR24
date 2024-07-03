import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Subtitle from "./../../../../Subtitle/Subtitle";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import CustomTable from "../../../../CustomTable/CustomTable";
import ImageComponent from 'material-ui-image'



const Appropacc = () => {
  const ctx = useContext(MyContext);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/child-budget" forward="/budget/audit" />
          <Title>{ctx.chapterThree.Profile.para24}</Title>
          <Para tooltips={[
                            { word: "Accounts[21]", tooltip: "  Finance Accounts provides broad perspective of finances of GoK during the financial year which is dealt in the Chapter 1 and 2 of this Report." },

                        ]}>
                            {ctx.chapterThree.Profile.para25}
                        </ Para>
          {/* {["para25"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )} */}
           <Title>{ctx.chapterThree.Profile.para26}</Title>
           {["para27"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
             <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.3: Number of Grants Appropriations operated by the State in 2022-23"}
            columns={ctx.tables3.Table14a}
            data={ctx.tables3.Table14a} />
          <h4>
          Source: Appropriation Accounts
          </h4>
          <Title>{ctx.chapterThree.Profile.para28}</Title>
          {["para29"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.4: Voted and Charged disbursement for the period from 2018-19 to 2022-23"}
            columns={ctx.tables3.Table14b}
            data={ctx.tables3.Table14b} />
          <h4>
          Source: Appropriation Accounts
          </h4>

            {["para30"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
            <Title>{ctx.chapterThree.Profile.para31}</Title>
            {["para32"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
            <Title>{ctx.chapterThree.Profile.para33}</Title>
            {["para34"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.5: Deviation of outturn in compared with BE"}
            columns={ctx.tables3.Table14c}
            data={ctx.tables3.Table14c} />
          <h4>
          Source: Appropriation Accounts
          </h4>
          <h4>
          *Excess of actuals over original provision is denoted as (+) figure and shortage of actuals over original provision is denoted as (-) figure.
          </h4>


            {["para35","para36","para37"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <Title>{ctx.chapterThree.Profile.para38}</Title>
           {["para39"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
            <h3 className='headnote'>
            ₹ In crore
          </h3>
            <CustomTable title={"Table 3.6: Deviation of outturn in compared with RE"}
            columns={ctx.tables3.Table14d}
            data={ctx.tables3.Table14d} />
          <h4>
          Source: Appropriation Accounts
          </h4>
          <h4>
          *Excess of actuals over revised estimate is denoted as (+) figure and shortage of actuals over revised estimate is denoted as (-) figure
          </h4>


{["para40","para41","para42"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
    )
  ) : ctx.chapter3kannada ? (
    <div>
      <Navbar />
      <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/child-budget" forward="/budget/audit" />

      



      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Appropacc;