import { useNavigate } from 'react-router-dom'
import { Button } from './BtnStyle';

export default function LogoutBtn() {
    const navigate = useNavigate();

    return (
        <Button
            type='button'
            onClick={()=> navigate('/login')}
        >
            Sair da conta
        </Button>
    )
}
