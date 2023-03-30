import React from 'react'
import '../Page01/Page01.scss'

const Page15 = ({setPage}) => {

  return (
<>

    <img onClick={()=> setPage(16)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<img onClick={()=>setPage(1)} src={process.env.PUBLIC_URL + `/images/cofnij.svg`}alt="" className="cofnij" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Romanowski W. Jak skutecznie leczyć w chorobie zwyrodnieniowej stawów.  Można leczyć bezpieczniej, zapewniając lepsza jakość życia chorych, Puls Medycyny  2. Romanowski W. Jak skutecznie leczyć w chorobie  zwyrodnieniowej stawów.  Od ciągłości przyjmowania leków zależy efektywność terapii. Puls Medycyny.  </p>
</div>
    <div className="page__container">
<h1>Jak długo powinna trwać terapia<span> <br /> siarczanem chondroityny?</span>   </h1>
    </div>



    <div className="central__container page06">
    
     {/* ########### */}


     <div  className="button page05">
      <h1>NLPZ:<span> stosowanie 
przez </span> <br /> krótki czas, maksymalnie <br /> w 7-dniowych seriach.<span> Przeciwwskazania <br /> 
do stosowania oraz ryzyko działań niepożądanych.<sup>(1,2)</sup></span></h1>
      <div className="podtytul">krótkoterminowo</div>
     </div>

          {/* ########### */}

     <div  className="button page05">
       <h1>
SYSADOA: <span>stosowanie</span> <br /> w sposób ciągły, czasem <br /> do kilkunastu miesięcy. <span>Działanie pojawia się <br /> po około 3-6 tygodniach <br /> od rozpoczęcia terapii.<sup>(1,2)</sup> </span>
      </h1>
      <div className="podtytul">długoterminowo</div>
     </div>


    </div>

    
</>
  )
}

export default Page15