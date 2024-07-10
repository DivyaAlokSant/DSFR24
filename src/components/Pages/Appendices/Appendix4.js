import React, { useContext } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import Tabled1k from "../Tables/Chapter1/Tabled1k"
import Tabled2k from '../Tables/Chapter1/Tabled2k'
import Tabled3k from '../Tables/Chapter1/Tabled3k'
import Tabled4k from '../Tables/Chapter1/Tabled4k'
import Tabled5k from '../Tables/Chapter1/Tabled5k'
import Tabled6k from '../Tables/Chapter1/Tabled6k';
import CustomTable from "../../CustomTable/CustomTable";


const Appendix4 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                    <FloatingActionButtons back="/appendices/appendix-3" forward="/appendices/appendix-5" />
                    <CustomTable    title={"Appendix 4.1-Funds transferred directly to State Implementing Agencies(Reference: Paragraph 4.4; Page120)"}
                        columns={ctx.appendix4.Table1}
                        data={ctx.appendix4.Table1} />
                           <h4><i>
                           Source: PFMS Website</i>


          </h4>
          <h3 className='headnote'>
            ₹ In crore
          </h3>


            <CustomTable    title={"Appendix 4.2-Major Head and Department-wise details of outstanding UCs separately for each year( Reference:Paragraph 4.5; Page121)"}
                columns={ctx.appendix4.Table2}
                        data={ctx.appendix4.Table2} />
         <h4>
        Source: Office of the AG(A&E)
          </h4>
          <h3 className='headnote'>
          Amount in ₹
          </h3> 

 <CustomTable    title={"Appendix 4.3-Balances remaining under in-operative PD accounts(Reference:Paragraph 4.7.3 1(b);Page 124)"}
                        columns={ctx.appendix4.Table3}
                        data={ctx.appendix4.Table3} />
        <h4>
        Source: Office of the AG(A&E)/DDR Ledger
          </h4>

                    <h3 className='headnote'>
                    Amount in ₹                   
                    </h3>

    <CustomTable    title={"Appendix 4.3(A)-Balances reamaining underin-operative PD accounts for more than five years (Reference:Paragraph 4.7.3 1(b);Page 124)"}
                        columns={ctx.appendix4.Table3a}
                        data={ctx.appendix4.Table3a} />
                          <h4>
                          Source: Office of the AG(A&E)/DDR Ledger
          </h4>
       

                    <h3 className='headnote'>
                    Amount in ₹                            
                    </h3>
     <CustomTable    title={"Appendix 4.4-PD accounts with Debit/Negative balance(Reference:Paragraph 4.7.3 1(c);Page 125)"}
                        columns={ctx.appendix4.Table4}
                        data={ctx.appendix4.Table4} />
          <h4><i>
                          Source: Office of the AG(A&E)</i>
          </h4>

                    <h3 className='headnote'>
                    Amount in ₹                    
                    </h3>
    <CustomTable    title={"Appendix 4.5-Details of diversion of funds from unspent balances in PD accounts(Reference:Paragraph 4.7.4 (b);Page 127)"}
                        columns={ctx.appendix4.Table5}
                        data={ctx.appendix4.Table5} />
                         <h4><i>
                          Source:Departmental Records</i>
          </h4>
       

                    <h3 className='headnote'>
                    Amount in ₹                   
                    </h3>
    <CustomTable    title={"Appendix 4.6-Substantial Expenditure(20 per cent and above of total expenditure under Major Head) booked under Minor head 800-other expenditure(Reference:Paragraph 4.8 (b);Page 128)"}
                        columns={ctx.appendix4.Table6}
                        data={ctx.appendix4.Table6} />
       
       <h4><i>
                          Source:Departmental Records</i>
          </h4>
                    <h3 className='headnote'>
                                          
                    </h3>
  <CustomTable    title={"Appendix 4.7-Status of submission of accounts of Autonomous Bodies and Placement of Audit Reports before the State Legislature(Reference:Paragraph 4.14;Page 134)"}
                        columns={ctx.appendix4.Table7}
                        data={ctx.appendix4.Table7} />
       
       <h4>
        Source: Office of the Pr.AG(Audit-I)& Pr.AG(Audit-II)
          </h4>
                    <h3 className='headnote'>
                                          
                    </h3>
    <CustomTable    title={"Appendix 4.8-Position of arrears in finalization of proforma accounts by the departmentally managed Commerical and Quasi-Commerical Undertakings(Reference:Paragraph 4.15;Page 134)"}
                        columns={ctx.appendix4.Table8}
                        data={ctx.appendix4.Table8} />
       
       <h4>
        Source: Office of the Pr.AG(Audit-I)& Pr.AG(Audit-II)
          </h4>
                    <h3 className='headnote'>
                                          
                    </h3>
  
                    <CustomTable    title={"Appendix 4.9-Non-receipt of information pertaining to institutions substantially financed by the Government(Reference:Paragraph 4.16;Page 135)"}
                        columns={ctx.appendix4.Table9}
                        data={ctx.appendix4.Table9} />
       
       <h4>
        Source: Office of the Pr.AG(Audit-I) & Pr. AG (Audit-II)
                 </h4>
                    <h3 className='headnote'>
                     ₹ in lakh                 
                    </h3>
<CustomTable    title={"Appendix 4.10-Department-wise/duration-wise breakup of the cases of theft and miss-appropriation(Reference:Paragraph 4.18;Page 135)"}
                        columns={ctx.appendix4.Table10}
                        data={ctx.appendix4.Table10} />
       
       <h4>
        Source: Office of the Pr.AG(Audit-I) and Pr.AG(Audit II)
                 </h4>
                    <h3 className='headnote'>
                                          
                    </h3> 


           {/* <object
                            width="100%"
                            height="600"
                            data="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                            type="application/pdf">
                            <embed
                                src="https://firebasestorage.googleapis.com/v0/b/digital-sfr.appspot.com/o/pdfs%2FAppendix-3-to-upload.pdf?alt=media&token=c56217f2-9923-4456-a342-ab07e55f4007"
                                type="application/pdf" />
                        </object> */}
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
                        <FloatingActionButtons back="/appendices/appendix-3" forward="/appendices/appendix-5" />

                    <h3 className='headnote'>
                        ₹ ಕೋಟಿಗಳಲ್ಲಿ
                    </h3>
                    <Tabled1k />
                    <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಛೇರಿ</h4>
                    
                    <h3 className='headnote'>
                    (ಮೊತ್ತ ₹ಗಳಲ್ಲಿ)
                    </h3>
                    <Tabled2k />
                    <h4> ಆಕರ: ಡಿಡಿಆರ್‌ ಲೆಡ್ಜರ್ </h4>

                    <Tabled3k />
                    <h4>ಆಕರ: ಪ್ರಧಾನ ಮಹಾಲೇಖಾಪಾಲರ (ಲೆಕ್ಕ ಪರಿಶೋಧನೆ-I) ಮತ್ತು ಮಹಾಲೇಖಾಪಾಲರ (ಲೆಕ್ಕ ಪರಿಶೋಧನೆ-II) ಕಛೇರಿಗಳು</h4>


                    <h3 className='headnote'>
                            ₹ in crore
                    </h3>
                    <Tabled4k />
                    <h4>ಆಕರ: ಹಣಕಾಸು ಲೆಕ್ಕಗಳು</h4>


                    <h3 className='headnote'>
                                            ₹ in crore
                    </h3>
                    <Tabled5k />
                    <h4> ಆಕರ: ಪ್ರಧಾನ ಮಹಾಲೇಖಾಪಾಲರ (ಲೆಕ್ಕ ಪರಿಶೋಧನೆ-I) ಕಛೇರಿ</h4>

                    <h3 className='headnote'>
                                        (₹ in Lakh)
                                        </h3>
                    <Tabled6k /> 
                    <h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>






                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix4
