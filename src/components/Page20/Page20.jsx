import React from 'react'
import '../Page01/Page01.scss'

const Page20 = ({setPage}) => {

  return (
<>

    <img onClick={()=>setPage(21)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">Woroń J. Leki i suplementy diety u pacjentów z chorobą zwyrodnieniową stawów, Co te drugie mają w środku a może czego nie mają?, PZWL
Wydawnictwo Lekarskie, Wydanie I Warszawa 2021 ISBN 978-83-200-6367-7 * evidence-based medicine </p>
</div>
    <div className="page__container">
<h1><span>Leki i suplementy diety </span>– to nie to samo. <br /> SUPLEMENTOMANIA </h1>
    </div>



    <div className="central__container page06 page20">
    
<div  className="container">
    <img  src={process.env.PUBLIC_URL + `/images/piguly.png`} alt="" />
</div>

<div className="container page12">
    <h1 style={{color: 'white', fontWeight:600, textAlign:'left', fontSize:'calc(18px + 0.5vw)', left:0}}>
Suplementy diety nie leczą, nie są 
alternatywą dla leków, <span style={{color: '#ffca00'}}> nie podlegają badaniom klinicznym</span> zgodnym z EBM*.
<br />
<br />
<br />
Stosowane niewłaściwie, wraz 
z niektórymi lekami, <span style={{color: '#ffca00'}}>mogą 
powodować ciężkie działania 
niepożądane.</span> Ryzyko interakcji 
z lekami  nie jest oceniane.
<br />
<br />
<br />
Brak badań parametrów farmakokinetycznych, nawet jeśli dawka SYSADOA jest tożsama <br /> w produkcie leczniczym i suplemencie diety, <br /> to<span style={{color: '#ffca00'}}> nie wiadomo, jaka ilość substancji czynnej zostanie wchłonięta (jaka jest biodostępność).</span>
    </h1>
</div>
</div>
</>
  )
}

export default Page20