import styled from "styled-components";
import BoxInfos from "../../Components/Body";
import Buttons from "../../Components/Buttons";
import { Box } from "../../Components/Shared";
import Top from "../../Components/Top";

function Dashboard() {

    return (
        <Container>
            <Top/>
            <Box>
                <BoxInfos/>
            </Box>
            <Buttons/>
        </Container>
    );
}

const Container = styled.div`
    padding: 25px 25px 25px 25px;
`;

export default Dashboard;