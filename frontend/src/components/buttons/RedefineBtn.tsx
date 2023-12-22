import { useNavigate } from 'react-router-dom'
import { Button } from './BtnStyle';

export default function RedefineBtn() {
    const navigate = useNavigate();

    return (
        <Button
            type='button'
            onClick={()=> navigate('/redefine')}
        >
            Redefinir senha
        </Button>
    )
}