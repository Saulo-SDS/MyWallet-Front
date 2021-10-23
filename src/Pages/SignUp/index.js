import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import  { Container, Box, Form, Input, Button } from "../../Components/Shared/index";
import Loader from 'react-loader-spinner';
import { postUser } from "../../Components/Service/Api";
import Swal from "sweetalert2";

function SingUp() {
    
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    function validateInput(e) {

        e.preventDefault();
        setLoading(true);  
        
        if(password === confirmPassword) {

            const body = {
                name,
                email,
                password
            };

            postUser(body)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                Swal.fire({
                    icon:'error',
                    title:'Oops...',
                    text:'Dados inválidos tente novamente'
                });
                setLoading(false);
            });
            
        }else {
            setPasswordInvalid(true);
            setTimeout(() => {
                setPasswordInvalid(false);
                setLoading(false);  
            }, 2000);
        }
    }

    return (
        <Container>
            <Box>
                <h1>My Wallet</h1>
                <Form onSubmit={validateInput}>
                    <Input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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

                    <Input 
                        type="password" 
                        placeholder="Confirme a senha" 
                        onChange={(e) => setComfirmPassword(e.target.value)}
                        required
                    />
                    {passwordInvalid ? <p>Informe senhas iguais, elas devem ter no minino 6 caracteres</p> : ""}
                    <Button type="submit" disabled={loading}>
                        {!loading ? "Cadastrar" :  <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />}
                    </Button>
                </Form>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </Box>
        </Container>
    );
}

export default SingUp;