import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../State.css'
import Subtitle from "./../../../../Subtitle/Subtitle"
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
//import Table10 from "../../../Tables/Chapter5/Table10";
import Table10kan from "../../../Tables/Chapter5kan/Table10";
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable"


const Loss = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Performance" forward="/State/Auditt" />
                        <Subtitle>
                            {ctx.chapterFive.para55}
                        </Subtitle>   
                        <Subtitle>
                            {ctx.chapterFive.para56}
                        </Subtitle>   
        <Para tooltips={[
       { word: "SPSUs[47]", tooltip:"56 SPSEs include eight non-working SPSEs" },
       
       
        ]}>

        {ctx.chapterFive.para57}
        </Para>
        <h3 className='headnote'>
            ₹ In crore
        </h3>
      
     <CustomTable title={"Table 5.10: SPSEs that incurred losses during 2020-21 to 2022-23"}
            columns={ctx.tables5.Table10}
            data={ctx.tables5.Table10} />

          <h4>
        
          </h4>
      

        <Para tooltips={[
       { word: "SPSUs[49]", tooltip:" Bangalore Electricity Supply Company Limited (BESCOM) loss of ₹1,767.49 crore, Hubli Electricity Supply Company Limited (HESCOM) loss of ₹836.22 crore, Raichur Power Corporation Limited (RPCL) loss of ₹678.22 crore and Karnataka Neeravari Nigam Limited (KNNL) loss of ₹1,135.84 crore." },
       
       
        ]}>

        {ctx.chapterFive.para58}
        </Para>
        <Subtitle>
        {ctx.chapterFive.para59}
        </Subtitle>   
        <Para tooltips={[
       { word: "liquidation[50]", tooltip:"  The Karnataka State Veneers Limited (KSVL, Mysore Cosmetics Limited (MCL) and Bangalore Airport Rail Link Limited (under voluntary liquidation)." },
       
       
        ]}>

        {ctx.chapterFive.para60}
        </Para>
        {["para61","para62","para62a","para62b","para62c","para62d"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )} 
           
                       
     </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter5kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/State/Performance" forward="/State/Auditt"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para54}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para55}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para56}
                        </Para>

                        <h3 className='headnote'>
                            ₹  ಕೋಟಿಗಳಲ್ಲಿ
                        </h3>
                        <CustomTable title={"ಕೋಷ್ಟಕ-5.10: ೨೦೨೦-೨೧ರಿಂದ ೨೦೨೨-೨೩ರವರೆಗೆ ನಷ್ಟ ಅನುಭವಿಸಿದ ರಾಜ್ಯ ಸಾರ್ವಜನಿಕ ವಲಯ ಉದ್ದಿಮೆಗಳ ಸಂಖ್ಯೆ"}
                                        
                                        columns={ctx.tables5kan.Table9}
                                        data={ctx.tables5kan.Table9} />

   

                        <Para>
                            {ctx.chapter5kannada.Content.Para57}
                        </Para> 
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para58}
                            </i>
                        </Subtitle>
                        {["Para59", "Para60", "Para61","Para62","Para63","Para64","Para65"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}


                            
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Loss