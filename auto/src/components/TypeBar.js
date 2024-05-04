import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {auto} = useContext(Context)
    return(
        <ListGroup>
            {auto.types.map(type =>
            <ListGroup.Item
            style={{cursor:'pointer'}}
            variant={type.id === auto.selectedAutoBody.id ? "danger" : ""}
            onClick={() => auto.setSelectedAutoBody(type)}
            key={type.id}>
                {type.name}
            </ListGroup.Item>
            ) }
        </ListGroup>
    )
})

export default TypeBar;