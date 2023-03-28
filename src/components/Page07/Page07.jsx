import React from 'react'
import '../Page01/Page01.scss'

const Page07 = ({setPage}) => {

  return (
<>
    <img onClick={()=>setPage(8)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />

<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02">Mastalerz-Migas A., Kuryliszyn-Moskal A., Wiland P., Kucharz E. Algorytm diagnostyczny choroby zwyrodnieniowej stawu kolanowego – rekomendacje dla lekarzy rodzinnych LEKARZ POZ, czerwiec 2021, issn 2450-3517 </p>
</div>
    <div className="page__container">
<h1>Jak prawidłowo diagnozować<span>  pacjenta <br />
z chorobą zwyrodnieniową stawów?</span>   </h1>
    </div>



    <div className="central__container page06">
    
<div className="container">
    <img src={process.env.PUBLIC_URL + `/images/PTMR.svg`} alt="" />
        <img src={process.env.PUBLIC_URL + `/images/trzy_fotki.png`} alt="" />
</div>

<div className="container" style={{padding:'3vw '}}>
    <h2>prof. dr hab. n. med. <br />
Anna Kuryliszyn-Moskal</h2>
<h2>prof. dr hab. n. med. <br />
Agnieszka Mastalerz-Migas
</h2>
<h2>prof. dr hab. n. med. <br />
Eugeniusz Kucharz
</h2>
<h2>prof. dr hab. n. med. <br />
Piotr Wiland
</h2>
</div>


    </div>

    
</>
  )
}

export default Page07