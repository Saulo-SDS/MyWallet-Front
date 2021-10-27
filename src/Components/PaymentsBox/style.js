import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
`;

const BoxPayments = styled.div`
    height: 446px;
    width: 100%;
    position: relative;
    overflow-y: scroll;
`;

const CardPayment = styled.div`
    position: relative;
    display:flex;
    width: 100%;
    p {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }

    p:first-child {
        color: #C6C6C6;
        margin-left: 10px;
    }

    p:nth-child(2) {
        color: #000;
        margin-left: 10px;
        max-width: 60%;
    }
    
    p:last-child {
        position: absolute;
        right: 10px;
        color: ${props => props.color};
    }
`;

const Balance = styled.div`
    width: 100%;
`;

const BalanceInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: Raleway;
    font-size: 17px;
    line-height: 20px;
    padding-left: 10px;

    p:first-child {
        font-weight: 700;
    }
    p:last-child {
        padding-right: 18px;
        font-weight: 400;
        color: ${props => props.color};
    }
`;

const Box = styled.div`
    height: 446px;
    width: 100%;
    border-radius: 5px;
    background: #fff;
`;

const NoInfos = styled.div`
    height: 100%;
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
        text-decoration: none;
    }
`;

export {
    BoxPayments,
    CardPayment,
    Balance,
    BalanceInfo,
    Container,
    Box,
    NoInfos
}