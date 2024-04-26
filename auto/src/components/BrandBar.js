import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, Row} from "react-bootstrap";
import {Card} from "primereact/card";

const BrandBar = observer(() => {
    const {auto} = useContext(Context)
    return(
        <ul className={'brandBar'}>
            {auto.autoBody.map(autoBody =>
            <li
            style={{cursor:'pointer'}}
            key={autoBody.id}

            onClick={() => auto.setSelectedAutoBody(autoBody)}>
                {autoBody.name}
            </li>
            ) }
        </ul>
    );
})

export default BrandBar;