import {observer} from "mobx-react-lite";
import {Button, Form, FormControl, Modal, ModalBody} from "react-bootstrap";
import React, {useState} from "react";
import {createAdditionalServices} from "../../http/deviceApi";

const CreateAdditionalServices = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const addAdditionalServices = () => {
        createAdditionalServices(name, price).then(data => {
            setName('')
            setPrice('')
            onHide()
        })
    }
    return(
        <Modal
            show={show}
            onHide={onHide}
            size={"lg"}
            centered
        >
            <Modal.Header>
                <Modal.Title >
                    Добавьте доп. услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder={'Введите название доп. услуги'}></Form.Control>
                    <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} placeholder={'Введите стоимость'}></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer className={'justify-content-center'}>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"success"} onClick={addAdditionalServices}>Добавить </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateAdditionalServices