import React from 'react'
import '../Page01/Page01.scss'

const Page21 = ({setPage}) => {
  return (
<>


<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/str_02.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
<p className="notes page02 character">Charakterystyka produktu leczniczego Structum 01.2022</p>
</div>

    <img onClick={()=>setPage(22)} src={process.env.PUBLIC_URL + `/images/dalej.svg`}alt="" className="dalej" />


    <div className="page__container">
    </div>

    <div className="central__container page02">
<h1 style={{textAlign:'center'}}>
<span>
60 kapsułek </span> <br /> <br />
1 kapsułka 2 x na dobę
</h1>
    </div>

    
</>
  )
}

export default Page21