import {useState} from "react";
import {Button, Container} from "react-bootstrap";
import CreateAuto from "../components/modal/createAuto";
import CreateBrand from "../components/modal/createBrand";
import {fetchAdditionalServices} from "../http/deviceApi";
import CreateAdditionalServices from "../components/modal/createAdditionalServices";
import ClientOrder from "../components/modal/clientOrder";
import DeleteAuto from "../components/modal/delete/deleteAuto";
import CreateAdmin from "../components/modal/createAdmin";
import DeleteAdmin from "../components/modal/delete/deleteAdmin";

const Admin = () => {
    const [autoVisible, setAutoVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [additionalServices, setAdditionalServices] = useState(false)
    const [clientOrder, setClientOrder] = useState(false)
    const [deleteAuto, setDeleteAuto] = useState(false)
    const [createAdmin, setCreateAdmin] = useState(false)
    const [deleteAdmin, setDeleteAdmin] = useState(false)
    return(
    <Container className={'d-flex flex-column'}>
        <Button variant={'success'} onClick={() => setAutoVisible(true)}>Добавить машину</Button>
        <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)}/>
        <Button variant={'success'} onClick={() => setBrandVisible(true)}>Добавить марку машины</Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <Button variant={'success'} onClick={() => setAdditionalServices(true)}>Добавить доп. услуги</Button>
        <CreateAdditionalServices show={additionalServices} onHide={() => setAdditionalServices(false)}/>
        <Button variant={'success'} onClick={() => setClientOrder(true)}>Клиенты</Button>
        <ClientOrder show={clientOrder} onHide={() => setClientOrder(false)}/>
        <Button variant={'danger'} onClick={() => setDeleteAuto(true)}>Удалить авто</Button>
        <DeleteAuto show={deleteAuto} onHide={() => setDeleteAuto(false)}/>
        <Button variant={'danger'} onClick={() => setCreateAdmin(true)}>Добавить Админа</Button>
        <CreateAdmin show={createAdmin} onHide={() => setCreateAdmin(false)}/>
        {/*<Button variant={"danger"} onClick={() => setDeleteAdmin(true)}>Удалить Админа</Button>*/}
        {/*<DeleteAdmin show={deleteAdmin} onHide={() => setDeleteAdmin(false)}/>*/}
    </Container>
    )
}
export default Admin;