import React from 'react';
import '../style/contact.css'
import { BsTelephone } from "react-icons/bs";
function Contact() {
    return (
        <div className={'wrapper'}>
            <div className={'contact-title'}>
                <h1>КОНТАКТЫ КОМПАНИИ "DEMIR" В ЕКАТЕРИНБУРГЕ</h1>
            </div>
            <div className={'contact-area'}>
                <div className={'contact-area-address'}>
                    <div className={'contact-area-address-telephone'}>
                        <div className={'contact-area-telephone-title'}>
                            <p><BsTelephone/> ТЕЛЕФОНЫ</p>
                        </div>
                        <div className={'contact-area-address-telephone-text'}>
                            <span>Для г. Екатеринбург</span>
                            <p>8-967-779-91-16</p>
                            <p>8-800-500-00-18</p>
                            <span>Для иногородних клиентов</span>
                            <p>8-903-360-00-80</p>
                            <span>WhatsApp , Viber, Telegram</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;