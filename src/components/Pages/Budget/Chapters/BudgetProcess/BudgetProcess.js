import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "./../../../../Title/Title";
import Subtitle from "./../../../../Subtitle/Subtitle";
import Navbar from "./../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";

import ImageComponent from 'material-ui-image'
import c31 from '../../../../../Images/c31.png'
import c32 from '../../../../../Images/c32.png'
import c53 from '../../../../../Images/c53.png'
import c54 from '../../../../../Images/c54.png'


const BudgetProcess = () => {
  const ctx = useContext(MyContext);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/introduction" forward="/budget/gender-budget" />

          <Subtitle>{ctx.chapterThree.Profile.para1}</Subtitle>
          <Para tooltips={[
            { word: "items[20]", tooltip: "Charged Expenditure: Certain categories of expenditure (e.g. salaries of Constitutional authorities, loan repayments, etc.) constitute a charge on the Consolidated Fund of the State and are not subject to vote by the Legislature. Voted Expenditure: All other expenditure is voted by the Legislature" },

          ]}>
            {ctx.chapterThree.Profile["para2"]}
          </Para>
          {["para3", "para4", "para5", "para6", "para7"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <ImageComponent src={c31} alt="chart2.20" aspectRatio={1 / .8} />
          {/* <h4 className='footnote'>
                <i>
                Source: Budget S
                   
                </i></h4> */}

          {["para8", "para9"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <ImageComponent src={c32} alt="chart2.20" aspectRatio={1 / .4} />



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
        <FloatingActionButtons back="/budget/introduction" forward="/budget/gender-budget" />

        <Title>{ctx.chapter3kannada.Content.para101}</Title>
                             {["para102","para103","para104","para105","para06","para107"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c53} alt="chart23" aspectRatio={1 / 1} />                      
                            {["para108","para109"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <ImageComponent  src={c54} alt="chart23" aspectRatio={1 / 1} />                      



      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default BudgetProcess;
