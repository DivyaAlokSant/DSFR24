import React, { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/Navbar"
import './Appendix.css'
import { FaSpinner } from "react-icons/fa"
import { MyContext } from './../../../Context/MyProvider';
import FloatingActionButtons from "../../FloatingActionButtons/FloatButton"
import CustomTable from "../../CustomTable/CustomTable";
import Tablec1 from '../Tables/Chapter1/Tablec1'
import Tablec1k from '../Tables/Chapter1/Tablec1k'
import Tablec2 from '../Tables/Chapter1/Tablec2'
import Tablec2k from '../Tables/Chapter1/Tablec2k'
import Tablec3 from '../Tables/Chapter1/Tablec3'
import Tablec3k from '../Tables/Chapter1/Tablec3k'
import Tablec4 from '../Tables/Chapter1/Tablec4'
import Tablec4k from '../Tables/Chapter1/Tablec4k'
import Tablec5 from '../Tables/Chapter1/Tablec5'
import Tablec5k from '../Tables/Chapter1/Tablec5k'
import Tablec6 from '../Tables/Chapter1/Tablec6'
import Tablec6k from '../Tables/Chapter1/Tablec6k'
import Tablec6a from '../Tables/Chapter1/Tablec6a'
import Tablec6b from '../Tables/Chapter1/Tablec6b'
import Tablec6c from '../Tables/Chapter1/Tablec6c'
import Tablec7 from '../Tables/Chapter1/Tablec7'
import Tablec7k from '../Tables/Chapter1/Tablec7k'
import Tablec8 from '../Tables/Chapter1/Tablec8'
import Tablec8k from '../Tables/Chapter1/Tablec8k'
import Tablec9 from '../Tables/Chapter1/Tablec9'
import Tablec9k from '../Tables/Chapter1/Tablec9k'
import Tablec10 from '../Tables/Chapter1/Tablec10'
import Tablec10k from '../Tables/Chapter1/Tablec10k'
import Tablec11 from '../Tables/Chapter1/Tablec11'
import Tablec11k from '../Tables/Chapter1/Tablec11k'
import Tablec12 from '../Tables/Chapter1/Tablec12'
import Tablec12k from '../Tables/Chapter1/Tablec12k'
import Tablec13 from '../Tables/Chapter1/Tablec13'
import Tablec13k from '../Tables/Chapter1/Tablec13k'
import Tablec14 from '../Tables/Chapter1/Tablec14'
import Tablec14k from '../Tables/Chapter1/Tablec14k'
import Tablec15 from '../Tables/Chapter1/Tablec15'
import Tablec15k from '../Tables/Chapter1/Tablec15k'
import Tablec16 from '../Tables/Chapter1/Tablec16'
import Tablec16k from '../Tables/Chapter1/Tablec16k'
import Tablec17 from '../Tables/Chapter1/Tablec17'
import Tablec17k from '../Tables/Chapter1/Tablec17k'

const Appendix3 = () => {

    const ctx = useContext(MyContext)

    return (
        ctx.langPref
            ? (true
                ? <div >
                    <Navbar />
                    <div className="contentwrapper" id="home">
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                        (₹ in crore)
                       </h3>
                        {/* <Tablec1 /> */}
                        <CustomTable title={"Appendix 3.1 Category wise/department wise budget allocation/expenditure for Child Budget for the year 2022-23"}
                            columns={ctx.appendix3.Table1}
                            data={ctx.appendix3.Table1}
                            indexToIncreaseWidth={1}
                            widthSize={'350px'} />
                        <h4> Source: Child Budget</h4>
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec2 />
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec3 />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>


                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec4 />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>


                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec5 />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec6 />

                        <Tablec6a />
                        <Tablec6b />
                        <Tablec6c />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>



                        <Tablec7 />
                        <h4> Source: Office of the AG (A&E)</h4>     


                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec8 /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>          
                        
                        
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec9 /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>  
                        

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec10 /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>  
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec11 /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  <br></br>
                        (+) : Refers to amount surrendered greater than Savings.</h4>
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec12 /> 
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ  <br></br>
                        </h4>  

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec13 /> 
                        <h4> Source: Office of  the AG (A&E) <br></br>
                        </h4> 
                        
                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec14 /> 
                        <h4>  ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec15 /> 
                        <h4> Source: Office of  the AG (A&E) <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec16 /> 
                        <h4> Source:  Grant Register <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ in crore)
                                            </h3>
                        <Tablec17 /> 
                        <h4> Source:  Grant Register <br></br>
                        </h4> 
   
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
                        <FloatingActionButtons back="/appendices/appendix-2" forward="/appendices/appendix-4" />
                        <h3 className='headnote'>
                        (₹ಕೋಟಿಗಳಲ್ಲಿ)
                       </h3>
                        <Tablec1k />
                        <h4> Source: Child Budget</h4>
                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec2k />
                        <h4> ಆಕರ : ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು</h4>
                        <h3 className='headnote'>
                        (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec3k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ</h4>


                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec4k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>


                        <h3 className='headnote'>
                            (₹ ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec5k />
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec6k />

                        
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ </h4>



                        <Tablec7k />
                        <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರ ಕಛೇರಿ (ಲೆ ಮತ್ತು ಹ)</h4>     


                        <h3 className='headnote'>
                        (₹ಕೋಟಿಗಳಲ್ಲಿ)
                        </h3>
                        <Tablec8k /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>          
                        
                        
                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec9k /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>  
                        

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec10k /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು </h4>  
                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec11k /> 
                        <h4> ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  </h4>
                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec12k/> 
                        <h4> ಆಕರ : ಅನುದಾನ ವಹಿ  <br></br>
                        </h4>  

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec13k /> 
                        <h4> Source: Office of  the AG (A&E) <br></br>
                        </h4> 
                        
                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec14k /> 
                        <h4>  ಆಕರ: ಧನವಿನಿಯೋಗ ಲೆಕ್ಕಗಳು  <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec15k /> 
                        <h4> ಆಕರ: ಮಹಾಲೇಖಾಪಾಲರ (ಲೆ ಮತ್ತು ಹ) ಕಛೇರಿ <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec16k /> 
                        <h4> Source:  Grant Register <br></br>
                        </h4> 

                        <h3 className='headnote'>
                                                (₹ಕೋಟಿಗಳಲ್ಲಿ)
                                            </h3>
                        <Tablec17k /> 
                        <h4> Source:  Grant Register <br></br>
                        </h4>
                    </div>
                </div>
                : <div>
                    <Navbar />
                    <FaSpinner icon="spinner" className="spinner" />
                </div>)
    )
}

export default Appendix3
