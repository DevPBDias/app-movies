import { FooterContainer } from './FooterStyle'
import iconHome from '../../assets/icons/iconHome.png';
import iconUser from '../../assets/icons/iconUser.png';
import iconLike from '../../assets/icons/iconLike.png';

export const Footer = () => {
    return (
        <FooterContainer>
            <a href='/home'>
                <img src={iconHome} alt="" />
                <p>Home</p>
            </a>
            <a href='/favorites'>
                <img src={iconLike} alt="" />
                <p>Favoritos</p>
            </a>
            <a href='/profile'>
                <img src={iconUser} alt="" />
                <p>Conta</p>
            </a>
        </FooterContainer>
    )
}
