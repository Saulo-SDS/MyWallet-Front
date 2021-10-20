import { useHistory } from "react-router-dom";
import  { Container, Box, Form, Input, Button, Link } from "../../Components/Shared/index";

function SingIn() {
    let history = useHistory();

    return (
        <Container>
            <Box>
                <h1>My Wallet</h1>
                <Form>
                    <Input placeholder="Seu email"/>
                    <Input placeholder="Sua senha"/>
                    <Button>Entrar</Button>
                </Form>
                <Link>Primeira vez? Cadastre-se!</Link>
            </Box>
        </Container>
    );
}

export default SingIn;