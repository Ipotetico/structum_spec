import React from 'react'
import '../Page01/Page01.scss'

const Page11 = ({setPage}) => {

  return (
<>

    <img onClick={()=>setPage(12)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

                    <img onClick={()=>setPage(1)} src={process.env.PUBLIC_URL + `/images/cofnij.svg`}alt="" className="cofnij" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350  </p>
</div>
    <div className="page__container">
<h1>Wytyczne europejskich towarzystw<span> naukowych 
dotyczące leczenia ChZS. </span>  </h1>
    </div>



    <div className="central__container page05">

<h1> Niefarmakologiczne i farmakologiczne metody leczenia: <br /><br />
wytyczne ESCEO dotyczące leczenia ChZ stawu  <br />
kolanowego zalecają stosowanie <span>siarczanu chondroityny <br /> lub siarczanu glukozaminy </span> z zastrzeżeniem:</h1>
    
     {/* ########### */}

     <div className="three__buttons">

     <div  className="button page05">
        <img src={process.env.PUBLIC_URL + `/images/zolta_strzala.svg`} alt="" />
      <h1>nie powinny być <span> podawane </span> <br /> razem</h1>
     </div>

          {/* ########### */}

     <div  className="button page05">
               <img src={process.env.PUBLIC_URL + `/images/zolta_strzala.svg`} alt="" />
       <h1>
nie <span>mogą być</span> suplementami <br /> diety
      </h1>
     </div>

          {/* ########### */}

     <div  className="button page05">
               <img src={process.env.PUBLIC_URL + `/images/zolta_strzala.svg`} alt="" />
        <h1>NLPZ miejscowo <span> w  kolejnym <br />
etapie doustnie</span>
      </h1>
     </div>


     </div>


    </div>

    
</>
  )
}

export default Page11