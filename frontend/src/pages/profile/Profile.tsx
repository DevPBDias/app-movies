import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { usersData } from '../../services/userData.ts'
import DeleteBtn from '../../components/buttons/DeleteBtn'
import RedefineBtn from '../../components/buttons/RedefineBtn'
import EditBtn from '../../components/buttons/EditBtn'
import LogoutBtn from '../../components/buttons/LogoutBtn'
import { ProfileContainer, ButtonsContainer } from './ProfileStyle.tsx'


export default function Profile() {
    return (
        <>
            <Header content="Perfil da conta" />
            <ProfileContainer>
                <img src={usersData[0].avatar} alt="" />
                <div>
                    <p>{usersData[0].name}</p>
                    <p>{usersData[0].email}</p>
                    <p>{usersData[0].userName}</p>
                </div>
            </ProfileContainer>
            <ButtonsContainer>
                <EditBtn />
                <RedefineBtn />
                <DeleteBtn />
                <LogoutBtn />
            </ButtonsContainer>
            <Footer />
        </>
    )
}
