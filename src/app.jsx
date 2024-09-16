import React from "react";
import { Container, Row } from "reactstrap"
import Todos from "./components";
function App() {
    return (
        <Container className="p-4">
            <Row>
                <h2 className="text-center">To-Dos</h2>
                <Todos/>
            </Row>
        </Container>
    )
}

export default App