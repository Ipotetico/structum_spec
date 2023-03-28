import React from 'react'
import '../Page01/Page01.scss'

const Page04 = ({setPage}) => {
  return (
<>
<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/str_04.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">1. Choroba zwyrodnieniowa stawów – niepokojące symptomy | Reumatologia - mp.pl  Data wejścia 13 marca 2023.  2. Mastalerz-Migas A., Kuryliszyn-Moskal A., Wiland p., Kucharz E. Algorytm diagnostyczny choroby zwyrodnieniowej stawu kolanowego – rekomendacje dla lekarzy rodzinnych LEKARZ  POZ, czerwiec 2021, issn 2450-3517. 3. Choroba zwyrodnieniowa stawów | Reumatologia - mp.pl  Data wejścia 13 marca 2023.</p>
</div>

    <img onClick={()=>setPage(5)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />


    <div className="page__container">
        <h1><span>ChZS jest jedną z najczęstszych przyczyn</span> niepełnosprawności ruchowej.<sup>(1)</sup> </h1>
    </div>

    <div className="central__container page04">
<h1>
ChZ stawu kolanowego
<span>
  <br /> 
jest najczęstszą postacią <br />
choroby oraz jedną z głównych <br />
przyczyn bólu przewlekłego.
 <sup>(2)</sup> </span>
</h1>

<img src={process.env.PUBLIC_URL + `/images/zolta_strzala.svg`} alt="" />

<h1>
Wczesne rozpoznanie
<span>
  <br /> 
i leczenie choroby <br />
zwyrodnieniowej stawów: </span>
</h1>

<img src={process.env.PUBLIC_URL + `/images/zolta_strzala.svg`} alt="" />

<h1>
Złagodzenie dolegliwości
<br /><span>
oraz </span> zapobieganie <br />
niepełnosprawności <span><br />
ruchowej<sup>(3)</sup></span>

</h1>
    </div>
</>
  )
}

export default Page04