import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {deleteAdmin, fetchAdmin} from "../../../http/userApi";
import {deleteAutoA} from "../../../http/deviceApi";
import {Button, Modal} from "react-bootstrap";

const DeleteAdmin = observer(({show, onHide}) => {
    const {user} = useContext(Context);

    useEffect(() => {
        fetchAdmin().then(data => {
            user.setUsers(data)
        })
    }, []);

    const handleDeleteClick = (id) => {
        deleteAdmin(id)
            .then(

        ).catch(
            error => alert(error.response.data.message)
        )
    }

    return(
        <Modal
           show={show}
            onHide={onHide}
            size='lg'
           centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Удалить админа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table border={1} width={"100%"}>
                         <tr style={{textAlign: 'center', border: '1px solid black'}}>
                         <th>Имя админа</th>
                         <th>Email Админа</th>
                        <th>Номер телефона</th>
                        <th>Удалить</th>
                        </tr>
                       {user.users.map(admin =>
                        <tr style={{textAlign: 'center', border: '1px solid black'}}>
                            <td>{admin.fio}</td>
                             <td>{admin.email}</td>
                             <td>{admin.phone}</td>
                            <td><Button variant={'danger'} style={{width: "80%"}}
                                         onClick={() => handleDeleteClick(admin.id)}
                           >
                                 Удалить
                            </Button></td>
                        </tr>
                    )}
               </table>
            </Modal.Body>
        </Modal>
    )
})

export default DeleteAdmin;