import React from 'react'
import '../Page01/Page01.scss'


const Page18 = ({setPage}) => {
  return (
<>
<div className="background">
    <img src={process.env.PUBLIC_URL + `/images/tlo.jpg`} alt="" className='tlo' />
    <img src={process.env.PUBLIC_URL + `/images/logo_Structum.jpg`}alt="" className="logo" />
    <p className="warning">Materiały do użytku wewnętrznego - poufne</p>
        <p className="warning two">PFM/48/2023</p>
<p className="notes page02"></p>
</div>

                <img onClick={()=>setPage(1)} src={process.env.PUBLIC_URL + `/images/home.svg`}alt="" className="dalej" />


    <div className="page__container">
    </div>

    <div className="central__container page05">
<img src={process.env.PUBLIC_URL + `/images/info.svg`} alt="" className='info'/>
    </div>

    
</>
  )
}

export default Page18