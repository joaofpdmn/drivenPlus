import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Container from "../common/Container";
import Input from "../common/Input";
import Padding from "../common/Padding";
import { SignUpRequest } from "../Services/UserServices"
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };

    function handleSubmit(e){
        const body = {
            email: email,
            name: name,
            cpf: cpf,
            password: password,
        };
        e.preventDefault();

      const signUpRequisition = SignUpRequest(body);
      signUpRequisition.catch( e => {
        alert('Erro, não conseguimos fazer seu cadastro! Tente novamente.');
      });
      signUpRequisition.then(response => {
        alert('Seu cadastro foi concluído. Estaremos retornando à tela de login!');
        navigate("/");
      })  
      console.log(signUpRequisition);
      console.log(body);

    }

    return (
        <Container>
            <Padding value={147} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" size={300} type="text" onChange={e => setName(e.target.value)} />
                <Input placeholder="CPF" size={300} type="text" onChange={e => setCpf(e.target.value)} />
                <Input placeholder="E-mail" size={300} type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" size={300} type="password" onChange={e => setPassword(e.target.value)} />
                <Button size={300} backgroundColor={buttonTheme.pattern} type="submit">cadastrar</Button>
            </form>
            <Link to="/"><a href="">Já possuí uma conta? Entre</a></Link>
        </Container>
    )
}