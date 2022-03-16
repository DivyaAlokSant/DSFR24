import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table1 from "../../../Tables/Chapter3/Table1";

const GenderBudget = () => {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);

  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/budget-process" forward="/budget/child-budget" />

          <Title>{ctx.chapterThree.Profile.Para8}</Title>
          {["Para9", "Para10", "Para11", "Para12"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Table1/>
             {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

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

      <Title>{ctx.chapter3kannada.Content.para12}</Title>
      {["para13", "para14", "para15", "para16","para17"].map(
        (item, ind) => (
          <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
        )
      )}
      <Table1/>
      <Para>{ctx.chapter3kannada.Content.para18}</Para>
         {/* <Para>{ctx.chapterThree.Introduction.Para1}</Para> */}

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
