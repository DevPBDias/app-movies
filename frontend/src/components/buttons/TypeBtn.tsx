
type ITypeBtn = {
    nameBtn: string,
}

export default function TypeBtn({nameBtn}: ITypeBtn) {

    return (
        <button
            type="button"
        >
            {nameBtn}
        </button>
    )
}
