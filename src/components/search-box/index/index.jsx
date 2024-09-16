import React from "react";
import { InputGroup, Input } from "reactstrap"
import CreateListBtn from "../../create-toDos/index"
const Search = (todos) => {
    return (
        <InputGroup>
            <Input type="text" placeholder="Search here"></Input>
            <CreateListBtn/>
        </InputGroup>
    )
}

export default Search