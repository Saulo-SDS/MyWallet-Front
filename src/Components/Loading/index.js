import Loader from 'react-loader-spinner';
import styled from "styled-components";

function LoadingBox() {

    return(
        <Container>
            <Box>
                <LoadInfo>
                    <Loader type="ThreeDots" color="#c3c3c3" height={200} width={150}/>
                    <p>Loading...</p>
                </LoadInfo>
            </Box>
        </Container>
    )
}


const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
`;

const Box = styled.div`
    height: 446px;
    width: 100%;
`;


const LoadInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: Raleway;
        font-size: 20px;
        height: 46px;
        color: #868686;
    }
`;

export default LoadingBox;