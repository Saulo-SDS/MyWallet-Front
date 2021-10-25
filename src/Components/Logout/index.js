import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { deleteSession } from "../Service/Api";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function ButtonLogout() {

  let history = useHistory();
  const { user } = useContext(UserContext);

  function logoutApp(){

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    };

    deleteSession(config)
    .then(res => {
      history.push("/");
    })
    .catch(err => {
        Swal.fire({
          icon:'error',
          title:'Oops...',
          text:'Erro ao deslogar'
        });
    });

  }

  function clearStorage(){
    localStorage.clear()
    logoutApp()
  }

  return (
      <div onClick={clearStorage}>
        <RiLogoutBoxRLine size="25"/>
      </div>
  );
}

export default ButtonLogout;