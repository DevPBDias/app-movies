import { useNavigate } from 'react-router-dom'
import { Button } from './BtnStyle';

export default function EditBtn() {
    const navigate = useNavigate();

    return (
        <Button
            type='button'
            onClick={()=> navigate('/edit')}
        >
            Editar perfil
        </Button>
    )
}