import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    margin-top: 15px;
    position: relative;
`;

const BoxButton = styled.div`
    padding: 10px 0 10px 10px;
    height: 114px;
    width: 45%;
    border-radius: 5px;
    background-color: #A328D6;
    position: absolute;
    top: 0;
    right: ${(props) => props.right ? props.right : "none"};
    left: ${(props) => props.left ? props.left : "none"};

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

export {
    Box,
    BoxButton
}