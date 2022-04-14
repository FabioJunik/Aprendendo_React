import styled from 'styled-components';

export const ButtonDefault = styled.button`
    min-width: 150px;
    background-color: #00f;
    transform: scale(0.9);
    color: #fff;
    padding: 10px 20px;
    font-size:16px;
    border:1px solid #00f;
    box-sizing: border-box;
    transition: .4s;
    cursor: pointer;
    &:hover{
        transform: scale(1);
    }
`;

export const ButtonSingUp = styled(ButtonDefault)`  
    color:#00f;
    background-color: #fff;
    &:hover{
        background-color:#00f ;
        color:#fff;
        border:none;
    }
`;