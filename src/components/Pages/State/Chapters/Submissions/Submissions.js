import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import Subtitle from "./../../../../Subtitle/Subtitle"
//import Table11 from "../../../Tables/Chapter5/Table11";
import Table11kan from "../../../Tables/Chapter5kan/Table11";
import './../../State.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
// import Table1 from '../../../Tables/Chapter4/Table1'
import CustomTable from "../../../../CustomTable/CustomTable";


const Submissions = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFive
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/State/Appointment" forward="/State/Cag" />

                        <Subtitle>
                            {ctx.chapterFive.para68}
                        </Subtitle>  
                        <Subtitle>
                            {ctx.chapterFive.para69}
                        </Subtitle>  
             {["para70","para71","para72","para73","para74"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
                        <Subtitle>
                            {ctx.chapterFive.para75}
                        </Subtitle>   
             {["para76","para77"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}  
        <CustomTable title={"Table 5.11: Details of arrears in submission of accounts of SPSEs"}
            columns={ctx.tables5.Table11}
            data={ctx.tables5.Table11} />

          <h4>
        
          </h4>
        <h3 className='headnote'>
      
        </h3>
          {["para78","para79"].map(
            (item, ind) => (
              <Para key={ind / 10}>{ctx.chapterFive[item]}</Para>
            )
          )}   
                        <Subtitle>
                            {ctx.chapterFive.para80}
                        </Subtitle>   
                        {["para81","para82"].map(
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
                    <FloatingActionButtons back="/State/Appointment" forward="/State/Cag"  />


                        <Title>
                            {ctx.chapter5kannada.Content.Para57}
                        </Title>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para58}
                            </i>
                        </Subtitle>
                        {["Para59", "Para60","Para61","Para62"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter5kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para63}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para64}
                        </Para> 
                        <Table11kan />
                        <Para>
                            {ctx.chapter5kannada.Content.Para65}
                        </Para>
                        <Subtitle>
                            <i>
                            {ctx.chapter5kannada.Content.Para66}
                            </i>
                        </Subtitle>
                        <Para>
                            {ctx.chapter5kannada.Content.Para67}
                        </Para> 



                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Submissions