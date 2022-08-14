import React, { useEffect, useState, useContext } from "react";
import Container from "../common/Container";
import Padding from "../common/Padding";
import Title from "../common/Title";
import BenefitsandPrice from "../Components/BenefitsAndPrice";
import Input from "../common/Input";
import Button from "../common/Button"
import { useNavigate, useParams } from "react-router-dom";
import { confirmSignPlan, signPlanRequest } from "../Services/UserServices";
import money from "../assets/img/money.png"
import styled from "styled-components";
import clipboard from "../assets/img/clipboard.png"
import Modal from "../Components/Modal"
import UserContext from "../Context/UserContext";
import { setUserData } from "../Services/UserData";

export default function Payment() {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };

    const navigate = useNavigate();
    const [body, setBody] = useState([]);
    const params = useParams();
    const [cardName, setCardName] = useState('');
    const [digits, setDigits] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [validade, setValidade] = useState('');
    const [perksArray, setPerksArray] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const { login, setLogin } = useContext(UserContext);


    const signPlanPromise = signPlanRequest(params.id);
    useEffect(() => {
        signPlanPromise.catch(e => {
            alert('Não foi possível acessar seus planos.');
        })
            .then(response => {
                setBody(response.data);
                setPerksArray(response.data.perks);
                console.log(response.data);
            })
    }, []);

    function handleSubmit(e) {
        const corpo = {
            membershipId: params.id,
            cardName: cardName,
            cardNumber: digits,
            securityNumber: securityCode,
            expirationDate: validade,
        };
        e.preventDefault();
        console.log(corpo);

        const confirmSignPlanPromise = confirmSignPlan(corpo);
        confirmSignPlanPromise.catch(e => {
            alert("Não foi possível cadastrar sua conta em um plano!");
            setIsOpen(false);
        })
            .then(response => {
                console.log(response.data);
                login.membership = response.data;
                setUserData(login);
                console.log(login.membership);
                navigate('/home')
            })
    }

    return perksArray === null ? (<></>) : (
        <><ion-icon name="arrow-back-outline" onClick={() => navigate('/subscriptions')} ></ion-icon>
            <><Container>
                <Padding value={70} />
                <img src={body.image} alt="logo" />
                <Padding value={12} />
                <Title size={32}>{body.name} Plus</Title>
            </Container>
                <Padding value={20} />
                <div className="row">
                    <img src={clipboard} alt="clipboard" />
                    <Title weight={400} size={16} paddingLeft={5}>Benefícios:</Title>
                </div>
                {perksArray.map((x, index) => <BenefitsandPrice perks={x.title} index={index} />)}
                <Padding value={12} />
                <div className="row">
                    <img src={money} alt="money" />
                    <Title weight={400} size={16} paddingLeft={5}>Preço:</Title>
                </div>
                <Price>R$ {body.price} cobrados mensalmente</Price>
                <Padding value={12} />
                <Padding value={10} />
                <Container>
                    <form onSubmit={handleSubmit}>
                        <Input size={300} placeholder="Nome impresso no cartão" onChange={e => setCardName(e.target.value)} />
                        <Input size={300} placeholder="Dígitos do cartão" onChange={e => setDigits(e.target.value)} />
                        <div className="row">
                            <Input size={145} placeholder="Código de segurança" onChange={e => setSecurityCode(e.target.value)} />
                            <Input size={145} placeholder="Validade" onChange={e => setValidade(e.target.value)} />
                        </div>
                        <Button size={300} backgroundColor={buttonTheme.pattern} onClick={() => setIsOpen(true)} type="button">Assinar</Button>
                        <Modal show={modalIsOpen} price={body.price} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
                    </form>
                </Container>
            </></>);

}

const Price = styled.span`{
    color: white;
    font-size: 14px;
}`;

const ModalContent = styled.div`{
    display: flex;
    width: 248px;
    height: 210px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1{
    color: black;
    font-weight: 700;
    font-family: 'Roboto';
    display:flex;
    max-width: 204px;
    max-height: 68px;
}

button{
    margin-inline-end: 30px;
}

div{
    display:flex;
    justify-content: space-around;
    
}

`


