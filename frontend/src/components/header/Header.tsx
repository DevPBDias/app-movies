import logo from '../../assets/logoMT.png'
import { HeaderContainer } from './HeaderStyle'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <h3>Bem vindo, Usuario!</h3>
        </HeaderContainer>
    )
}
