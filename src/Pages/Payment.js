import React from "react";
import Container from "../common/Container";
import whiteDriven from "../assets/img/whiteVector.png"
import Padding from "../common/Padding";
import Title from "../common/Title";
import BenefitsandPrice from "../Components/BenefitsAndPrice";
import Input from "../common/Input";
import Button from "../common/Button"

export default function Payment(){
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747', 
        gray: 'CECECE'
    };
    return(
        <><Container>
            <Padding value={70} />
            <img src={whiteDriven} alt="logo" />
            <Padding value={12} />
            <Title size={32}>Driven Plus</Title>
        </Container>
        <Padding value={20}/>
        <BenefitsandPrice price={200}/>
        <Padding value={10}/>
        <Container>
            <Input size={300} placeholder="Nome impresso no cartão" />
            <Input size={300} placeholder="Dígitos do cartão" />
            <div className="row">
            <Input size={145} placeholder="Código de segurança" />
            <Input size={145} placeholder="Validade" />
            </div>
            <Button>assinar</Button>
        </Container>
        </>
    );
}