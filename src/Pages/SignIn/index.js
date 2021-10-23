import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import  { Container, Box, Form, Input, Button } from "../../Components/Shared/index";

function SingIn() {
    let history = useHistory();

    return (
        <Container>
            <Box>
                <h1>My Wallet</h1>
                <Form>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha"/>
                    <Button>Entrar</Button>
                </Form>
                <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            </Box>
        </Container>
    );
}

export default SingIn;