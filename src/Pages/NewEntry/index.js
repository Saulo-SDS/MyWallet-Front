import Top from "../../Components/Top";
import styled from "styled-components";
import { Button, Form, Input } from "../../Components/Shared";

function NewEntry() {

    return (
        <Container>
            <Top text="Nova entrada"/>
            <Form>
                <Input placeholder="Valor"/>
                <Input placeholder="Descrição"/>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    );
}


const Container = styled.div`
    padding: 25px 25px 25px 25px;
`;

export default NewEntry;