import { useState, SyntheticEvent } from 'react';
import { 
    Container,
    LoginBox,
    HeaderLogin,
    Logo,
    LoginBody,
    Title,
    FormLogin,
    Label,
    Input,
    ButtonContainer,
    SignUpLink,
    LoginButton,
    AccessibilityContainer,
    AcessibilityText,
    AccessibilityButton
} from './styles';
import { BiRightArrow } from 'react-icons/bi'
import receitaLogo from '../../assets/img/receita-federal-logo-expansive.png';
import { cpfMask } from '../../utils/masks';

export function Login() {
    const [cpf, setCpf] = useState("");

    function handleChange(e: SyntheticEvent) {
        e.preventDefault()
        const target = e.target as HTMLInputElement;
        setCpf(cpfMask(target.value));
    }
    
    return(
        <Container>
            <LoginBox>
                <HeaderLogin>
                    <Logo src={receitaLogo}/>
                </HeaderLogin>

                <LoginBody>
                    <Title>Seja bem-vindo(a) ao <br/> Novo Imposto de Renda!</Title>
                    <FormLogin>
                        <Label>
                            CPF
                            <Input 
                                placeholder="000.000.000-00"
                                id="cpf"
                                maxLength={14}
                                value={cpf}
                                onChange={handleChange}
                                type="text"
                            />
                        </Label>
                        <Label>
                            Senha
                            <Input 
                                placeholder="xxxxxxxxx"
                                id="cpf" 
                                type="password"
                            />
                        </Label>

                        <ButtonContainer>
                            <SignUpLink href="#">Ainda não estou <br/> cadastrado(a)</SignUpLink>
                            <LoginButton>Acessar o sistema <BiRightArrow/></LoginButton>
                        </ButtonContainer>
                    </FormLogin>

                    <AccessibilityContainer>
                        <AcessibilityText>Você possui alguma necessidade especial?</AcessibilityText>
                        <AccessibilityButton>Opções de acessibilidade</AccessibilityButton>
                    </AccessibilityContainer>
                </LoginBody>
            </LoginBox>
        </Container>
    )
}
