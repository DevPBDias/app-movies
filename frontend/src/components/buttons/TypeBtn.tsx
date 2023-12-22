import { Button} from './BtnStyle'

type ITypeBtn = {
    nameBtn: string,
}

export default function TypeBtn({nameBtn}: ITypeBtn) {
    return (
        <Button
            type="button"
        >
            {nameBtn}
        </Button>
    )
}
