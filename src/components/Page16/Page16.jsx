import React from 'react'
import '../Page01/Page01.scss'

const Page16 = ({setPage}) => {

  return (
<>

    <img onClick={()=> setPage(17)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Woroń J., Racjonalne stosowanie niesteroidowych leków przeciwzapalnych w terapii bólu, Medycyna Praktyczna  2. Szymański M., Korzeniowska K., Jabłecka A. Nerkowe działania niepożądane związane ze stosowaniem NLPZ Renal adverse effects associated with NSAID therapy, Akadeia Medycyny Geriatria 2014; 8: 1-9 </p>
</div>
    <div className="page__container">
<h1><span>Doustne leki z grupy </span> <br /> NLPZ a działania niepożądane.<sup>(1,2)</sup></h1>
    </div>



    <div className="central__container page16">

        <h1 className='title'>UKŁAD <br /> KRĄŻENIA</h1>
<img src={process.env.PUBLIC_URL + `/images/serce.png`} alt="" />
     <h1 className='copy'> <span>Zwiększenie ryzyka sercowo-naczyniowego <br /> </span>  oraz <span>  powikłań 
zatorowo-zakrzepowych,</span> <br /> hamowanie aktywacji płytek krwi.<sup>(1)</sup></h1>


        <h1 className='title'>UKŁAD <br /> POKARMOWY </h1>
<img src={process.env.PUBLIC_URL + `/images/zolad.png`} alt="" />
     <h1 className='copy'> <span>Nadżerki przełyku, owrzodzenia </span>  żołądka <br /> oraz dwunastnicy, <span>  krwawienie</span> z górnego <br /> odcinka przewodu 
pokarmowego.<sup>(1)</sup></h1>


        <h1 className='title'>UKŁAD <br /> MOCZOWY </h1>
<img src={process.env.PUBLIC_URL + `/images/nery.png`} alt="" />
     <h1 className='copy'> <span>Zaburzenia równowagi 
sodowo-potasowej, </span> <br />  zwiększona retencja jonów sodu.<sup>(2)</sup></h1>

</div>
</>
  )
}

export default Page16