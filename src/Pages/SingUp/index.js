import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import  { Container, Box, Form, Input, Button } from "../../Components/Shared/index";

function SingUp() {
    let history = useHistory();

    return (
        <Container>
            <Box>
                <h1>My Wallet</h1>
                <Form>
                    <Input placeholder="Nome"/>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha"/>
                    <Input placeholder="Confirme a senha"/>
                    <Button>Cadastrar</Button>
                </Form>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </Box>
        </Container>
    );
}

export default SingUp;