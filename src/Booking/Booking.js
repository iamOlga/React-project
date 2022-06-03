import React from 'react'
import { useState } from 'react';
import './dist/Booking.css';
import Input from './Elements/Input';
import TextArea from './Elements/TextArea';
import Select from './Elements/Select';
import Button from './../Button/Button';
import Card from './Elements/Card'
import Modal from './Elements/Modal';

import cardbg1 from './../Images/book-bg1.png';
import cardbg2 from './../Images/book-bg2.png';
import cardbg3 from './../Images/book-bg3.png';
import booking_bg from './../Images/booking-bg.png';

function Booking() {

  const [card_bg1] = useState(cardbg1);
  const [card_bg2] = useState(cardbg2);
  const [card_bg3] = useState(cardbg3);

  const [modalActive, setModalActive] = useState(false);


/*   const name = document.getElementById("elem1").value;
  const surname = document.getElementById("elem2").value; 
  const email = document.getElementById("elem3").value; 
  const country = document.getElementById("elem4").value; 
  const city = document.getElementById("elem5").value;  */

  return (
    <div className="booking__container">
      
        <Modal active={modalActive} setActive={setModalActive} text='Вы отправили заявку на следующий рейс в космос!'/* name={name + ' ' + surname} email={email} country={country} city={city} *//> 

        <h2>Забронируй свой полет в космос!</h2>
        <h3>Купите место у окна в космическом полете, который изменит вашу жизнь</h3>
    
        <div className="cards__container" 
        style={{
            backgroundImage: `url(${booking_bg})`,
          }}
        >
          <Card urlbg={card_bg1} title='mars' price='2 000 000'/>
          <Card urlbg={card_bg2} title='the moon' price='1 000 000'/>
          <Card urlbg={card_bg3} title='space station' price='1 500 000'/>
        </div>
        

        <form>
          <h2>Контактная информация</h2>
          <div className="row">
            <Input elid="1" type={"text"} name={"Имя"} fullwidth={false}/>
            <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={false}/>
          </div>

          <div className="row">
            <Input elid="3" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
          </div>

          <div className="row">
            <Input elid="4" type={"text"} name={"Страна"} fullwidth={false}/>
            <Input elid="5" type={"text"} name={"Город"} fullwidth={false}/>
          </div>

          <div className="row">
            <Select name={"Куда вы хотите отправиться?"} fullwidth={true}/>
          </div>

          <div className="row">
            <Input type={"number"} name={"Сколько мест вы бы хотели купить?"} fullwidth={true}/>
          </div>

          <div className="row">
            <TextArea name={"В нескольких словах расскажите о себе, о своём экстремальном опыте"} fullwidth={true}/>
          </div>

          <div className="button_container" onClick={() => setModalActive(!modalActive)}>
            <Button className="button" value="Отправить запрос" isrow="row"/>
          </div>
        </form>
    </div>
  )
}

export default Booking;