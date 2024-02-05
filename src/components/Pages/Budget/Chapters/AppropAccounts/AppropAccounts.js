import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table5 from "../../../Tables/Chapter3/Table5";
import Table6 from "../../../Tables/Chapter3/Table6";
import Table5kan from '../../../Tables/Chapter3kan/Table5'
import Table6kan from '../../../Tables/Chapter3kan/Table6'
import Subtitle from  "../../../../Subtitle/Subtitle"
const AppropAccounts = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/child-budget" forward="/budget/audit" />

          <Title>{ctx.chapterThree.Profile.Para33}</Title>

          <Para>
            {ctx.chapterThree.Profile.Para34.substring(0, 867)}
            <span className="tooltip">
              {ctx.chapterThree.Profile.Para34.substring(867, 875)}
              <span className="tooltiptext">
                Finance Accounts provides broad perspective of finances of GoK during the financial year which is dealt in the Chapter 1 and 2 of this Report.              </span>
              <sup>21</sup>
            </span>

            {ctx.chapterThree.Profile.Para34.substring(875,)}
            <Subtitle>{ctx.chapterThree.Profile.Para35}</Subtitle>
          </Para>
          {["Para36"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table5 />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          <Subtitle>{ctx.chapterThree.Profile.Para38}</Subtitle>
          {[  "Para39"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className="headnote">
          ₹ In crore
          </h3>
          <Table6 />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para39a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>{ctx.chapterThree.Profile.Para39b}</Subtitle>
          {["Para39c"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>{ctx.chapterThree.Profile.Para39d}</Subtitle>
          {["Para39e","Para39f","Para39g","Para39h"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>{ctx.chapterThree.Profile.Para39i}</Subtitle>
          {["Para39j","Para39k","Para39l","Para39m"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}


          
          
          
          {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
    )
  )
    : ctx.chapter3kannada
      ? (
        <div>
          <Navbar />
          <div className="contentwrapper" id="home">
            <FloatingActionButtons back="/budget/child-budget" forward="/budget/audit" />

            <Title>{ctx.chapter3kannada.Content.para39}</Title>
            {["para40", "para41", "para42"].map(
              (item, ind) => (
                <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
              )
            )}
            <h3 className="headnote">
            (` ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
            <Table5kan />
            <h4>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
            {["para43", "para44", "para45"].map(
              (item, ind) => (
                <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
              )
            )}
            <Table6kan />
            <h4>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
            {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}
            {["para45a"].map(
              (item, ind) => (
                <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
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
};

export default AppropAccounts;
