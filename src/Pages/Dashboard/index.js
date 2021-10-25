import Buttons from "../../Components/Buttons";
import Top from "../../Components/Top";
import { DashboardBox } from "../../Components/Shared";
import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/UserContext";
import { getPayments } from "../../Components/Service/Api";
import Payments from "../../Components/PaymentsBox/index";
import LoadingBox from "../../Components/Loading/index";

function Dashboard() {

    const [payments, setPayments] = useState(null);
    const { user } = useContext(UserContext);

    function loadPayments() {
        const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            };

        getPayments(config)
        .then(res => {
            setPayments(res.data);
        })
        .catch(err => {
            Swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Erro ao acessar pagamentos'
            });
        });
    }

    useEffect(loadPayments, [user.token]);

    return (
        <DashboardBox>
            <Top/>
            {payments ? <Payments data={payments}/> :  <LoadingBox/>}
            <Buttons/>
        </DashboardBox>
    );
}

export default Dashboard;