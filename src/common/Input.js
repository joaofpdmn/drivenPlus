import styled from "styled-components";

const Input = styled.input`{
    height: 52px;
    width: ${props => props.size}px;
    border-radius: 8px;
    margin-bottom: 16px;
}

::placeholder {
    padding-left: 12px;
    font-size: 14px;
}`

export default Input;