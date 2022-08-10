import styled from "styled-components";

const Button = styled.button`
{
    width: ${props => props.size}px;
    height: 52px;
    background-color: #${props => props.backgroundColor}; 
    color: white;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-top: 8px;
}
`


export default Button;