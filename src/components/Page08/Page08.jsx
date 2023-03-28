import React, {useState} from 'react'
import '../Page01/Page01.scss'

const Page08 = ({setPage}) => {

    const [answer1, setAnswer1] = useState(false)
        const [answer2, setAnswer2] = useState(false)
            const [answer3, setAnswer3] = useState(false)

  return (
<>

        <img onClick={()=>setPage(9)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Bruyere O, Honvo G, Veronese N et al.: An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO). Seminars in Arthritis and Rheumatism 2019; 49: 337-350 2. Charakterystyka produktu leczniczego Structum 01.2022. 3. Honvo G.,  Reginster JY, Geerinck A., Bruyere O. Safety of oral chondroitin sulfate in the management of knee osteoarthritis: result of a new meta-analysi of randomized. Placebo – controlled trials., Abstracts / Osteoarthritis and Cartilage 27 (2019) S373eS516 4. Romanowski W. Jak skutecznie leczyć w chorobie zwyrodnieniowej stawów.  Można leczyć bezpieczniej, zapewniając lepsza jakość życia chorych, Puls Medycyny * Europejskie Towarzystwo  Klinicznych i Ekonomicznych Aspektów Osteoporozy,  ChZS i Chorób Mięśniowo-Szkieletowych </p>
</div>
    <div className="page__container">
<h1 style={{fontWeight:'800', fontSize:'3vw'}}>Structum<sup>&#174;</sup>  <span style={{fontSize:'2.5vw'}}>dlaczego warto zastosować <br />
w chorobie zwyrodnieniowej stawów?</span></h1>
    </div>


    <div className="central__container page08">
    <div onClick={()=>setAnswer1(!answer1)} className="button">
        <h1>Spełnia europejskie <br /> standardy <span> leczenia <br /> ChZS.<sup>(1)</sup></span> </h1>
    </div>
    <img src={process.env.PUBLIC_URL + `/images/zolta_w_prawo.svg`} alt="" />
    <h1 className={answer1 ? "show" : "hide"}>Połączenie siarczanu chondroityny <br /> 
z glukozaminą nie jest zalecane <span> <br />
 przez ESCEO*. <sup>(1)</sup></span></h1>


     <div onClick={()=>setAnswer2(!answer2)} className="button">
        <h1><span>Leczenie uzupełniające <br /> objawów ChZS, <br /> </span>wszystkie stawy - ChPL.<sup>(2)</sup> </h1>
    </div>
    <img src={process.env.PUBLIC_URL + `/images/zolta_w_prawo.svg`} alt="" />
    <h1 className={answer2 ? "show" : "hide"}>Jedyny siarczan chondroityny <br /> 
w Polsce <span>ze wskazaniem <br /> w leczeniu ChZS </span>wszystkich stawów.<sup>(2)</sup></h1>


      <div onClick={()=>setAnswer3(!answer3)} className="button">
        <h1>Bezpieczeństwo <br /> <span> w długoterminowej <br />
terapii .<sup>(3)</sup></span> </h1>
    </div>
    <img src={process.env.PUBLIC_URL + `/images/zolta_w_prawo.svg`} alt="" />
    <h1 className={answer3 ? "show" : "hide"}>Zalecenia do krótkoterminowej <span> <br />
 terapii lekami z grupy NLPZ. <sup>(4)</sup></span></h1>
    </div>

</>
  )
}

export default Page08