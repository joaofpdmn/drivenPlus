import React, { useState } from "react";
import Padding from "../common/Padding";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../Services/UserData";
import Input from "../common/Input";
import Button from "../common/Button";
import { userUpdateRequest } from "../Services/UserServices";

export default function UserUpdate() {
    const navigate = useNavigate();
    const { login, setLogin } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };

    function handleSubmit(e) {
        e.preventDefault();
        let body = {
            name: name,
            cpf: login.cpf,
            email: email,
            currentPassword: login.password,
        }
        if (newPassword !== '') {
            body = {
                name: name,
                cpf: login.cpf,
                email: email,
                currentPassword: login.password,
                newPassword: newPassword,
            };
        }
        
        console.log(body);
        const userUpdatePromise = userUpdateRequest(body);
        userUpdatePromise.catch(e => {
            alert("Não foi possível alterar seus dados.");
        })
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
                alert("Seus dados foram alterados com sucesso!");
                navigate(-1);
            })
    }

    return (
        <>
            <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
            <Padding value={130} />
            <form>
                <Input size={300} placeholder={login.name} disabled={false} onChange={e => setName(e.target.value)} />
                <Input size={300} placeholder={login.cpf} disabled={true} />
                <Input size={300} placeholder={login.email} disabled={false} onChange={e => setEmail(e.target.value)} />
                <Input size={300} placeholder={login.password} disabled={true} />
                <Input size={300} placeholder="Nova senha" disabled={false} onChange={e => setNewPassword(e.target.value)} />
            </form>
            <Button size={308} backgroundColor={buttonTheme.pattern} onClick={handleSubmit} type="submit">ATUALIZAR</Button>
        </>
    )
}