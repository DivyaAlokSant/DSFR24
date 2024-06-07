import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
//import Table1 from "../../../Tables/Chapter3/Table1";
import Table1kan from '../../../Tables/Chapter3kan/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";
const GenderBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/budget-process" forward="/budget/child-budget" />

          <Title>{ctx.chapterThree.Profile.para10}</Title>
          {["para11","para12","para13","para14"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
        

        <CustomTable    title={"Table 3.1 – Category-wise allocation during 2018-19 to 2022-23"}
                        columns={ctx.tables3.Table1}
                        data={ctx.tables3.Table1} />



        {["para15","para16"].map(
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
        <FloatingActionButtons back="/budget/budget-process" forward="/budget/child-budget" />

        <Title>{ctx.chapter3kannada.Content.para11}</Title>
        {["para110","para111","para112","para113"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-3.1: ೨೦೧೮-೧೯ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ವರ್ಗವಾರು ಹಂಚಿಕೆ"}
                            
                            columns={ctx.tables3kan.Table1}
                            data={ctx.tables3kan.Table1} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಸಂಬಂಧಿತ ವರ್ಷಗಳ ಅನುದಾನ ವಹಿ ಮತ್ತು ಮಹಿಳಾ ಉದ್ದೇಶಿತ ಆಯವ್ಯಯ
                   
                </i></h4> 
                            {["para114","para115"].map((item, ind) =>
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

export default GenderBudget;
