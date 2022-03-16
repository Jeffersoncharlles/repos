import styled from 'styled-components';

export const Container = styled.main`
    max-width:700px ;//43.75rem
    background: ${({ theme }) => theme.color.white};
    box-shadow:  0 0 1.25rem rgba(0,0,0,0.2); //1.25rem e 20px
    border-radius:4px ;
    padding: 2rem; //32px
    margin: 5rem auto; // 80px


    h1 {
        font-size: 1.25rem; //20px
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 0.6rem; //10px
        }
    }

`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1; //pegar toda largura disponível
        border: 1px solid ${({ theme }) => theme.color.gray};
        padding: 0.6rem 1rem; //10px baixo em em cima  e 16 px lateral
        border-radius: 4px;
        font-size: 1rem;
    }

`;