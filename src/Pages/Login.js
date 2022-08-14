import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png'
import Button from "../common/Button";
import Container from "../common/Container";
import Input from "../common/Input";
import { LoginRequest } from "../Services/UserServices";
import { setUserData } from "../Services/UserData";
import UserContext from "../Context/UserContext";

export default function Login() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, setLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const body = {
        email: email,
        password: password,
    };

    function handleSubmit(e) {
        e.preventDefault();
        const loginPromise = LoginRequest(body);
        loginPromise.catch(e => {
            alert("Login inválido!");
            window.location.reload();
        })
            .then(response => {
                setLogin(response.data);
                setUserData(response.data);
                localStorage.setItem('myToken', response.data.token);
                alert("Login realizado com sucesso!");
                navigate("/home");
            })
    };

    //temPlano ? /home : subscriptions
    useEffect(() => {
        if (login !== null && login.membership !== null) {
            alert("Usuário já detectado. Iremos te transferir para a tela inicial");
            localStorage.setItem('myToken', login.token);
            navigate("/home");
            
        }
        else if(login !== null && login.membership === null){
            alert("Usuário detectado, porém sem plano. Iremos te transferir para a tela de escolha de planos.");
            localStorage.setItem('myToken', login.token);
            navigate("/subscriptions");
            console.log(login);
        }
    }, []);

    return (
        <Container>
            <img src={logo} alt="teste" className="logo" />
            <form onSubmit={handleSubmit}>
                <Input placeholder="E-mail" size={300} type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" size={300} type="password" onChange={e => setPassword(e.target.value)} />
                <Button size={300} backgroundColor={buttonTheme.pattern} type="submit">ENTRAR</Button>
            </form>
            <Link to="/sign-up"><a href="">Não possuí uma conta? Cadastre-se</a></Link>
        </Container>
    )
}

