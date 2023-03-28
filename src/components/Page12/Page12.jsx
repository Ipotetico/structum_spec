import React from 'react'
import '../Page01/Page01.scss'

const Page12 = ({setPage}) => {

  return (
<>

      <img onClick={()=>setPage(13)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1.. Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350 2. Kloppenburg M, Kroon FPB, Blanco FJ et al.: 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis 2019; 78: 16-24 * Europejskie Towarzystwo  Klinicznych i Ekonomicznych Aspektów Osteoporozy,  Chzs i Chorób Mięśniowo-Szkieletowych </p>
</div>
    <div className="page__container">
<h1>Spełnia europejskie standardy<span>  leczenia ChZS <br /> małych i dużych stawów.<sup>(1,2)</sup> </span> </h1>
    </div>



    <div className="central__container page06">
    
<div className="container">
    <img src={process.env.PUBLIC_URL + `/images/kosciotrupy.png`} alt="" />
</div>

<div className="container page12">
    <h1>
   <span style={{color:'white', fontWeight:800, fontSize:'3vw'}}> ESCEO*:</span> 
</h1>
<h1>
Brak rekomendacji dla <br />
połączenia <span style={{color:'white'}}> siarczanu <br />
chondroityny z glukozaminą.<sup>(1)</sup></span>
</h1>
<br />
<h1>
Brak dowodów na skuteczność <br /> połączenia <span style={{color:'white'}}>siarczanu <br />
chondroityny z glukozaminą <br /> w leczeniu ChZS. <sup>(1)</sup></span> 
</h1>
<br />
<h1>
<span style={{color:'white'}}>Połączenie</span> siarczanu chondroityny<span style={{color:'white'}}> <br /> z glukozaminą</span> redukuje jej biodostępność o 50-75%.<sup>(1)</sup> 
</h1>
</div>
</div>
</>
  )
}

export default Page12