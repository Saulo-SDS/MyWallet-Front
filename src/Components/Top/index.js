import ButtonLogout from "../Logout";
import { Info } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Top({text}) {

    const { user, setUser } = useContext(UserContext);

    return (
        <header>
            <Info>
                <h2>{`Olá, ${user.name}`}</h2>
                {text ? "": <ButtonLogout/>}
            </Info>
        </header>
    );
}

export default Top;