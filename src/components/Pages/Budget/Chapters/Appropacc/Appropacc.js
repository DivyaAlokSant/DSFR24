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



const Appropacc = () => {
  const ctx = useContext(MyContext);


  return ctx.langPref ? (
    ctx.chapterThree ? (
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
    )
  ) : ctx.chapter3kannada ? (
    <div>
      <Navbar />
      <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/child-budget" forward="/budget/audit" />

        <Subtitle>
          {ctx.chapterFour.Content.para70}
        </Subtitle>
        <Para>
          {ctx.chapterFour.Content.para71}
        </Para>



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