import React from "react";
import logo from './assets/img/logo.png'
import Button from "../common/Button";
import Container from "../common/Container";
import Input from "../common/Input";
export default function Login() {
    return (
        <Container>
            <img src={logo} alt="teste" className="logo" />
            <form>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha" />
                <Button>ENTRAR</Button>
            </form>
            <a href="">Não possuí uma conta? Cadastre-se</a>
        </Container>
    )
}

