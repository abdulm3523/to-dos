import React from "react";
import { Button } from "reactstrap"
import ModalBox from "./modal";

const CreateListBtn = (todos) => {
    return (
        <>
         <Button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#CreateTodos">
        Add
        </Button>
        </>
    )
}

export default CreateListBtn