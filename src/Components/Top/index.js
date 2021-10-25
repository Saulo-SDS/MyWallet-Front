import ButtonLogout from "../Logout";
import { Info } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Loader from 'react-loader-spinner';

function Top({text}) {

    const { user } = useContext(UserContext);

    return (
        <header>
            <Info>
                {user ? 
                    <h2>{ text ? text : `Olá, ${user.name}`}</h2>
                :
                    <Loader type="ThreeDots" color="#FFFFFF" height={50} width={80} />
                }
                {text ? "": <ButtonLogout/>}
            </Info>
        </header>
    );
}

export default Top;