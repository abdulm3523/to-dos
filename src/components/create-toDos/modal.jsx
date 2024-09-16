import React from "react";
import { Form, Modal, ModalBody, ModalHeader,Input, Button, ModalFooter} from "reactstrap"

const ModalBox = () => {
    return (
        <Modal className='modal' >
            <ModalHeader>
                <h2>Create Todos</h2>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Input type='text' placeholder="title here"></Input>
                    <Input type='textarea' placeholder="Dec here"></Input>
                    <Button>Add Now</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <button>Close</button>
            </ModalFooter>
       </Modal>
    )
}

export default ModalBox