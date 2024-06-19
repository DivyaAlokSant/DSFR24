import React, { useContext } from "react";
import { MyContext } from "../../../../../Context/MyProvider";
import Para from "../../../../Para/Para";
import Title from "../../../../Title/Title";
import Navbar from "../../../../Navbar/Navbar";
import { FaSpinner } from "react-icons/fa";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton";
import "./../../Budget.css";
import Table7 from "../../../Tables/Chapter3/Table7";
import Subtitle from "../../../../Subtitle/Subtitle";

import Table7kan from '../../../Tables/Chapter3kan/Table7'
import Table8kan from '../../../Tables/Chapter3kan/Table8'
import Table8akan from '../../../Tables/Chapter3kan/Table8a'
import Table8bkan from '../../../Tables/Chapter3kan/Table8b'
import Table9kan from '../../../Tables/Chapter3kan/Table9'
import CustomTable from "../../../../CustomTable/CustomTable";



import c33 from '../../../../../Images/c33.png'
import c34 from '../../../../../Images/c34.png'
import c35 from '../../../../../Images/c35.png'

import c36 from '../../../../../Images/c36.png'
import c37 from '../../../../../Images/c37.png'

import c35a from '../../../../../Images/c35a.png'
import ImageComponent from 'material-ui-image'
import c55 from '../../../../../Images/c55.png'
import c56 from '../../../../../Images/c56.png'
import c57 from '../../../../../Images/c57.png'

import c59 from '../../../../../Images/c59.png'
import c60 from '../../../../../Images/c60.png'
import c61 from '../../../../../Images/c61.png'
const Audit = () => {
  const ctx = useContext(MyContext);




  return ctx.langPref ? (
    ctx.chapterThree ? (
      <div>
        <Navbar />
        <div className="contentwrapper" id="home">
          <FloatingActionButtons back="/budget/Appropacc" forward="/budget/outcome" />

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
          <ImageComponent src={c33} alt="chart2.20" aspectRatio={1 / 0.55} />
          <h3 className='footnote'>
          Source:Grant Register
          </h3>
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
          <ImageComponent src={c34} alt="chart2.14" aspectRatio={1 / 0.6} />

          {["para78"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <Subtitle>
            {ctx.chapterThree.Profile["para79"]}
          </Subtitle>
          {["para80", "para81", "para82","para82a", "para83", "para84", "para85"].map(
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

          <h4 className="footnote">
          Source: Appropriation Accounts and Grant Register
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

<h4 className="footnote">
          Source: Appropriation Accounts 
          </h4>



          {["para100"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <ImageComponent src={c35} alt="chart2.14" aspectRatio={1 / 0.7} />

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
          <ImageComponent src={c35a} alt="chart3.3a" aspectRatio={1 / 0.5} />

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
          <CustomTable 
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

          <ImageComponent src={c36} alt="chart3.3a" aspectRatio={1 / 0.5} />

          <Subtitle>
            {ctx.chapterThree.Profile["para111"]}
          </Subtitle>
          {["para112"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterThree.Profile[item]}</Para>
            )
          )}
          <ImageComponent src={c37} alt="chart3.3a" aspectRatio={1 / 0.6} />

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
        <FloatingActionButtons back="/budget/Appropacc" forward="/budget/outcome" />

        <Title>{ctx.chapter3kannada.Content.para139}</Title>
                           {["para14"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle><i>
                           {ctx.chapter3kannada.Content.para140}</i>
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para141}
                           </Subtitle>
                           {["para141a","para142","para142a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಟಕ-೩.೭: 201೯-೨೦ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಕಾರ್ಯಕಾರಿ ಆದೇಶಗಳ ಮೂಲಕ ಬಿಡುಗಡೆಯಾದ ಹೆಚ್ಚುವರಿ ಮೊತ್ತಗಳು"}
                            
                            columns={ctx.tables3kan.Table3}
                            data={ctx.tables3kan.Table3} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ : ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು 
                   
                </i></h4> 
                            {["para142b","para143","para144"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para145}
                           </Subtitle>
                           {["para146","para147"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table4}
                            data={ctx.tables3kan.Table4} />

                            {["para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table5}
                            data={ctx.tables3kan.Table5} />

                            {["para149"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table6}
                            data={ctx.tables3kan.Table6} />
                            {["para15"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para150}
                           </Subtitle>
                           {["para151"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c55} alt="chart23" aspectRatio={1 / 1} />                      
                            {["para152"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para153}
                           </Subtitle>
                           {["para154","para155"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para156}
                           </Subtitle>
                           {["para157","para158","para159","para16","para160","para161"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}

                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para162}
                           </Subtitle>
                           {["para163"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para164}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para165}
                           </Subtitle>
                           {["para166","para167","para168"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                                </Para>)}
                                <ImageComponent  src={c56} alt="chart23" aspectRatio={1 / 1} />                        
                            {["para169"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para17}
                           </Subtitle>
                           {["para170","para171","para172","para173","para174","para175","para176"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                                </Para>)}
                          <Subtitle>
                           {ctx.chapter3kannada.Content.para177}
                           </Subtitle>
                           {["para178"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para179}
                           </Subtitle>
                           {["para18"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                   <CustomTable title={"ಕೋಷ್ಠಕ-3.8: ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಸಕ್ರಮೀಕರಣದ ಅಗತ್ಯವಿರುವ ಅವಕಾಶದ ಮೇಲಿನ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚಗಳು"}
                            
                            columns={ctx.tables3kan.Table8}
                            data={ctx.tables3kan.Table8} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು ಮತ್ತು ಅನುದಾನ ವಹಿ 
                   
                </i></h4> 
                {["para18a"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                   <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table7}
                            data={ctx.tables3kan.Table7} />
                           

                            {["para180","para19","para2"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                                </Para>)}
                          <Subtitle>
                           {ctx.chapter3kannada.Content.para20}
                           </Subtitle>
                            {["para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para22}
                           </Subtitle>
                           <Subtitle>
                           {ctx.chapter3kannada.Content.para23}
                           </Subtitle>
                           {["para24","para25"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                   <CustomTable title={"ಕೋಷ್ಠಕ-3.9: ೨೦೨೨-೨೩ರ ಹಣಕಾಸಿನ ವರ್ಷದಲ್ಲಿ ಆಯವ್ಯಯ ಅವಕಾಶಕ್ಕೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಿಕ ವೆಚ್ಚ"}
                            
                            columns={ctx.tables3kan.Table8a}
                            data={ctx.tables3kan.Table8a} />
                               <h4 className='footnote'>
                <i>
                ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು
                   
                </i></h4> 
                            {["para26"].map((item, ind) =>
                            <Para key={ind / 10}>
                              <ImageComponent  src={c57} alt="chart23" aspectRatio={1 / 1} />                           
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            {["para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                   <CustomTable title={"ಕೋಷ್ಠಕ-3.10: ೨೦೧೮-೧೯ರಿಂದ ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಮೂಲ ಆಯವ್ಯಯ, ಪರಿಷ್ಕೃತ ಅಂದಾಜು ಮತ್ತು ವಾಸ್ತವಿಕ ವೆಚ್ಚ"}
                            
                            columns={ctx.tables3kan.Table8b}
                            data={ctx.tables3kan.Table8b} />
                               <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ಮತ್ತು ಪ್ರಭೃತ ವಿನಿಯೋಗಗಳು ಹಾಗೂ ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳ ಬೇಡಿಕೆಗಳ ಸಾರಾಂಶ
                   
                </i></h4> 

                            {["para28"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c59} alt="chart23" aspectRatio={1 / 1} />                           
           
                            {["para29","para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para30}
                           </Subtitle>
                           {["para31","para32","para33"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <CustomTable title={""}
                            
                            columns={ctx.tables3kan.Table9}
                            data={ctx.tables3kan.Table9} />

                            {["para33a","para34"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c60} alt="chart23" aspectRatio={1 / 1} />                             
                            <Subtitle>
                           {ctx.chapter3kannada.Content.para35}
                           </Subtitle>
                           {["para36"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <ImageComponent  src={c61} alt="chart23" aspectRatio={1 / 1} />                             

                            {["para37","para38"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter3kannada.Content[item]}
                            </Para>)}
                            <h3 className='headnote'>
                            ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                            <CustomTable title={"ಕೋಷ್ಠಕ-3.11: ಮಾರ್ಚ್‌ 2023ರಲ್ಲಿ ವೆಚ್ಚದ ಪ್ರಮಾಣ"}
                            
                            columns={ctx.tables3kan.Table10}
                            data={ctx.tables3kan.Table10} />
                              <h4 className='footnote'>
                <i>
                ಆಕರ: ಅನುದಾನ ವಹಿ ಮತ್ತು ಮಕ್ಕಳ ಆಯವ್ಯಯ 
                   
                </i></h4> 
                            {["para39"].map((item, ind) =>
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

export default Audit;
