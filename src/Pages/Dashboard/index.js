import BoxInfos from "../../Components/Body";
import Buttons from "../../Components/Buttons";
import Top from "../../Components/Top";
import { DashboardBox, Box } from "../../Components/Shared";

function Dashboard() {

    return (
        <DashboardBox>
            <Top/>
            <Box>
                <BoxInfos/>
            </Box>
            <Buttons/>
        </DashboardBox>
    );
}

export default Dashboard;