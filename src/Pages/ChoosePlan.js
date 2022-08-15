import React, { useEffect, useState, useContext } from "react";
import Container from "../common/Container";
import Padding from "../common/Padding";
import Title from "../common/Title";
import Plan from "../Components/Plan";
import { planRequest } from "../Services/UserServices";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useParams } from "react-router-dom";


export default function ChoosePlan({ parametro }) {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };
    const navigate = useNavigate();
    const [body, setBody] = useState([]);
    const planPromise = planRequest(body);
    const { login } = useContext(UserContext);
    const params = useParams();


    useEffect(() => {
        if (params.simounao === 'sim'){
            alert("Troca de plano: ");
            navigate("/subscriptions/:simounao");
        }
        else if (login !== null && login.membership !== null ) {
            localStorage.setItem('myToken', login.token);
            navigate("/home");
        }
        else if (login !== null && login.membership === null) {
            alert("Usuário detectado, porém sem plano. Iremos te transferir para a tela de escolha de planos.");
            localStorage.setItem('myToken', login.token);
            navigate("/subscriptions/:simounao");
            console.log(login);
        }
        
        planPromise.catch(e => {
            alert('Não foi possível carregar os planos.');
            navigate('/');
        })
            .then(response => {
                setBody(response.data);
            })
            

    }, []);

    return (
        <Container>
            <Padding value={30} />
            <Title size={32}>Escolha seu plano</Title>
            <Padding value={24} />
            {body.map((value, index) =>
                <div onClick={() => navigate(`/inscricao/${value.id}`)} key={index}>
                    <Plan img={value.image} price={value.price} key={index} />
                </div>
            )
            };
        </Container >
    );
}
