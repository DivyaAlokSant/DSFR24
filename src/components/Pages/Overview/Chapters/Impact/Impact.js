import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "../../../../Title/Title"
import Navbar from "../../../../Navbar/Navbar"
import FloatingActionButtons from "../../../../FloatingActionButtons/FloatButton"
import './../../Overview.css'
import { FaSpinner } from 'react-icons/fa'
import Table7 from '../../../Tables/Chapter1/Table7'
import Table7kan from '../../../Tables/Chapter1kan/Table7'
import CustomTable from '../../../../CustomTable/CustomTable'
const Impact = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (ctx.chapterOne
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title id="anchor">
                            {ctx.chapterOne.Profile.Para66}
                        </Title>

                        {["Para67"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}
                         <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        {/* <Table7 /> */}
                        <CustomTable    title={"Table 1.8: Impact of certain major transactions during 2023-24"}
                        columns={ctx.tables1.Table7}
                        data={ctx.tables1.Table7} />
                        <h4 className='footnote'>
                            <i>
                            Source: Notes to Accounts 2023-24 and Post audit analysis
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterOne.Profile["Para68"]}
                        </Para>
                        {["Para69", "Para70", "Para71","Para72", "Para73"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    <li>
                                        {ctx.chapterOne.Profile[item]}
                                    </li>
                                </Para>
                            )}
                             {["Para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterOne.Profile[item]}
                            </Para>
                        )}

                   

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter1kannada
                ? <div>
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/overview/fisc-situation" forward="/finances" />
                        <Title id="anchor">
                            {ctx.chapter1kannada.Content.para72}
                        </Title>

                        
                        {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                       <h4 className='headnote'>
             
                       (` ಕೋಟಿಗಳಲ್ಲಿ)


                            </h4>

                  <CustomTable title={"ಕೋಷ್ಟಕ-1.೮: ೨೦೨೨-೨೩ರ ಅವಧಿಯಲ್ಲಿ ಕೆಲವು ಪ್ರಮುಖ ವಹಿವಾಟುಗಳ ಪರಿಣಾಮ"}


                  columns={ctx.tables1kan.Table8}
                  data={ctx.tables1kan.Table8} />
                  <h4 className='footnote'>
                   <i>
                ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು ಮತ್ತು ಮಧ್ಯಂತರ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆ 20೨1-2೫
                <br></br>
                </i>

                </h4>

                         {["para74","para75","para76","para77","para78","para79","para8"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter1kannada.Content[item]}
                            </Para>
                        )}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Impact
