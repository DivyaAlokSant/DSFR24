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
import CustomTable from "../../../../CustomTable/CustomTable";
const ChildBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/gender-budget" forward="/budget/Appropacc" />

          <Title>{ctx.chapterThree.Profile.para17}</Title>
          {["para18","para19"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
           <h3 className='headnote'>
          ₹ In crore
        </h3>   
         {/* <Table2 />  */}
         <CustomTable    title={"Table 3.2: Details of allocation under Child Centric Programme/Schemes"}
                        columns={ctx.tables3.Table2}
                        data={ctx.tables3.Table2} />
                        
        

        <h4>
        <i>
        Source: Grant Register and Child Budget Document
        </i>
        </h4>  
        {["para20"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}  
      
          {["para21","para22","para23"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para23a","para23b"].map(
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
          <FloatingActionButtons back="/budget/gender-budget" forward="/budget/Appropacc" />

          <Title>{ctx.chapter3kannada.Content.para116}</Title>
          {["para117","para118"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.2: ಮಕ್ಕಳ ಕೇಂದ್ರೀಕೃತ ಕಾರ್ಯಕ್ರಮ/ಯೋಜನೆಯಗಳಡಿಯಲ್ಲಿ ಹಂಚಿಕೆಗಳ ವಿವರಗಳು"}
                            
                            columns={ctx.tables3kan.Table2}
                            data={ctx.tables3kan.Table2} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ವಹಿ ಮತ್ತು ಮಕ್ಕಳ ಆಯವ್ಯಯ 
                   
                </i></h4> 
                        {["para119","para12","para120","para121"].map((item, ind) =>
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

export default ChildBudget;
