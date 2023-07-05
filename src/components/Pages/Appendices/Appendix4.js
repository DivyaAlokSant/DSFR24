import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import { getFirebase } from "../../../firebase/firebase";
import Tabled1 from '../Tables/Chapter1/Tabled1'
import Tabled1k from "../Tables/Chapter1/Tabled1k"
import Tabled2 from '../Tables/Chapter1/Tabled2'
import Tabled2k from '../Tables/Chapter1/Tabled2k'
import Tabled3 from '../Tables/Chapter1/Tabled3'
import Tabled3k from '../Tables/Chapter1/Tabled3k'
import Tabled4 from '../Tables/Chapter1/Tabled4'
import Tabled4k from '../Tables/Chapter1/Tabled4k'
import Tabled5 from '../Tables/Chapter1/Tabled5'
import Tabled5k from '../Tables/Chapter1/Tabled5k'
import Tabled6 from '../Tables/Chapter1/Tabled6';
import Tabled6k from '../Tables/Chapter1/Tabled6k';


const Appendix4 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-3" forward="/appendices/appendix-5" />
                    <h3 className='headnote'>
                        ₹ in crore
                    </h3>
                    <Tabled1 />
                    <h4> Source: Office of the AG(A&E)</h4>
                    <h3 className='headnote'>
                    (Amount in ₹)
                                        </h3>
                    <Tabled2 />
                    <h4> Source: Office of the AG(A&E)/DDR Ledger</h4>

                                        <Tabled3 />
                    <h4>  Source:  Office of the Pr. AG (Audit-I) & AG (Audit-II)</h4>


                    <h3 className='headnote'>
                                            ₹ in crore
                                        </h3>
                    <Tabled4 />
                    <h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>


                    <h3 className='headnote'>
                                            ₹ in crore
                                        </h3>
                    <Tabled5 />
                    <h4>   Source:  Office of the Pr.AG(Audit-I)</h4>

                    <h3 className='headnote'>
                                        (₹ in Lakh)
                                        </h3>
                    <Tabled6 /> 
                    <h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>


   
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
                    <h4>Source: Office of the Pr. AG (Audit-I) &  AG (Audit-II)</h4>


                    <h3 className='headnote'>
                                            ₹ in crore
                                        </h3>
                    <Tabled5 />
                    <h4>   Source:  Office of the Pr.AG(Audit-I)</h4>

                    <h3 className='headnote'>
                                        (₹ in Lakh)
                                        </h3>
                    <Tabled6 /> 
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
