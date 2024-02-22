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

          <Title>{ctx.chapterThree.Profile.para24}</Title>
          {["para25"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          
          <Subtitle>
          <i>
          {ctx.chapterThree.Profile["para26"]}
          </i>
          </Subtitle>
          {["para27"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
          <i>
          {ctx.chapterThree.Profile["para28"]}
          </i>
          </Subtitle>
          {["para29"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           {["para30"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
          <i>
          {ctx.chapterThree.Profile["para31"]}
          </i>
          </Subtitle>
          {["para32"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
        <Subtitle>
         
          {ctx.chapterThree.Profile["para33"]}
       
        </Subtitle>
          {["para34"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para34","para35","para36","para37"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
        <Subtitle>
         
         {ctx.chapterThree.Profile["para38"]}
      
        </Subtitle>
        {["para39"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
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
