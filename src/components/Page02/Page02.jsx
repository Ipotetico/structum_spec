import React from 'react'
import '../Page01/Page01.scss'

const Page02 = ({setPage}) => {
  return (
<>
<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/str_02.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Kloppenburg M, Kroon FPB, Blanco FJ et al.: 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis 2019; 78: 16-24 2. Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350 3. Charakterystyka produktu leczniczego Structum 01.2022</p>
</div>

    <img onClick={()=>setPage(3)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />


    <div className="page__container">
    </div>

    <div className="central__container page02">
<h1>
Structum<sup>® </sup>  
 <span>
- spełnia europejskie 
standardy leczenia ChZS <br />
małych i dużych stawów. <sup>(1,2,3)</sup> </span>
</h1>
    </div>

    
</>
  )
}

export default Page02