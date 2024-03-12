import {useState} from "react";
import {Button, Container} from "react-bootstrap";
import CreateAuto from "../components/modal/createAuto";
import CreateBrand from "../components/modal/createBrand";

const Admin = () => {
    const [autoVisible, setAutoVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    return(
    <Container className={'d-flex flex-column'}>
        <Button variant={'success'} onClick={() => setAutoVisible(true)}>Добавить машину</Button>
        <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)}/>
        <Button variant={'success'} onClick={() => setBrandVisible(true)}>Добавить марку машины</Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
    </Container>
    )
}
export default Admin;