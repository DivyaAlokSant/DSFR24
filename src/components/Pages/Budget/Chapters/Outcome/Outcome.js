import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table11 from "../../../Tables/Chapter3/Table11";
import Table12 from "../../../Tables/Chapter3/Table12";
import Table13 from "../../../Tables/Chapter3/Table13";
import Table14 from "../../../Tables/Chapter3/Table14";
import Table15 from "../../../Tables/Chapter3/Table15";
import Table16 from "../../../Tables/Chapter3/Table16";
import Table17 from "../../../Tables/Chapter3/Table17";
import Table11kan from '../../../Tables/Chapter3kan/Table11'
import Table12kan from '../../../Tables/Chapter3kan/Table12'
import Table13kan from '../../../Tables/Chapter3kan/Table13'
import Table14kan from '../../../Tables/Chapter3kan/Table14'
import Table15kan from '../../../Tables/Chapter3kan/Table15'
import Table16kan from '../../../Tables/Chapter3kan/Table16'
import Table17kan from '../../../Tables/Chapter3kan/Table17'


const Outcome = () => {
  const ctx = useContext(MyContext);
  console.log(ctx.chapter3kannada);


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">

          <FloatingActionButtons back="/budget/audit" forward="/budget/conclusion" />
          <Title>{ctx.chapterThree.Profile.Para120}</Title>
          {["Para121", "Para122", "Para123", "Para124", "Para125", "Para126",
            "Para127", "Para128"].map(
              (item, ind) => (
                <Para key={ind / 10}>
                  {ctx.chapterThree.Profile[item]}
                </Para>
              ))}

          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table11 />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para129", "Para130", "Para131"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table12 />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para132", "Para133"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table13 />
          <h4 className="footnote">
            <i>
              Source: Grant Register
            </i>
          </h4>

          {["Para134", "Para135", "Para136", "Para137"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }

          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table14 />
          <h4 className="footnote">
            <i>
              Source: Grant Register
            </i>
          </h4>

          {["Para138", "Para139", "Para140", "Para141", "Para142", "Para143", "Para144", "Para145", "Para146", "Para147", "Para148", "Para149", "Para150", "Para151", "Para152", "Para153", "Para154", "Para155", "Para156"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }

          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table15 />
          <h4 className="footnote">
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          {["Para157", "Para158", "Para159"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }

          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table16 />
          <h4 className="footnote">
            <i>
              Source: Grant Register
            </i>
          </h4>
          {["Para160", "Para161", "Para162", "Para163", "Para164", "Para165", "Para166", "Para167", "Para168"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            ))
          }
          <h3 className="headnote">
            ₹ In crore
          </h3>
          <Table17 />
          <h4 className="footnote">
            <i>
              Source: Grant Register
            </i>
          </h4>
        </div>
      </div>
    ) 
    : (
      <div>
        <Navbar />
        <FaSpinner icon="spinner" className="spinner" />
      </div>
    )
  ) : ctx.chapter3kannada ? (
    <div>
      <Navbar />
      <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/audit" forward="/budget/conclusion" />

        <Title>{ctx.chapter3kannada.Content.para124}</Title>
        {["para125", "para126", "para127", "para128", "para129", "para130",
          "para131", "para132"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
        <Table11kan />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para133", "para134", "para135"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table12kan />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para136", "para137"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }

        <Table13kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para138", "para139", "para140", "para141"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table14kan  />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para142a","para142b","para142", "para143", "para144", "para145", "para146", "para147", "para148", "para149", "para150", "para151", "para152", "para153", "para154", "para155", "para156", "para157"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table15kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {[ "para158", "para159", "para160"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table16kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para161", "para162", "para163","para164", "para165", "para166", "para167", "para168", "para169"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table17kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>

      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Outcome;
