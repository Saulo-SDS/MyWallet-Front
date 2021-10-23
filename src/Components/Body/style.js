import styled from "styled-components";

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
        text-decoration: none;
    }
`;

export {
    Box,
    NoInfos
}