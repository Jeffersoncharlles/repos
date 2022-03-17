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


export const IssuesList = styled.section`

    ul {
        list-style: none;
        margin-top: 2rem;//32px
        padding-top: 2rem; //32px
        border-top: 1px solid #eee ;

        li{
            display: flex;
            padding: 1rem 0.6rem;

            & + li {
                margin-top: .7rem;//12px
            }

            img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.color.primary2};
            }

            div {
                flex: 1;
                margin-left: 0.7rem;

                p{
                    margin-top: .7rem;
                    font-size:  .7rem;
                }
            }

            strong{
                font-size: 1rem;

                a{
                    color: ${({ theme }) => theme.color.gray};
                    transition: .3s;

                    &:hover{
                        color: ${({ theme }) => theme.color.info};
                    }
                }

                span{
                    background: ${({ theme }) => theme.color.tertiary};
                    color: ${({ theme }) => theme.color.primary};
                    border-radius: 4px;
                    font-size: .7rem;
                    padding: 5px 7px;
                    margin-left: .6rem;
                }
            }
        }
    }

`;