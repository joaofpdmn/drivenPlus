import styled from "styled-components";
import Title from "../common/Title";

export default function Plan({img, price}){
    return( 
        <div className="box">
            <img src={img} alt="driven"/>
            <Title size={28}>{price},99</Title>
        </div>
    )
}

const Box = styled.div`{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 290px;
    height: 180px;
    border: 1px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom: 10px;
}
`