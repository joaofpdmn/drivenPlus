import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Padding from "../common/Padding";
import Title from "../common/Title";
import whiteDriven from '../assets/img/whiteVector.png'
import Plan from "../Components/Plan";
import { planRequest } from "../Services/UserServices";
import { useNavigate } from "react-router-dom";

export default function ChoosePlan() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };
    const navigate = useNavigate();
    const [body, setBody] = useState([]);
    const planPromise = planRequest(body);
    useEffect(() => {
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
                <div onClick={() => navigate(`/subscriptions/${value.id}`)} key={index}>
                    <Plan img={value.image} price={value.price} key={index} />
                </div>
            )
            };
        </Container >
    );
}
