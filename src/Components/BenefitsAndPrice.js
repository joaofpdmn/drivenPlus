import React from "react";
import styled from "styled-components";
import clipboard from "../assets/img/clipboard.png"
import money from "../assets/img/money.png"
import Padding from "../common/Padding";
import Title from "../common/Title";

export default function BenefitsandPrice({plan, price}){
    return(
      <BenefitsAndPriceContainer>
        <div className="row">
            <img src={clipboard} alt="clipboard" />
            <Title weight={400} size={16} paddingLeft={5}>Benefícios:</Title>
        </div>
        <span>1. Brindes exclusivos</span>
        <span>2. Materiais bônus de web</span>
        <Padding value={12}/>
        <div className="row">
        <img src={money} alt="money" />
        <Title weight={400} size={16} paddingLeft={5}>Preço:</Title>
        </div>
        <span>R$ {price},99 cobrados mensalmente</span>
        <Padding value={12}/>
      </BenefitsAndPriceContainer>
    );
}

const BenefitsAndPriceContainer = styled.div`
{
    display: flex;
    flex-direction: column;
}

span{
    color: white;
    font-size: 14px;
}`

