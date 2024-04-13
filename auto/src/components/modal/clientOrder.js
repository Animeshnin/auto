import {observer} from "mobx-react-lite";
import {Button, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {deleteAdditionalServices, deleteClientOrder, getAllClientOrder} from "../../http/deviceApi";
import {set} from "mobx";

const clientOrder = observer(({show, onHide}) => {
    const [clientOrder, setClientOrder] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(()=>{
        getAllClientOrder().then(data=> setClientOrder(data))

    }, [])
    useEffect(()=>{
        if(clientOrder){
            setDataLoaded(true)
        }
    }, [clientOrder])

    function handleDeleteClick(id){
        deleteClientOrder(id).then(
            window.location.reload()
        ).catch(
            error => alert(error.response.data.message)
        )
    }



    return(
        <Modal
            show={show}
            onHide={onHide}
            size={"xl"}
            centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            Список клиентов
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table border={1} width={"100%"}>
                            <tr style={{textAlign: 'center', border: '1px solid black'}}>
                               <th>Имя пользователя</th>
                                <th>Номер телефона</th>
                                <th>Машина</th>
                                <th>Дата начало аренды</th>
                                <th>Дата конца аренды</th>
                                <th>Куда доставить</th>
                                <th>Доп. услуги</th>
                                <th>Цена</th>
                                <th>Удалить</th>

                            </tr>
                            {dataLoaded? clientOrder.map((order) =>
                                <tr style={{textAlign: 'center', border: '1px solid black'}}>
                                    <td style={{padding: "10px"}}>{order.name}</td>
                                    <td style={{padding: "10px"}}>{order.phone}</td>
                                    <td style={{padding: "10px"}}>{order.brandName} {order.autoName}</td>
                                    <td style={{padding: "10px"}}>{order.date}</td>

                                    <td style={{padding: "10px"}}>{order.expirationDate}</td>
                                    <td style={{padding: "10px"}}></td>
                                    <td style={{padding: "10px"}}>{order.additionalServices.map((services, index) =>
                                    <p>{index+1}){services}</p>
                                    )}</td>
                                    <td style={{padding: "10px"}}>{order.price}руб</td>
                                    <td><Button variant={"danger"} onClick={() => handleDeleteClick(order.id)}>Удалить {order.id}</Button></td>
                                </tr>

                            ): <p>эээ ну хз</p>}
                        </table>

                    </Modal.Body>
            <Modal.Footer className={'justify-content-center'}>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default clientOrder