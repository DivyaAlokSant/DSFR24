import React, { useContext } from "react"
import Navbar from "../../../../Navbar/Navbar"
import './../../Quality.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from '../../../../../Context/MyProvider';
import Para from "../../../../Para/Para"
import Title from "../../../../Title/Title";
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import CustomTable from "../../../../CustomTable/CustomTable";

const ImpactMajor = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterFour
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/quality/cash" forward="/quality/compliance" />
                         
                        <Title>
                        {ctx.chapterFour.Content.para115}
                        </Title>
                        <Para>
                            {ctx.chapterFour.Content.para116}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>

                        <CustomTable title={"Table 4.17: Impact of certain major transactions during 2022-23"}
                            columns={ctx.tables4.Table17}
                            data={ctx.tables4.Table17} />
                        <h3 className='footnote'>
                        Source: Notes to Accounts 2022-23 and Post audit analysis<br></br>
                        </h3>

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
                    <FloatingActionButtons back="/quality/cash" forward="/quality/compliance" />
                  
                    
                    <Title>
                    {ctx.chapter4kannada.Content.para108}
                    </Title>
                    {["para109"].map((item, ind) =>
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

export default ImpactMajor