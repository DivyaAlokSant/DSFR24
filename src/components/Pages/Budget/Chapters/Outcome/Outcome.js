import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Subtitle from  "../../../../Subtitle/Subtitle";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
//import Table11 from "../../../Tables/Chapter3/Table11";
//import Table12 from "../../../Tables/Chapter3/Table12";
//import Table13 from "../../../Tables/Chapter3/Table13";
//import Table14 from "../../../Tables/Chapter3/Table14";
//import Table15 from "../../../Tables/Chapter3/Table15";
//import Table16 from "../../../Tables/Chapter3/Table16";
//import Table17 from "../../../Tables/Chapter3/Table17";
import Table10kan from '../../../Tables/Chapter3kan/Table10'
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
          <Title>{ctx.chapterThree.Profile.para116}</Title>
          {["para113","para115","para116","para117","para118","para119","para120"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para121"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para121a"]}
      </Subtitle>
      {["para121b","para122","para122a","para123","para124","para125","para126","para127","para128","para129","para130","para131","para132","para133","para134"].map(
            (item, ind) => (
              <Para key={ind / 10}  >{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para135"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para136"]}
      </Subtitle>
      {["para137"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para138"]}
      </Subtitle>
      {["para139"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para140"]}
      </Subtitle>
      {["para141"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para142"]}
      </Subtitle>
      {["para143"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para144"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para145"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para146"]}
      </Subtitle>
      {["para147","para148"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para149"]}
      </Subtitle>
      {["para150","para151"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para152","para153","para154","para155"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para156"]}
      </Subtitle>
      {["para157"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para158","para159"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para160"]}
      </Subtitle>
      {["para161","para162","para163"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para164","para165","para166"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para167"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para168"]}
      </Subtitle>
      {["para169","para170","para171"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para172"]}
      </Subtitle>
      {["para173","para174"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para175"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para176"]}
      </Subtitle>
      {["para177","para178"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para179"]}
      </Subtitle>
      {["para180"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
    
    <Subtitle>
        {ctx.chapterThree.Profile["para181"]}
      </Subtitle>
      {["para182","para183"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
       <Subtitle>
        {ctx.chapterThree.Profile["para184"]}
      </Subtitle> 
      {["para185","para186"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )} 
      <Subtitle>
        {ctx.chapterThree.Profile["para187"]}
      </Subtitle>
      {["para188"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para189"]}
      </Subtitle>
      {["para190"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para191"]}
      </Subtitle> 
      {["para192","para193"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
       <Subtitle>
        {ctx.chapterThree.Profile["para194"]}
      </Subtitle>
      {["para195"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para196"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para197"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para198"]}
      </Subtitle>
      {["para199"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para200"]}
      </Subtitle>
      {["para201","para202","para203","para204"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para205"]}
      </Subtitle>
      <Subtitle>
        {ctx.chapterThree.Profile["para206"]}
      </Subtitle>
      {["para207","para208","para209","para210","para211","para212"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para213"]}
      </Subtitle>
      {["para214"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para215"]}
      </Subtitle>
      {["para216","para217"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      {["para218"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para219"]}
      </Subtitle>
      {["para220","para221"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para222"]}
      </Subtitle>
      {["para223"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para224"]}
      </Subtitle>
      {["para225","para226"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para227"]}
      </Subtitle>
      {["para228"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
      <Subtitle>
        {ctx.chapterThree.Profile["para229"]}
      </Subtitle>
      {["para230","para231"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
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
  ) : ctx.chapter3kannada ? (
    <div>
      <Navbar />
      <div className="contentwrapper" id="home">
        <FloatingActionButtons back="/budget/audit" forward="/budget/conclusion" />

        <Title>{ctx.chapter3kannada.Content.para124}</Title>
        {["para125", "para126", "para127", "para128", "para129", "para130",
          "para131", "para132","para133"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
             <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table10kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {[ "para134","para135","para136"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
          <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table12kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {["para137"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
         {["para138", "para139"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
          <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>

        <Table13kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para140", "para141","para141a"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
         <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table14kan  />
        <h4>*  ಉಳಿತಾಯಗಳನ್ನು ಪರಿಷ್ಕೃತ ಅಂದಾಜಿನ ಮೇಲೆ ಲೆಕ್ಕ ಹಾಕಲಾಗಿದೆ.</h4>
        {["para142a","para142b","para142", "para143", "para144", "para145", "para146", "para147", "para148", "para149", "para150", "para151", "para152", "para153", "para154", "para155","para156"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table15kan />
        <h4>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
        {[ "para158", "para159", "para160"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
         <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
        <Table16kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para161", "para162"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
          }
          <h3 className="headnote">
             (₹ಕೋಟಿಗಳಲ್ಲಿ)
          </h3>
         <Table17kan />
        <h4>ಆಕರ: ಅನುದಾನ ವಹಿ</h4>
        {["para163","para164", "para165", "para166", "para167", "para168"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
       

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
