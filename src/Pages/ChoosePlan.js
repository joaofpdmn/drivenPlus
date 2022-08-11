import React from "react";
import Container from "../common/Container";
import Padding from "../common/Padding";
import Title from "../common/Title";
import whiteDriven from '../assets/img/whiteVector.png'
import greenDriven from '../assets/img/greenVector.png';
import yellowDriven from '../assets/img/yellowVector.png';
import Plan from "../Components/Plan";

export default function ChoosePlan(){
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747', 
        gray: 'CECECE'
    };
    return (
        <Container>
            <Padding value={30}/>
            <Title size={32}>Escolha seu plano</Title>
            <Padding value={24}/>
            <Plan img={whiteDriven} price={39}/>
            <Plan img={yellowDriven} price={69}/>
            <Plan img={greenDriven} price={99}/>
        </Container>
    );
}
