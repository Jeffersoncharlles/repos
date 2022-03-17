import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
//reset
*{
    margin:0 ;
    padding: 0 ;
    box-sizing:border-box ;
}

html,body,#root{
    min-height:100%;
}

button{
    cursor: pointer;
}

a{
    text-decoration:none ;
}

body{
    background:${({ theme }) => theme.color.primary} ;
    -webkit-font-smoothing: antialiased !important;
    font: 400 1rem 'Roboto', sans-serif;
    color:${({ theme }) => theme.color.primary2} ;
}

@media (max-width:1080px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width:720px) {
    html {
        font-size: 87.5%;
    }
}

`