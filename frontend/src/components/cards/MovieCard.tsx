import { IconLike, MovieContainer } from './MovieCardStyle'
import iconLike from '../../assets/icons/iconLike.png'

type IMovieCard = {
    image: string,
    name: string,
    icon: boolean,
}

export default function MovieCard({ image, name, icon}: IMovieCard) {
    return (
        <MovieContainer>
            <IconLike icon={icon} className='icon' src={iconLike} alt="" />
            <img className='banner' src={image} alt="" />
            <p>{name}</p>
        </MovieContainer>
    )
}
