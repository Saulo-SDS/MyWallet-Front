import styled from "styled-components";
import { Container } from "../Shared";

function BoxInfos() {

    return (
        <Box>
            <NoInfos>
                <h6>Não há registros de entrada ou saída</h6>
            </NoInfos>
        </Box>
    );
}

const Box = styled.div`
    height: 446px;
    width: 100%;
    left: 25px;
    top: 78px;
    border-radius: 5px;
        background: #fff;
`;

const NoInfos = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h6{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        height: 46px;
        width: 180px;
        color: #868686;
    }
`;

export default BoxInfos;