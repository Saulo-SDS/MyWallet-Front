import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { Link } from "react-router-dom";
import { Box, BoxButton} from "./style";

function Buttons() {

    return (
        <Box>
            <Link to="/user/payments/new/entry">
                <BoxButton left="0">
                    <AiOutlinePlusCircle size="23px" color="#fff"/>
                    <Link to="/user/payments/new/entry"></Link>
                    <h6>Nova entrada</h6>
                </BoxButton>
            </Link>
            <Link to="/user/payments/new/exit">
                <BoxButton right="0">
                    <SubtractCircle size="23px" color="#fff"/>
                    <h6>Nova saida</h6>
                </BoxButton>
        </Link>
        </Box>
    );
}

export default Buttons;