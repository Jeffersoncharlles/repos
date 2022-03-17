import styled from 'styled-components';

export const Container = styled.main`
    max-width:700px ;//43.75rem
    background: ${({ theme }) => theme.color.white};
    box-shadow:  0 0 1.25rem rgba(0,0,0,0.2); //1.25rem e 20px
    border-radius:4px ;
    padding: 1.5rem; //32px
    margin: 2rem auto; // 36px
    
    
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
    border-top: 1px solid #eee ;
    margin-top: 2rem;//32px
        padding-top: 2rem; //32px
    ul {
        list-style: none;
        
        

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
    }

`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        border: 0;
        background: ${({ theme }) => theme.color.tertiary};
        color: ${({ theme }) => theme.color.primary};
        padding: 5px 10px;
        border-radius: 4px;
        transition: filter .3s;

        &:hover{
            filter: brightness(0.9);
        }

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

`;

export const FilterList = styled.div`
    margin: 15px 0;
    button{
        border: 0;
        background: ${({ theme }) => theme.color.tertiary};
        color: ${({ theme }) => theme.color.primary};
        padding: 5px 10px;
        border-radius: 4px;
        transition: filter .3s;
        margin: 0 3px;

        &:hover{
            filter: brightness(0.9);
        }

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

`;