import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import whiteDriven from "../assets/img/whiteVector.png"
import Padding from "../common/Padding";
import Title from "../common/Title";
import BenefitsandPrice from "../Components/BenefitsAndPrice";
import Input from "../common/Input";
import Button from "../common/Button"
import { useNavigate, useParams } from "react-router-dom";
import { confirmSignPlan, signPlanRequest } from "../Services/UserServices";
import Modal from 'react-modal';
import money from "../assets/img/money.png"
import styled from "styled-components";
import clipboard from "../assets/img/clipboard.png"
import { findByLabelText } from "@testing-library/react";

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
    let subtitle;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#background: #000000B2;';
    }

    function closeModal() {
        setIsOpen(false);
    }

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
            cardName: cardName,
            digits: digits,
            securityCode: securityCode,
            validade: validade,
        };
        e.preventDefault();
        console.log(corpo);

        const confirmSignPlanPromise = confirmSignPlan(corpo);
        confirmSignPlanPromise.catch(e => {
            alert("Não foi possível cadastrar sua conta em um plano!");
        })
            .then(response => {
                console.log(response.data);
                navigate('/home')
            })
    }
    console.log(perksArray);
    console.log(body);
    return perksArray === null ? (<></>) : (
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
                    <Button size={300} backgroundColor={buttonTheme.pattern} onClick={() => setIsOpen(true)} type="button" >Assinar</Button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                        
                        <div>I am a modal</div>
                        <form>
                            <button type="submit"></button>
                            <div>teste</div>
                        </form>
                    </Modal>
                </form>
            </Container>
        </>);

}

const Price = styled.span`{
    color: white;
    font-size: 14px;
}`;