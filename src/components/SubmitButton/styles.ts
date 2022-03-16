import styled, { keyframes, css } from 'styled-components';
interface IButton {
    loading: number;
}

//criando animação do botão
const animate = keyframes`

from{
    transform: rotate(0deg);
}to{
    transform: rotate(360deg);
}

`;

export const Container = styled.button.attrs<IButton>(props => ({
    type: 'submit',
    disabled: props.loading
})) <IButton>`
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
            color:${({ theme }) => theme.color.tertiary} ;
        }

    &:hover{
        filter: brightness(0.8);
    }

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    //pego nas props o loading para poder animar
    ${({ loading }) => loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }
    
`;