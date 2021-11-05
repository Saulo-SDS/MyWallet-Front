import Top from "../../Components/Top";
import styled from "styled-components";
import { Button, Form, Input } from "../../Components/Shared";
import { useState, useContext } from "react";
import Loader from "react-loader-spinner";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { postPayment } from "../../Components/Service/Api";
import dayjs from "dayjs";

function NewTransaction() {
  let history = useHistory();
  const [money, setMoney] = useState("");
  const [describe, setDescribe] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { op } = useParams();

  function saveEntry(e) {
    e.preventDefault();
    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const data = dayjs().format("YYYY-MM-DD");
    const type = "entry";
    const value = op === "exit" ? money * -1 : money;
    const body = {
      value,
      type,
      describe,
      data,
    };

    postPayment(body, config)
      .then((res) => {
        history.push("/client/transactions");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Dados inválidos tente novamente",
        });
        setLoading(false);
      });
  }

  return (
    <Container>
      <Top text={`Nova  ${op === "entry" ? "entrada" : "saía"}`} />
      <Form onSubmit={saveEntry}>
        <Input
          type="number"
          step="0.01"
          placeholder="Valor"
          onChange={(e) => setMoney(e.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescribe(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {!loading ? (
            "Salvar entrada"
          ) : (
            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
          )}
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 25px 25px 25px 25px;
`;

export default NewTransaction;
