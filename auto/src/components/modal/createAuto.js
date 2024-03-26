import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {autoCreate, fetchBrand, fetchTransmission} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";
import deviceItem from "../DeviceItem";
import {type} from "@testing-library/user-event/dist/type";

const CreateAuto = observer(({show, onHide}) => {
    const {auto} = useContext(Context)
    const [name, setName] = useState('')
    const [run, setRun] = useState('')
    const [price, setPrice] = useState('')
    const [driveUnit, setDriveUnit] = useState('Полный')
    const [file, setFile] = useState(null)
    const [place, setPlace] = useState('')
    const [yearOfIssue, setYearOfIssue] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        fetchBrand().then(data => auto.setTypes(data))
    }, [])

    useEffect(() => {
        fetchTransmission().then(data => auto.setTransmission(data))
    }, [])

    const selectFile = e =>{
        setFile(e.target.files[0])
    }
    const addAuto = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('run', run)
        formData.append('price', price.replaceAll(' ', ''))
        formData.append('transmissionId', auto.selectedTransmissions.id)
        formData.append('place', place)
        formData.append('driveUnit', driveUnit)
        formData.append('img', file)
        formData.append('brandId', auto.selectedType.id)
        formData.append('yearOfIssue', yearOfIssue)
        formData.append('description', description)
        autoCreate(formData).then(data => onHide())
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
                    Добавить новую услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Dropdown>
                        <Dropdown.Toggle>{auto.selectedType.name ||"Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.types.map(type =>
                            <Dropdown.Item onClick={() =>
                                auto.setSelectedType(type)}
                                           key={type.id}>{type.name}</Dropdown.Item> )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>{auto.selectedTransmissions.name ||"Выберите тип"}</Dropdown.Toggle>

                        <Dropdown.Menu>
                            {auto.transmissions.map(transmission =>
                                <Dropdown.Item onClick={() =>
                                    auto.setSelectedTransmission(transmission)}
                                               key={transmission.id}>{transmission.name}</Dropdown.Item> )}
                        </Dropdown.Menu>
                    </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e =>setName(e.target.value)}
                    placeholder={"Введите модель машины"}>
                </Form.Control>
                <Form.Control
                    className={'mt-3'}
                    value={run} onChange={e => setRun(e.target.value)}
                    placeholder={'Введите пробег машины'}>
                </Form.Control>
                <Form.Control
                    className={'mt-3'}
                    value={price} onChange={e => setPrice(e.target.value)}
                    placeholder={'Введите стоимость за сутки'}>
                </Form.Control>
                    <select className={'form-select mt-3'} value={driveUnit} onChange={e=>setDriveUnit(e.target.value)}>
                        <option>Полный</option>
                        <option selected>Передний</option>
                        <option>Задний</option>
                    </select>
                <Form.Control
                    className={'mt-3'}
                    value={place} onChange={e => setPlace(e.target.value)}
                    placeholder={'Введите количесто мест'}>
                </Form.Control>
                <Form.Control
                    className={'mt-3'}
                    value={yearOfIssue} onChange={e => setYearOfIssue(e.target.value)}
                    placeholder={'Год выпуска'}>
                </Form.Control>
                <Form.Control
                    className={'mt-3'}
                    value={description} onChange={e => setDescription(e.target.value)}
                    placeholder={'Описание'}>
                    </Form.Control>
                </Form>
                <Form.Control className={'mt-3'}
                              type='file'
                              onChange={selectFile}
                />
            </Modal.Body>
            <Modal.Footer className={'justify-content-center'}>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"success"} onClick={addAuto}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )

})

export default CreateAuto