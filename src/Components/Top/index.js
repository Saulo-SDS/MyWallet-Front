import styled from "styled-components";
import { Container } from "../Shared";
import {RiLogoutBoxRLine} from "react-icons/ri";

function Top() {

    return (
        <Header>
            <Info>
                <h2>Olá, Fulano</h2>
                <RiLogoutBoxRLine size="25"/>
            </Info>
        </Header>
    );
}

const Header = styled.header`
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    h2 {
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
    }
`;
export default Top;