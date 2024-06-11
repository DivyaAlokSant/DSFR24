import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import Subtitle from "../../../../Subtitle/Subtitle";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table8kan from '../../../Tables/Chapter4kan/Table8'
import Table9kan from "../../../Tables/Chapter4kan/Table9";
import CustomTable from "../../../../CustomTable/CustomTable";
import ImageComponent from 'material-ui-image'
import c41 from '../../../../../Images/c41.png'

const Delay = () => {

    const ctx = useContext(MyContext)

    return (
        
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/fund-transfer" forward="/quality/contingent-bill" />


                        <Title>
                            {ctx.chapterFour.Content.para19}
                        </Title>

                        <Subtitle>
                            {ctx.chapterFour.Content.para20}
                        </Subtitle>


                        {["para21", "para22"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                            <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.4: Age wise pendency of Utilisation Certificates "}
                            columns={ctx.tables4.Table4}
                            data={ctx.tables4.Table4} />

                        <Para>                            
                            {ctx.chapterFour.Content.para23}  
                        </Para>    
                        <Para>                            
                            {ctx.chapterFour.Content.para24}  
                        </Para> 

                        <ImageComponent src={c41} alt="chart2.14" aspectRatio={1 / 0.4} />
                       

                        {["para25", "para26", "para27"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterFour.Content[item]}
                            </Para>)}

                      


                      


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter4kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/fund-transfer" forward="/quality/contingent-bill" />

                        <Title>{ctx.chapter4kannada.Content.para19}</Title>
                        <Subtitle>
                           {ctx.chapter4kannada.Content.para2}
                        </Subtitle>
                        {["para20","para21"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        {["para22","para23"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                        {["para24","para25","para26"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter4kannada.Content[item]}
                            </Para>)}
                       
                      
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Delay