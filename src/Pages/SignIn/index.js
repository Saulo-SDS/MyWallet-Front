import { useState, useContext } from "react";
import Loader from 'react-loader-spinner';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Box, Form, Input, Button } from "../../Components/Shared/index";
import { getUser } from "../../Components/Service/Api";
import { UserContext } from "../../contexts/UserContext";


function SingIn() {

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);

    function login(e) {

        e.preventDefault();
        setLoading(true);

        const body = {
            email,
            password
        }

        console.log(body);

        getUser(body)
        .then(res => {

            const bodyUser = {
                token: res.data.token,
                name: res.data.user.name
            }
            setUser(bodyUser)
            setLoading(false);          
            history.push('/sign-up');
        })
        .catch(err => {
            Swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Dados inválidos tente novamente'
            });
            setLoading(false);
        });
    }

    return (
        <Container>
            <Box>
                <h1>My Wallet</h1>
                <Form onSubmit={login}>
                    <Input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />

                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" disabled={loading}>
                        {!loading ? "Entrar" :  <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />}
                    </Button>
                </Form>
                <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            </Box>
        </Container>
    );
}

export default SingIn;