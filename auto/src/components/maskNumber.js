import React from 'react';
import MaskedInput from 'react-text-mask';


export function maskNumber(){
    return(
        <MaskedInput  mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                      placeholder="Введите номер телефона"/>
    )
}



