import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

const BudConclusion = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/outcome" forward="/budget/Recommendations" />

          <Title>{ctx.chapterThree.Profile.para232}</Title>
          {["para233","para234","para235","para236"].map(
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
      <FloatingActionButtons back="/budget/outcome" forward="/budget/Recommendations" />

      <Title>{ctx.chapter3kannada.Content.para244}</Title>
      {["para245","para246","para247","para248"].map((item, ind) =>
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

export default BudConclusion;
