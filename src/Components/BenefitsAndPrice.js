import React from "react";
import styled from "styled-components";

export default function BenefitsandPrice({perks, index}){
    return(
      <BenefitsAndPriceContainer>
        <span>{index+1}. {perks}</span>
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

