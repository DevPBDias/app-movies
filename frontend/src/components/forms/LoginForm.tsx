import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logoMT.png'
import { FormContainer } from './LoginFormStyle'

const LoginForm = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home');
    }

    return (
        <FormContainer>
            <img src={logo} alt="" />
            <h2>Bem vindo ao Movie Trailers!</h2>
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="password" id="" placeholder='Senha' />
            <a href="/redefine">Esqueceu a senha?</a>
            <span>Email ou senhas incorretos!</span>
            <button type="button"
                onClick={handleClick}>Entrar</button>
        </FormContainer>
    )
}

export default LoginForm