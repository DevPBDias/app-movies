import { MovieContainer } from './MovieCardStyle'

type IMovieCard = {
    image: string,
    name: string,
}

export default function MovieCard({ image, name }: IMovieCard) {
    return (
        <MovieContainer>
            <img src={image} alt="" />
            <p>{name}</p>
        </MovieContainer>
    )
}
