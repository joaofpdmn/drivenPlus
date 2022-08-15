import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import Input from "../common/Input";
import Button from "../common/Button";
import Padding from "../common/Padding";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };

    const navigate = useNavigate();
    const { login, setLogin } = useContext(UserContext);
    console.log(login.token);
    return (
        <>
        <ion-icon name="arrow-back-outline" onClick={() => navigate('/home')} ></ion-icon>
        <Padding value={200}/>
        <Input size={300} placeholder={login.name} disabled={true}/>
        <Input size={300} placeholder={login.cpf} disabled={true}/>
        <Input size={300} placeholder={login.email} disabled={true}/>
        <Button size={308} backgroundColor={buttonTheme.pattern} onClick={() => navigate(`/users/${login.id}/update`)}>ATUALIZAR</Button>
        </>
    );
}