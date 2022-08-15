import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../common/Container"
import Title from "../common/Title";
import Padding from "../common/Padding"
import Button from "../common/Button"
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { deletePlan } from "../Services/UserServices";
import { setUserData } from "../Services/UserData";


export default function WelcomePage() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    localStorage.setItem('myToken', login.token);
    const sim = 'sim';

    function deletarPlano(){
        if(window.confirm("Você realmente quer deletar seu plano?")){
            const confirmDeletePlanPromise = deletePlan();
            confirmDeletePlanPromise.catch(() => {
                alert("Não foi possível deletar o plano da sua conta.");
            })
            .then(() => {
                login.membership = null;
                setUserData(login);
                alert('Plano excluído com sucesso!');
                navigate('/');
            })
            
        };
    }

    return (
        <><Header>
            <img src={login.membership.membership.image} alt="logo" />
            <ion-icon name="person-circle-outline" onClick={() => navigate(`/users/${login.id}`)} ></ion-icon>
        </Header>
            <Padding value={100} />
            <Container>
                <Title size={24} weight={700}>Olá, {login.name}</Title>
                <Padding value={20}></Padding>
                {login.membership.membership.perks.map((value, index) =>
                    <div key={index}>
                        <Button size={300} backgroundColor={buttonTheme.pattern} onClick={() => window.open(`${value.link}`, '_blank')}>{value.title}</Button>
                    </div>
                )}
                <Padding value={150} />
                <Button size={300} backgroundColor={buttonTheme.pattern} onClick={() => navigate(`/subscriptions/${sim}`)} >Mudar plano</Button>
                <Button size={300} backgroundColor={buttonTheme.orange} onClick={() => deletarPlano() }>Cancelar plano</Button>
            </Container>
        </>
    )


}

const Header = styled.div`
{
    display: flex;
    width: 100%;
    position:fixed;
    top: 0;
    justify-content: flex-start;
    align-items: center;
}

img{
    width: 74px;
    height: 50px;
    padding-top: 32px;
}
`