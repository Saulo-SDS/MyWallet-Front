import styled from "styled-components";
import { Button, Form, Input } from "../../Components/Shared";
import Top from "../../Components/Top";
import { useState, useContext } from "react";
import Loader from 'react-loader-spinner';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { postPayment } from "../../Components/Service/Api";
import dayjs from "dayjs";

function NewExit() {

    let history = useHistory();
    const [value, setValue] = useState("");
    const [describe, setDescribe] = useState("");
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);

    function saveExit(e) {

        e.preventDefault();
        setLoading(true);

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        
        const date = dayjs().format("YYYY-MM-DD");
        const type = "exit";
        const body = {
            value, 
            type, 
            describe, 
            date
        };

        postPayment(body, config)
        .then(res => {
            history.push("/user/payments");
            setLoading(false);
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
            <Top text="Nova saida"/>
            <Form onSubmit={saveExit}>
               <Input 
                    type="number"
                    step="0.01" 
                    placeholder="Valor"
                    onChange={(e) => setValue(e.target.value)} 
                    required
                />

                <Input 
                    type="text" 
                    placeholder="Descrição" 
                    onChange={(e) => setDescribe(e.target.value)}
                    required
                />
                <Button type="submit" disabled={loading}>
                    {!loading ? "Salvar saida" :  <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />}
                </Button>
            </Form>
        </Container>
    );
}


const Container = styled.div`
    padding: 25px 25px 25px 25px;
`;

export default NewExit;