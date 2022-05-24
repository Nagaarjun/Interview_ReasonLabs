import { Button, Modal as Mdl, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from "styled-components";

const Modal = (props) => {
    const [toggle, setToggle] = useState();
    return (
        <div>
            <Button color="danger" onClick={setToggle(!toggle)}>{props.buttonLabel}</Button>
            <Mdl isOpen={toggle} toggle={setToggle(!toggle)} className={props.className}>
                <ModalHeader toggle={setToggle(!toggle)}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={setToggle(!toggle)}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={setToggle(!toggle)}>Cancel</Button>
                </ModalFooter>
            </Mdl>
        </div>
    );
}

export default Modal;
