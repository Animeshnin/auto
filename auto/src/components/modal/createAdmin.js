import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useLocation} from "react-router-dom";
import {registration, registrationAdmin} from "../../http/userApi";
import {Button, Form, Modal} from "react-bootstrap";

const CreateAdmin = observer(({show, onHide}) => {
    const {user} = useContext(Context)
    const location = useLocation()
    const [fio, setFio] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [phone, setPhone] = useState('')
    const [passport, setPassport] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
                data = await registrationAdmin(fio, passport, phone, email, login, password)
            onHide()
        } catch (e){
            alert(e.response.data)
        }
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id={'contained-modal-title-vcenter'}>
                    Добавить нового админа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={'w-100'}>
                    <Form.Control className={'mt-3'} value={fio} onChange={e =>setFio(e.target.value)}
                    placeholder={"Введите ФИО"}></Form.Control>
                    <Form.Control className={'mt-3'} value={phone} onChange={e =>setPhone(e.target.value)}
                                  placeholder={"Введите номер телефон"}></Form.Control>
                    <Form.Control className={'mt-3'} value={email} onChange={e =>setEmail(e.target.value)}
                                  placeholder={"Введите email"}></Form.Control>
                    <Form.Control className={'mt-3'} value={login} onChange={e =>setLogin(e.target.value)}
                                  placeholder={"Введите login"}></Form.Control>
                    <Form.Control className={'mt-3'} value={passport} onChange={e =>setPassport(e.target.value)}
                                  placeholder={"Введите паспорт"}></Form.Control>
                    <Form.Control className={'mt-3'} value={password} onChange={e =>setPassword(e.target.value)}
                                  placeholder={"Введите пароль"}></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer className={'justify-content-center'}>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"success"} onClick={click}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );
})

export default CreateAdmin;