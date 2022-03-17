import styled from 'styled-components';

export const Container = styled.main`
    max-width:700px ;//43.75rem
    background: ${({ theme }) => theme.color.white};
    box-shadow:  0 0 1.25rem rgba(0,0,0,0.2); //1.25rem e 20px
    border-radius:4px ;
    padding: 2rem; //32px
    margin: 5rem auto; // 80px
    
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 10rem;//160px
        border-radius: 20%;
        margin: 1.25rem 0;
    }

    h1{
        font-size: 2rem;
    }

    p{
        margin-top: .6rem;
        font-size: 1rem;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
    
`;


export const BackButton = styled.button`
    border: 0;
    background: transparent;
    transition: ease-in 0.3s;
    
    svg{
        color:${({ theme }) => theme.color.primary2} ;
    }

    &:hover{
        transform: scale(1.5);
    }

`;
