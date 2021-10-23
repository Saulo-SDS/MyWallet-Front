import ButtonLogout from "../Logout";
import { Info } from "./style";

function Top({text}) {

    return (
        <header>
            <Info>
                <h2>{ text ? text : "Olá, Fulano"}</h2>
                {text ? "": <ButtonLogout/>}
            </Info>
        </header>
    );
}

export default Top;