import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, Row} from "react-bootstrap";
import {Card} from "primereact/card";

const BrandBar = observer(() => {
    const {auto} = useContext(Context)
    const [activeAutoBodyId, setActiveAutoBodyId] = useState(null);

    const handleClick = (autoBody) => {
        if (activeAutoBodyId === autoBody.id) {
            // Если текущий элемент уже активен, сбрасываем его активность
            setActiveAutoBodyId(null);
            auto.setSelectedAutoBody(null); // Сбрасываем выбранный элемент
        } else {
            setActiveAutoBodyId(autoBody.id);
            auto.setSelectedAutoBody(autoBody);
        }
    };

    return(
        <ul className={'brandBar'}>
            {auto.autoBody.map(autoBody =>
            <li
            style={{cursor:'pointer', backgroundColor: activeAutoBodyId ===autoBody.id ? '#e32526' : 'initial', color:  activeAutoBodyId === autoBody.id ? "white" : 'black'}}
            key={autoBody.id}
            onClick={() => handleClick(autoBody)}>
                {autoBody.name}
            </li>
            ) }
        </ul>
    );
})

export default BrandBar;