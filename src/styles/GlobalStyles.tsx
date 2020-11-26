import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background-color: rgb(54,57,63);
        --font-gray: rgb(170, 170, 170);
        --font-error: red;
        --color-link: #00B712;
    }

    html, body {
        width: 100vw;
        font-family: 'RobotoDraft', 'Roboto', sans-serif;
    }

    #root{
        width: 100vw;
    }

    button, input {
        border-radius: 5px;
    }

    input {
        border: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .error {
        font-size: 0.7rem;
        padding-bottom: 10px;
    }
`