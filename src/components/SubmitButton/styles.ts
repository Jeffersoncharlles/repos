import styled from 'styled-components';

export const Container = styled.button`
    background:${({ theme }) => theme.color.primary} ;
    border-radius: 4px;
    border: 0;
    margin-left: 0.6rem;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease-out filter 0.3s;


        svg {
            color:${({ theme }) => theme.color.secondary2} ;
        }

    &:hover{
        filter: brightness(0.8);
    }
    
`;