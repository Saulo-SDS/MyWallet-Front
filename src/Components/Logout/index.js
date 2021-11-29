import { RiLogoutBoxRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

function ButtonLogout() {
  let history = useHistory();

  function logoutApp() {
    history.push("/");
  }

  function clearStorage() {
    localStorage.clear();
    logoutApp();
  }

  return (
    <div onClick={clearStorage}>
      <RiLogoutBoxRLine size="25" />
    </div>
  );
}

export default ButtonLogout;
