import React from "react";
import { } from "reactstrap"
import Search from "./search-box/index";
import ModalBox from "./create-toDos/modal";
class Todos extends React.Component{
    state = {
        
    }

    render() {
        return (
            <>
             <Search />
            <ModalBox />
            </>
        )
    }
}

export default Todos