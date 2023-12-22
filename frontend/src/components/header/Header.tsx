import logo from '../../assets/logoMT.png'
import { HeaderContainer } from './HeaderStyle'

type IHeader = {
    content: string,
}

export const Header = ({content}: IHeader) => {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <h3>{content}</h3>
        </HeaderContainer>
    )
}
