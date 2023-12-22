import { useNavigate } from 'react-router-dom'
import { Button } from './BtnStyle';

export default function DeleteBtn() {
    const navigate = useNavigate();

    return (
        <Button
            type='button'
            onClick={()=> navigate('/login')}
        >
            Deletar conta
        </Button>
    )
}