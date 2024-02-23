import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Subtitle from  "../../../../Subtitle/Subtitle"
import Table2 from "../../../Tables/Chapter3/Table2";
import Table3 from "../../../Tables/Chapter3/Table3";
import Table2kan from '../../../Tables/Chapter3kan/Table2'
import Table3kan from '../../../Tables/Chapter3kan/Table3'
const ChildBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/gender-budget" forward="/budget/appropaccounts" />

          <Title>{ctx.chapterThree.Profile.para17}</Title>
          {["para18","para19"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
         <Table2 /> 
        <h4>
        <i>
        Source: Grant Register and Child Budget Document
        </i>
        </h4>    
        <h3 className='headnote'>
          ₹ In crore
        </h3>   

          {["para20","para21","para22","para23"].map(
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
          <FloatingActionButtons back="/budget/gender-budget" forward="/budget/appropaccounts" />

          <Title>{ctx.chapter3kannada.Content.para19}</Title>
         
          {["para21", "para22"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
            )
          )}
          
          
          <Table2kan/>  
          <h4>
          ಆಕರ: ಅನುದಾನ ವಹಿ
          </h4>
             {/* <Para>{ctx.chapter3kannada.Introduction.Para1}</Para> */}
             {/* <Para>{ctx.chapter3kannada.Content.para31}</Para>
             <Table3kan/>
             <h6>ಆಕರ: ಅನುದಾನ ವಹಿಗಳು</h6> */}
        
             <Para>{ctx.chapter3kannada.Content.para32}</Para>
             <Para>{ctx.chapter3kannada.Content.para33}</Para>
             <Para>{ctx.chapter3kannada.Content.para33a}</Para>
        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
  );
};

export default ChildBudget;
