import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Padding from '../common/Padding';
import exit from '../assets/img/exit.png'

const Modal = props => {
    const buttonTheme = {
        pattern: 'FF4791',
        orange: 'FF4747',
        gray: 'CECECE'
    };
    if (!props.show) {
        return null;
    }
    return (<>
    <Exit src={exit} alt="" onClick={() => props.setIsOpen(false)}/>
    <FullScreen>
        <ModalContent>

            <h1>Tem certeza que deseja assinar o plano Driven Plus por (R$ {props.price})?</h1>
            <Padding value={30} />
            <div className="row">
                <Button size={95} backgroundColor={buttonTheme.gray} type="button" onClick={() => props.setIsOpen(false)}>Não</Button>
                <div className="margin-inline-end"></div>
                <Button size={95} backgroundColor={buttonTheme.pattern} type="submit">SIM</Button>
            </div>
        </ModalContent>
    </FullScreen></>
    )
}

export default Modal;

const Exit = styled.img`
position: fixed;
top: 5%;
right: 5%;
`

const ModalContent = styled.div`{
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: white;
display: flex;
align-items: center;
justify-content: center;
width: 248px;
height: 210px;
flex-direction: column;
color: black;
border-radius: 12px;
}
h1{
    color: black;
    font-weight: 700;
    font-family: 'Roboto';
    display:flex;
    max-width: 204px;
    max-height: 90px;
}`

const FullScreen = styled.div`
display: flex;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom:0;
background-color: #000000B2;
align-items: center;
justify-content: center;
`