import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import Table12kan from '../../../Tables/Chapter4kan/Table12'
import CustomTable from "../../../../CustomTable/CustomTable";

const Compliance = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/quality/impact" forward="/quality/observation" />


                        <Title>
                            {ctx.chapterFour.Content.para117}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para118}
                        </Para>
                        <Para>
                            {ctx.chapterFour.Content.para119}
                        </Para>
                        <CustomTable title={"Table 4.18: Compliance to Accounting Standards."}
                            columns={ctx.tables4.Table18}
                            data={ctx.tables4.Table18} />

                    


                </div>
                </div >
                : <div>
    <Navbar />
    <FaSpinner icon="spinner" className="spinner" />
</div>)
            : (ctx.chapter4kannada
    ? <div >
        <Navbar />
        <div className="contentwrapper" id="home">
            <FloatingActionButtons back="/quality/impact" forward="/quality/observation" />


            <Title>
                {ctx.chapter4kannada.Content.para110}
            </Title>
            {["para111","para112"].map((item, ind) =>
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

export default Compliance