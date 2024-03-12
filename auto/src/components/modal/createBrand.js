import React, {useState} from "react";
import {createBrand} from "../../http/deviceApi";
import {Button, Form, Modal} from "react-bootstrap";

const  CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id={'contained-modal-title-vcenter'}>
                Добавить новый тип
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className={'w-100'}>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Введите название марки автомобиля'}
                ></Form.Control>
            </Form>
        </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={onHide}>Закрыть</Button>
                <Button variant={"success"} onClick={addType}>Добавить</Button>

            </Modal.Footer>

        </Modal>
    )
}

export default CreateBrand