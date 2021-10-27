import dayjs from "dayjs";
import { 
    BoxPayments, 
    CardPayment,
    Balance,
    BalanceInfo,
    Container,
    Box,
    NoInfos
} from "./style";


function Payments({data}) {
    
    const balance = data.balance;

    function transformaValor(value) {

        let valueFloat = parseFloat(value);
        if (valueFloat < 0) valueFloat *= -1;
        let resul = valueFloat.toFixed(2).toString().replace('.', ',');       

        return resul;
    }

    return (
        <>
        <Container>
            {data && data.balance ? 
                <>
                    <BoxPayments>
                    {data.payments.map(({date, describe, value}) => (
                                    <CardPayment color={value < 0 ? "#C70000" : "#03AC00"}>
                                        <p>{dayjs(date).format('DD/MM')}</p>
                                        <p>{describe}</p>
                                        <p>{transformaValor(value)}</p>
                                    </CardPayment> 
                                ))}
                    </BoxPayments>

                <Balance>
                        <BalanceInfo color={balance < 0 ? "#C70000" : "#03AC00"}>
                            <p>Saldo</p>
                            <p>{transformaValor(balance)}</p>
                        </BalanceInfo>
                    </Balance>
                </>
                   :
                <Box>
                    <NoInfos>
                        <h6>Não há registros de entrada ou saída</h6>
                    </NoInfos>
                </Box>
           }    
            </Container>
        </>
    );
}

export default Payments;