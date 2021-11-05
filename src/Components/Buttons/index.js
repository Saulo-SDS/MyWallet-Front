import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { Link } from "react-router-dom";
import { Box, BoxButton } from "./style";

function Buttons() {
  return (
    <Box>
      <Link to="/client/transactions/new/entry">
        <BoxButton left="0">
          <AiOutlinePlusCircle size="23px" color="#fff" />
          <h6>Nova entrada</h6>
        </BoxButton>
      </Link>
      <Link to="/client/transactions/new/exit">
        <BoxButton right="0">
          <SubtractCircle size="23px" color="#fff" />
          <h6>Nova saída</h6>
        </BoxButton>
      </Link>
    </Box>
  );
}

export default Buttons;
