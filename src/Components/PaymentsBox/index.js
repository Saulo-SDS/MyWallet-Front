import dayjs from "dayjs";
import {
  BoxPayments,
  CardPayment,
  Balance,
  BalanceInfo,
  Container,
  Box,
  NoInfos,
} from "./style";

function Payments({ data }) {
  const balance = data.balance.balance;

  function transformValue(value) {
    let valueFloat = parseFloat(value);
    if (valueFloat < 0) valueFloat *= -1;
    let resul = valueFloat.toFixed(2).toString().replace(".", ",");

    return resul;
  }

  return (
    <>
      <Container>
        {data.transactions.length > 0 ? (
          <>
            <BoxPayments>
              {data.transactions.map(({ date, describe, value }, index) => (
                <CardPayment
                  key={index}
                  color={value < 0 ? "#C70000" : "#03AC00"}
                >
                  <p>{dayjs(date).format("DD/MM")}</p>
                  <p>{describe}</p>
                  <p>{transformValue(value)}</p>
                </CardPayment>
              ))}
            </BoxPayments>

            <Balance>
              <BalanceInfo color={balance < 0 ? "#C70000" : "#03AC00"}>
                <p>Saldo</p>
                <p>{transformValue(balance)}</p>
              </BalanceInfo>
            </Balance>
          </>
        ) : (
          <Box>
            <NoInfos>
              <h6>Não há registros de entrada ou saída</h6>
            </NoInfos>
          </Box>
        )}
      </Container>
    </>
  );
}

export default Payments;
