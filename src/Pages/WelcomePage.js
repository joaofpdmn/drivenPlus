import React from "react";
import styled from "styled-components";
import whiteDriven from "../assets/img/whiteVector.png"
import Container from "../common/Container"
import Title from "../common/Title";
import Padding from "../common/Padding"
import Button from "../common/Button"

export default function WelcomePage({plan, name}){
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747', 
        gray: 'CECECE'
    };
    return (
        <><Header>
            <img src={whiteDriven} alt="logo" />
            <ion-icon name="person-circle-outline"></ion-icon>
        </Header>
        <Padding value={100}/>
        <Container>
            <Title size={24} weight={700}>Olá, fulano</Title>
            <Padding value={20}></Padding>
            <Button size={300} backgroundColor={buttonTheme.pattern} >Solicitar brindes</Button>
            <Button size={300} backgroundColor={buttonTheme.pattern} >Materiais bônus de web</Button>
            <Button size={300} backgroundColor={buttonTheme.pattern} >Aulas bônus de tech</Button>
            <Button size={300} backgroundColor={buttonTheme.pattern} >Mentorias personalizadas</Button>
            <Padding value={150}/>
            <Button size={300} backgroundColor={buttonTheme.pattern}  >Mudar plano</Button>
            <Button size={300} backgroundColor={buttonTheme.orange} >Cancelar plano</Button>
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