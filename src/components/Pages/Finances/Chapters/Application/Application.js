import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../../Context/MyProvider'
import Para from '../../../../Para/Para'
import Title from "./../../../../Title/Title"
import Subtitle from "./../../../../Subtitle/Subtitle"
import Navbar from "./../../../../Navbar/Navbar"
import { FaSpinner } from 'react-icons/fa'
import FloatingActionButtons from "./../../../../FloatingActionButtons/FloatButton"
import './../../Finances.css'
import Table13 from '../../../Tables/Chapter2/Table13'
import Table14 from '../../../Tables/Chapter2/Table14'
import Table15 from '../../../Tables/Chapter2/Table15'
import Table16 from '../../../Tables/Chapter2/Table16'
import Table17 from '../../../Tables/Chapter2/Table17'
import Table18 from '../../../Tables/Chapter2/Table18'
import Table19 from '../../../Tables/Chapter2/Table19'
import Table20 from '../../../Tables/Chapter2/Table20'
import Table21 from '../../../Tables/Chapter2/Table21'
import Table22 from '../../../Tables/Chapter2/Table22'
import Table23 from '../../../Tables/Chapter2/Table23'
import Table24 from '../../../Tables/Chapter2/Table24'
import Table24b from '../../../Tables/Chapter2/Table24b'
import Table25 from '../../../Tables/Chapter2/Table25'
import Table26 from '../../../Tables/Chapter2/Table26'
import Table27 from '../../../Tables/Chapter2/Table27'
import {
    Chart10, Chart11, Chart12,
    Chart2 as Chrt2, Chart3 as Chrt3, Chart4 as Chrt4, Chart7, Chart8, Chart9
} from '../../../Charts/Chap2Charts'

import ImageComponent from 'material-ui-image'
import { getFirebase } from '../../../../../firebase/firebase'


const Application = () => {

    const ctx = useContext(MyContext)
    const [url, setURL] = useState("");

    getFirebase()
        .storage()
        .ref('/pdfs/2542text.png')
        .getDownloadURL()
        .then((url) => {
            setURL(url);
        });


    return (
        ctx.langPref
            ? (ctx.chapterTwo
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapterTwo.Profile.Para67}</Title>
                        {["Para68", "Para69"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para70"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para71"]}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table13 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para72}
                        </Para>
                        <Chart7 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para73}
                        </Para>
                        <Chart8 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para74"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para75"]}
                        </Subtitle>
                        {["Para76", "Para77", "Para78"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table14 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts of respective years
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para79}
                        </Para>
                        <Chart9 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para80"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para81}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para82}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table15 />
                        <h4 className='footnote'>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para84}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para85}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table16 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                *Includes object heads Consolidated Salary, pay of officers, pay of staff, Interim Relief, Dearness Allowance, Other allowances, medical allowance and reimbursement of medical expenses
                            </i>
                        </h4>
                        {["Para86"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para87}
                        </Subtitle>
                        {["Para88", "Para89"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table17 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                #includes interest on off-budget borrowings.
                                <br />
                                @excludes subsidies in the form of financial assistance
                                <br></br>
                                *includes non-salary component of PRIs and other expenditure related to PRIs and ULBs
                                <br></br>
                            </i>
                        </h4>
                        <Chart10 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para90"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para91}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para92}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Profile.Para93}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para94}
                        </Subtitle>
                        {["Para95", "Para96", "Para97", "Para98"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        {["Para99", "Para100"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo.Profile[item]}
                                </li>
                            </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Profile.Para101.substring(0, 56)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Profile.Para101.substring(56, 63)}
                                    <span className="tooltiptext">
                                        Refers to the contribution the employee had to make from the date of his entry into service to the date of implementation of the scheme.
                                    </span>
                                    <sup>14</sup>
                                </span>

                                {ctx.chapterTwo.Profile.Para101.substring(63,)}
                            </li>
                        </Para>
                        {["Para102"].map((item, ind) =>
                            <Para key={ind / 10}>
                                <li>
                                    {ctx.chapterTwo.Profile[item]}
                                </li>
                            </Para>)}
                        {["Para103", "Para104"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para105}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para106}
                        </Para>
                        <Para>
                            {ctx.chapterTwo.Profile.Para107}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para108}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para109}
                        </Para>

                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table18 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para110}
                        </Para>
                        <Chart11 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para111"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Para>
                            <li>
                                {ctx.chapterTwo.Profile.Para112.substring(0, 69)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Profile.Para112.substring(69, 77)}
                                    <span className="tooltiptext">
                                        Explicit subsidy is that which provides for expenditure in the form of a subsidy or interest subvention for certain schemes of the Government. It was stressed that the challenge lies in
                                        ensuring that these subsidies do not become a permanent source of additional support and thereby deter these sectors from undertaking reforms.
                                    </span>
                                    <sup>15</sup>
                                </span>

                                {ctx.chapterTwo.Profile.Para112.substring(77,)}
                            </li>
                        </Para>
                        {["Para113", "Para114"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para115}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile.Para116}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table19 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>

                        {["Para117", "Para118", "Para119"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table20 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para120"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Profile.Para121}
                        </Subtitle>
                        {["Para122", "Para123", "Para124"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Chart12 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Para>
                            {ctx.chapterTwo.Profile.Para125}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table21 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para126", "Para127", "Para128", "Para129"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <div style={{
                            backgroundColor: "#ac8",
                            fontSize: "18px",
                            padding: "5px 5px 5px 20px",
                            borderRadius: "5px"
                        }}>
                            <p>
                                {ctx.chapterTwo.Profile["Para130"]}
                            </p>
                        </div>
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para131"]}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Profile["Para132"]}
                        </Para>
                        <Subtitle>
                            {ctx.chapterTwo.Profile["Para133"]}
                        </Subtitle>
                        <Para>
                            <li>
                                {ctx.chapterTwo.Profile.Para134.substring(0, 69)}

                                <span className="tooltip">
                                    {ctx.chapterTwo.Profile.Para134.substring(69, 71)}
                                    <span className="tooltiptext">
                                        Includes investment of ₹68 crore in 16 non-working Government Companies.
                                    </span>
                                    <sup>16</sup>
                                </span>
                                {ctx.chapterTwo.Profile.Para134.substring(71, 533)}
                                <span className='tooltip'>
                                    {ctx.chapterTwo.Profile.Para134.substring(533,)}
                                    <span className='tooltiptext'>
                                        Irrigation (₹37,071.31 crore), Power (₹11,879.68 crore), Infrastructure (₹8,839.21 crore), Finance (₹3,640.60 crore), Transport (₹1,583.71 crore), Housing (₹1,450.97 crore), Industries (₹908.09 crore) and Other sectors (₹2,883.11 crore).
                                    </span>
                                    <sup>17</sup>
                                </span>
                            </li>
                        </Para>
                        {["Para135", "Para136", "Para137",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table22 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        {["Para138", "Para139", "Para140", "Para141"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Table23 />

                        {["Para142", "Para143", "Para144", "Para145", "Para146", "Para147", "Para148"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table24 />

                        {["Para149", "Para150", "Para151", "Para152", "Para153", "Para154", "Para155", "Para156", "Para157"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Profile[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.first.para1h1}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.first.para1}
                        </Para>
                        <ImageComponent src={url} alt="table2543" aspectRatio={1 / 0.25} />
                        {["para2", "para3"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.first[item]}
                            </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table24b />
                        <Para>
                            {ctx.chapterTwo.first.para4}
                        </Para>
                        {["para5", "para6", "para7", "para8", "para9", "para10",
                            "para11", "para12", "para13", "para14", "para15", "para16",
                            "para17", "para18", "para19", "para20", "para21", "para22",
                            "para23", "para24", "para25", "para26", "para27", "para28",
                            "para29", "para30", "para31", "para32", "para33"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapterTwo.first[item]}
                                </Para>)}
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table25 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table26 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                            </i>
                        </h4>
                        <Subtitle>
                            {ctx.chapterTwo.Second.para1h1}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second.para1}
                        </Para>
                        {["para2", "para3", "para4", "para5"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapterTwo.Second.para6}
                        </Subtitle>
                        <Para>
                            {ctx.chapterTwo.Second.para7}
                        </Para>
                        <h3 className='headnote'>
                            ₹ In crore
                        </h3>
                        <Table27 />
                        <h4>
                            <i>
                                Source: Finance Accounts
                                <br></br>
                                AE: Aggregate Expenditure, CE: Capital Expenditure, DE: Development Expenditure (includes total expenditure under social and economic sectors)
                            </i>
                        </h4>
                        {["para8", "para9", "para10", "para11", "para12", "para13"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapterTwo.Second[item]}
                            </Para>)}

                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (ctx.chapter2kannada
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/finances/resources" forward="/finances/publicaccount" />
                        <Title>{ctx.chapter2kannada.Content.para72}</Title>
                        {["para73"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Subtitle>
                            {ctx.chapter2kannada.Content["para74"]}
                        </Subtitle>
                        {["para75", "para76"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table13 />
                        <Para>
                            {ctx.chapter2kannada.Content.para77}
                        </Para>
                        <Chart7 />
                        <Para>
                            {ctx.chapter2kannada.Content.para78}
                        </Para>
                        <Chart8 />
                        {["para79", "para80", "para81", "para82", "para83"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table14 />
                        <Para>
                            {ctx.chapter2kannada.Content.para84}
                        </Para>
                        <Chart9 />
                        {["para85", "para86", "para87",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table15 />
                        {["para88", "para89", "para90",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table16 />

                        {["para91", "para92", "para93", "para94"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table17 />
                        <Chart10 />
                        {["para95", "para96", "para97", "para98", "para99", "para100",
                            "para101", "para102", "para103", "para104", "para105", "para106",
                            "para107", "para108", "para109", "para110", "para111", "para112", "para113", "para114"].map((item, ind) =>
                                <Para key={ind / 10}>
                                    {ctx.chapter2kannada.Content[item]}
                                </Para>)}
                        <Table18 />
                        <Para>
                            {ctx.chapter2kannada.Content.para115}
                        </Para>
                        <Chart11 />
                        {["para116", "para117", "para118", "para119", "para120", "para121"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table19 />

                        {["para122", "para123", "para124"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table20 />
                        {["para125", "para126", "para127", "para128", "para129"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Chart12 />
                        <Para>
                            {ctx.chapter2kannada.Content.para130}
                        </Para>
                        <Table21 />
                        {["para131", "para132", "para133", "para134", "para135", "para136", "para137", "para138", "para139", "para140", "para141", "para142",].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table22 />
                        {["para143", "para144", "para145", "para146"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table23 />
                        {["para147", "para148", "para149", "para150", "para151", "para152", "para153"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para154", "para155", "para156", "para157", "para158", "para159", "para160", "para161", "para162"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table24 />

                        <Para>
                            {ctx.chapter2kannada.Content.para163}
                        </Para>
                        {["para164", "para165"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table24b />
                        {["para166", "para167", "para168", "para169", "para170", "para171", "para172", "para173", "para174", "para175", "para176", "para177", "para178", "para179", , "para180", "", "para181", "para182", "para183", "para184", "para185", "para186", "para187", "para188", "para189", "para190", "para191", "para192", "para193", "para194"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table25 />
                        <Table26 />

                        <Para>
                            {ctx.chapter2kannada.Content.para195}
                        </Para>
                        {["para196", "para197", "para198", "para199", "para200", "para201"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        <Table27 />

                        {["para202", "para203", "para204", "para205", "para206", "para207"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}
                        {["para208", "para209", "para210", "para211", "para212", "para213"].map((item, ind) =>
                            <Para key={ind / 10}>
                                {ctx.chapter2kannada.Content[item]}
                            </Para>)}


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Application