import styled from "styled-components";

const Title = styled.p`
{
    color: #ffffff;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    padding-left : ${props => props.paddingLeft}px;
}
`

export default Title;