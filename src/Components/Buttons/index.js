import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
function Buttons() {

    return (
        <Box>
            <BoxButton>
                <AiOutlinePlusCircle size="23px" color="#fff"/>
                <h6>Nova entrada</h6>
            </BoxButton>
            <BoxButton>
                <SubtractCircle size="23px" color="#fff"/>
                <h6>Nova saida</h6>
            </BoxButton>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
    margin-top: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
`;

const BoxButton = styled.div`
    padding: 10px 0 10px 10px;
    height: 114px;
    width: 155px;
    border-radius: 5px;
    background-color: #A328D6;
    h6 {
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        height: 40px;
        width: 64px;
        color: #fff;
    }
`;

export default Buttons;