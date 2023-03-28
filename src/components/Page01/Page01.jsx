import React from 'react'
import './Page01.scss'

const Page01 = ({setPage}) => {
  return (
<>
<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes">1. Kloppenburg M, Kroon FPB, Blanco FJ et al.: 2018 update of the EULAR recommendations for the management of hand osteoarthritis. Ann Rheum Dis 2019; 78: 16-24 2. Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350 3. Charakterystyka produktu leczniczego Structum 01.2022</p>
</div>
    <div className="page__container">
<h1>Spełnia europejskie standardy <span> leczenia ChZS <br />
małych i dużych stawów. <sup>(1,2,3)</sup></span> </h1>
    </div>

    <div className="central__container">
    <h1>S</h1>
     <h1>e</h1>
     <h1>n</h1>
     <h1>S</h1>

     {/* ########### */}

     <div onClick={() => setPage(2)} className="button">
      <h1>
      <span>s</span>
      tructum<sup>&#174;</sup> <br /> na start
      </h1>
     </div>

          {/* ########### */}

     <div onClick={() => setPage(11)} className="button">
      <h1>
      <span>e</span>
     uropejskie wytyczne
      </h1>
     </div>

          {/* ########### */}

  <div onClick={() => setPage(15)} className="button">
      <h1>
      <span>n</span>
lpz <br /> A DZIAŁANIA 
NIEPOŻĄDANE
      </h1>
     </div>

          {/* ########### */}

  <div onClick={() => setPage(19)} className="button">
      <h1>
      <span>s</span>
      UPLEMENTY
      </h1>
     </div>

     {/* ########### */}

    <h1 style={{color:'white'}}>1</h1>
    <h1 style={{color:'white'}}>2</h1>
    <h1 style={{color:'white'}}>3</h1>
    <h1 style={{color:'white'}}>4</h1>


    </div>

    
</>
  )
}

export default Page01