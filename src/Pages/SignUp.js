import React from "react";
import Button from "./common/Button";
import Container from "./common/Container";
import Input from "./common/Input";
import Padding from "./common/Padding";

export default function Signup(){
    return (
        <Container>
            <Padding value={147} />
            <Input placeholder="Nome"/>
            <Input placeholder="CPF" />
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha" />
            <Button>cadastrar</Button>
            <a href="">Já possuí uma conta? Entre</a>
        </Container>
    )
}