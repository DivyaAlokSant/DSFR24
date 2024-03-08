import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Glossary.css'
import { FaAlignJustify, FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import CustomTable from "../../CustomTable/CustomTable";
import Title from "../../Title/Title";
import Subtitle from "../../Subtitle/Subtitle";


const Glossary = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-5" forward="/glossary/glossary" />

                        <Title>{ctx.glossary.para1}</Title>

                        <Subtitle>
                            {ctx.glossary.para2}
                        </Subtitle>



                        <CustomTable title={ctx.glossary.para2}
                            columns={ctx.glossary.Table1}
                            data={ctx.glossary.Table1}
                            indexToIncreaseWidth={0}
                            widthSize={'200px'} />

                        <CustomTable title={"Abbreviations"}
                            columns={ctx.glossary.Table2}
                            data={ctx.glossary.Table2}
                            indexToIncreaseWidth={0}
                            widthSize={'80px'} />


                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
            : (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/appendices/appendix-5" forward="/glossary/glossary" />
                        <h3 className='headnote'>
                            (Amount in ₹)
                        </h3>







                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Glossary
