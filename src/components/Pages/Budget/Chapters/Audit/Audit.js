import React, { useContext, useState } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table7 from "../../../Tables/Chapter3/Table7";
import Subtitle from "../../../../Subtitle/Subtitle";

//import Table7a from "../../../Tables/Chapter3/Table7a";
//import Table7b from "../../../Tables/Chapter3/Table7b";
//import Table7c from "../../../Tables/Chapter3/Table7c";
//import Table8 from "../../../Tables/Chapter3/Table8";
//import Table9 from "../../../Tables/Chapter3/Table9";
//import Table10 from "../../../Tables/Chapter3/Table10";
import Table7kan from '../../../Tables/Chapter3kan/Table7'
import Table8kan from '../../../Tables/Chapter3kan/Table8'
import Table8akan from '../../../Tables/Chapter3kan/Table8a'
import Table8bkan from '../../../Tables/Chapter3kan/Table8b'
import Table9kan from '../../../Tables/Chapter3kan/Table9'
import Table10kan from '../../../Tables/Chapter3kan/Table10'
//import Table11 from "../../../Tables/Chapter3/Table11";
//import Table16 from "../../../Tables/Chapter3/Table16";
import CustomTable from "../../../../CustomTable/CustomTable";
import { Chart3 as Chart3Chap3 } from '../../../Charts/Chap3Charts'
import k32 from '../../../../../Images/k32.png'
import k32a from '../../../../../Images/k32a.png'
import k33 from '../../../../../Images/k33.png'
import c32 from '../../../../../Images/c32.png'
import c32a from '../../../../../Images/c32a.png'
import c33 from '../../../../../Images/c33.png'
import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'


const Audit = () => {
  const ctx = useContext(MyContext);

  const [url, setURL] = useState("");
  const [url2, setURL2] = useState("");


  getFirebase()
    .storage()
    .ref('/pdfs/chart32.png')
    .getDownloadURL()
    .then((url) => {
      setURL(url);
    });


  getFirebase()
    .storage()
    .ref('/pdfs/3731text.png')
    .getDownloadURL()
    .then((url2) => {
      setURL2(url2);
    });


  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/appropaccounts" forward="/budget/outcome" />

          <Title>{ctx.chapterThree.Profile.para43}</Title>
          {["para44"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            <i>
              {ctx.chapterThree.Profile["para45"]}
            </i>
          </Subtitle>
          <Subtitle>

            {ctx.chapterThree.Profile["para46"]}

          </Subtitle>
          {["para47", "para48", "para48a"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

          <Table7 />
          <h4>
            <i>
              Source: Appropriation Accounts
            </i>
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>



          {["para48b", "para49", "para50"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>

            {ctx.chapterThree.Profile["para51"]}

          </Subtitle>
          {["para52"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}

          {["para53"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <CustomTable title={"Grant head and nature of expenditure in crore"}
            columns={ctx.tables3.Table8}
            data={ctx.tables3.Table8} />

          <h4>

          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>


          {["para54"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <CustomTable title={"Grant head and nature of expenditure in crore"}
            columns={ctx.tables3.Table9}
            data={ctx.tables3.Table9} />

          <h4>

          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>

          {["para55"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Head of Account and Amount in crore"}
            columns={ctx.tables3.Table10}
            data={ctx.tables3.Table10} />

          <h4>
          </h4>
          
          {["para56"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>

            {ctx.chapterThree.Profile["para57"]}

          </Subtitle>
          {["para58"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para59"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>

            {ctx.chapterThree.Profile["para60"]}

          </Subtitle>
          {["para61", "para62"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>

            {ctx.chapterThree.Profile["para63"]}

          </Subtitle>
          {["para64", "para65", "para66", "para67", "para68", "para69"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>

            {ctx.chapterThree.Profile["para70"]}

          </Subtitle>
          {["para71"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para72"]}
          </Subtitle>
          <Subtitle>
            {ctx.chapterThree.Profile["para73"]}
          </Subtitle>
          {["para74", "para75", "para77"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para78"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para79"]}
          </Subtitle>
          {["para80", "para81", "para82", "para83", "para84", "para85"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para86"]}
          </Subtitle>
          {["para87"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para88"]}
          </Subtitle>
          {["para89"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.8:Excess expenditure over the provision during 2022-23 requiring regularization"}
            columns={ctx.tables3.Table11}
            data={ctx.tables3.Table11} />

          <h4>
          </h4>



          {["para90"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={""}
            columns={ctx.tables3.Table12}
            data={ctx.tables3.Table12} />

          <h4>
          </h4>



          {["para91", "para92", "para93"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para94"]}
          </Subtitle>
          {["para95"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para96"]}
          </Subtitle>
          <Subtitle>
            {ctx.chapterThree.Profile["para97"]}
          </Subtitle>
          {["para98", "para99"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h4>
          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.9:Actual expenditure vis-a-vis budget provision during the financial year 2022-23"}
            columns={ctx.tables3.Table13}
            data={ctx.tables3.Table13} />





          {["para100"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para101"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
         
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table 3.10: Original Budget, Revised Estimate and Actual Expenditure during 2018-2019 to 2022-23"}
            columns={ctx.tables3.Table14}
            data={ctx.tables3.Table14} />
           <h4>
            Source:Summary of Demands for Grants and Charged Approporiations, and Appropriation Accounts
          </h4>


          {["para102"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para103", "para104"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para105"]}
          </Subtitle>
          {["para106", "para107", "para108"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={""}
            columns={ctx.tables3.Table15}
            data={ctx.tables3.Table15} />
           <h4>
            Source:Appropriation Accounts
          </h4>



          {["para109", "para110"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para111"]}
          </Subtitle>
          {["para112"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          {["para113", "para114"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <h3 className='headnote'>
            ₹ In crore
          </h3>
          <CustomTable title={"Table3.11: Quantum of Expenditure in March 2023"}
            columns={ctx.tables3.Table16}
            data={ctx.tables3.Table16} />
           <h4>
            Source:Monthly Civil Accounts
            *The expenditure is Rs.(-)3,301 and hence indicated as Zero
          </h4>

        
          {["para115"].map(
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
        <FloatingActionButtons back="/budget/appropaccounts" forward="/budget/outcome" />

        <Title>{ctx.chapter3kannada.Content.para46}</Title>
        {["para47", "para48", "para49", "para50", "para51", "para52",
          "para53", "para54", "para55", "para56"].map(
            (item, ind) => (
              <Para key={ind / 10}>
                {ctx.chapter3kannada.Content[item]}
              </Para>
            ))}
        <h3 className="headnote">
          (` ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table7kan />
        <h6>ಆಧಾರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para57", "para58", "para59", "para60", "para61"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8kan />
        <h6>ಆಕರ: ಅನುದಾನ ವಹಿ</h6>
        {["para62"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8akan />
        {["para63"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table8bkan />
        {["para64"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para65", "para65a", "para66"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Title >
          ನಕ್ಷೆ-3.2: ಅನವಶ್ಯಕ/ಅಧಿಕ/ಅಪರ್ಯಾಪ್ತ ಪೂರಕ ಅನುದಾನಗಳು*
        </Title>
        <h3 className="headnote">
          (` ಕೋಟಿಗಳಲ್ಲಿ )
        </h3>
        <ImageComponent src={k32} aspectRatio={1 / 0.5} />
        <h4> * ಅನಗತ್ಯ/ಅಧಿಕ/ಅಪರ್ಯಾಪ್ತ ಪೂರಕ ಅವಕಾಶಗಳನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪುನರ್ವಿನಿಯೋಗ ಆದೇಶಗಳನ್ನು ಪರಿಗಣಿಸಿಲ್ಲ</h4>
        {["para67", "para68", "para69", "para70", "para71", "para72", "para73", "para74"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para75", "para76", "para77", "para78", "para79", "para80", "para81", "para82", "para83", "para84"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {["para85", "para86", "para87", "para88", "para89", "para90", "para91", "para92", "para93", "para94", "para95", "para96", "para97", "para98", "para99", "para100", "para101", "para102", "para103", "para104"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <h3 className="headnote">

        </h3>
        <ImageComponent src={k32a} aspectRatio={1 / 0.3} />
        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>

        {["para105", "para106", "para107"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Title>
          ನಕ್ಷೆ ೩.೩: ೨೦೨೧-೨೨ರಲ್ಲಿ ಮಾಸಿಕ ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವಿತರಣೆಗಳು
        </Title>
        <h3 className="headnote">
          (` ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <ImageComponent src={k33} aspectRatio={1 / 0.3} />
        <h4>ಆಕರ: ಮಾಸಿಕ ಸಿವಿಲ್‌ ಲೆಕ್ಕಗಳು	</h4>
        <h3 className="headnote">
          (` ಕೋಟಿಗಳಲ್ಲಿ)
        </h3>
        <Table9kan />
        <h4>ಆಕರ: ಮಾಸಿಕ ಸಿವಿಲ್‌ ಲೆಕ್ಕಗಳು</h4>

        {["para110"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        {/* {["para110","para111","para112","para113","para114","para115","para116","para117","para118","para119"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Chart3Chap3 />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para120","para121"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        }
        <Table10kan />
        <h6>ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h6>
        {["para122", "para123"].map(
          (item, ind) => (
            <Para key={ind / 10}>{ctx.chapter3kannada.Content[item]}</Para>
          ))
        } */}

      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
};

export default Audit;
