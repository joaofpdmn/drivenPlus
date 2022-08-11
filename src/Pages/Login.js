import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'
import Button from "../common/Button";
import Container from "../common/Container";
import Input from "../common/Input";
export default function Login() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747', 
        gray: 'CECECE'
    };
    return (
        <Container>
            <img src={logo} alt="teste" className="logo" />
            <form>
                <Input placeholder="E-mail" size={300}/>
                <Input placeholder="Senha" size={300}/>
                <Button size={300} backgroundColor={buttonTheme.pattern}>ENTRAR</Button>
            </form>
            <Link to="/sign-up"><a href="">Não possuí uma conta? Cadastre-se</a></Link>
        </Container>
    )
}

