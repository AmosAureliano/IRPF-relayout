import styled from 'styled-components';
import brazilFlag from '../../assets/img/brazil-flag.jpg';

export const Container = styled.div`
    background-image: url(${brazilFlag});
    background-size: cover;
    box-shadow: inset 0 0 0 10000px rgba(18, 10, 143, 0.85);
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;

    @media(max-width: 800px) {
        align-items: center;
    }
`;

export const LoginBox = styled.div`
    background-color: #FFFFFF;
    max-width: 30vw;
    max-height: 95vh;
    border-radius: 0 0 1rem 1rem;

    @media(max-width: 800px) {
        max-width: 90%;
        border-radius: 1rem;
        max-height: 75vh;
    }
`;

export const HeaderLogin = styled.header`
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    padding: 1rem;

    @media(max-width: 800px) {
        border-radius: 1rem 1rem 0 0;
    }
`;

export const Logo = styled.img`
    width: 10vw;

    @media(max-width: 800px) {
        width: 35vw;
    }
`

export const LoginBody = styled.div`
    padding: 5rem 5rem 1rem 5rem;
    
    @media(max-width: 800px) {
        padding: 2rem 2rem 1rem 2rem;
    }
`;

export const Title = styled.p`
    font-size: 1.25rem;
    font-weight: 800;
    color: #4169E1;
    text-align: center;
`

export const FormLogin = styled.form`
    margin-top: 2rem;
`;

export const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
        margin-top: 2rem;
    }
`;

export const Input = styled.input`
    border-bottom: 1px solid black;
    border: none;
    border-bottom: 1px solid black;
    padding: .5rem;
    margin-top: .5rem;
    outline-style: none;
    transition: .3s;

    &:focus {
        border-bottom: 3px solid black;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 1rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
`;

export const SignUpLink = styled.a`
    font-size: .75rem;
`

export const LoginButton = styled.button`
    background-color: #120a8f;
    padding: .5rem 1rem;
    color: #FFFFFF;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg { 
        margin-left: .5rem;
    }
    &:hover {
        background-color: #120b9c;
    }
`;

export const AccessibilityContainer = styled.div`
    background-color: #003153;
    color: #FFFFFF;
    padding: 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`;

export const AcessibilityText = styled.p`
    padding: 1rem 2rem;
    text-align: center;
    font-weight: 300;
`;

export const AccessibilityButton = styled.button`
    border: 1px solid #FFFFFF;
    background: none;
    color: #FFFFFF;
    font-weight: 300;
    padding: .5rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background: rgba(255, 255, 255, .2)
    }
`;