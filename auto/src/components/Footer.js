import React from 'react';
import '../style/footer.css'

function Footer() {
    return (

        <footer className={'footer'}>
            <div className={'wrapper__footer'}>
                <div className={'footer__flex'}>
                    <div className={'footer__phone'}>
                        +7 (800) 555-80-33
                    </div>
                    <div className={'footer__mail'}>
                        e-k2@bk.ru
                    </div>
                    <div className={'footer__address'}>
                        Екатеринбург, ул. Энгельса д.36 ДД Филитц, офис 414/3
                    </div>

                </div>
                <div className={'footer__copyright'}>
                    2024 © Прокат автомобилей в Екатеринбурге
                </div>
            </div>
        </footer>

    );
}

export default Footer;