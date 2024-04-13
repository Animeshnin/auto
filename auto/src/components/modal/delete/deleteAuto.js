import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {deleteClientOrder, fetchAuto, deleteAutoA, fetchGetModelAuto} from "../../../http/deviceApi";
import {Button, Modal} from "react-bootstrap";

const deleteAuto = observer(({show, onHide} )=> {

    const {auto} = useContext(Context)
    const [brandName, setBrandName] = useState('')
    useEffect(() => {
        fetchAuto().then(data => {
            auto.setDevices(data)
        })
    }, [])


    console.log(auto)


    function handleDeleteClick(id){
        deleteAutoA(id).then(
            window.location.reload()
        ).catch(
            error => alert(error.response.data.message)
        )
    }



    return(
        <Modal
            show={show}
            onHide={onHide}
            size={"sz"}
            centered>
            <Modal.Header closeButton>
                <Modal.Title >
                    Список машин
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                    <table border={1} width={"100%"}>
                        <tr style={{textAlign: 'center', border: '1px solid black'}}>
                            <th>Машина</th>
                            <th>Стоимость</th>
                            <th>Удалить</th>
                        </tr>
                        {auto.devices.map(auto =>
                        <tr style={{textAlign: 'center', border: '1px solid black'}}>
                            <td>{auto.brandId} {auto.name}</td>
                            <td>{auto.price}</td>
                            <td><button className={'button__link link mt-2 mb-2'} onClick={() => handleDeleteClick(auto.ida)}>Удалить</button></td>
                        </tr>
                        )}
                    </table>
                </Modal.Body>

        </Modal>
    )
})

export default deleteAuto