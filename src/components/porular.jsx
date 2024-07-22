import React from 'react'


import './porular.css'

function Card1(props) {
    return <>
      <div className="card-popular" style={{ gridColumns: props.gap}}>
      <div >
      <h2>{props.slovaH2}</h2>
      <br />
      <br />
      <div className="dir" >
        <span>{props.slova1}</span>
        <span>{props.slova2}</span>
        <span>{props.slova3}</span>
        <span>{props.slova4}</span>
        <span>{props.slova5}</span>
        <span>{props.slova6}</span>
       </div>
      </div>
       <img src={props.image} alt="" />
    </div>    
    </>
}

function porular() {
  return (
    <div className="whithOll">
     <div className="conteyner-popylar">
     <Card1 image="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-card-1.483e4807.png&w=256&q=75" slovaH2="Смартфоны и гаджеты"
        slova1="Смарфоны" slova2="Телефоны" slova3="Планшеты" slova4="Гаджеты" slova5="Наушники" slova6="Powerbank" gap={'1/3'}/>
    <Card1/>
    <Card1/>
     </div>
    </div>
  )
}

export default porular