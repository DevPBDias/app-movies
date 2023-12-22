import TypeBtn from "../../components/buttons/TypeBtn";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { BtnBox, FavoritesContainer } from "./FavoriteStyle";
import { moviesData } from '../../services/moviesData.ts'
import MovieCard from "../../components/cards/MovieCard.tsx";


export default function Favorites() {
    return (
        <>
            <Header content="Minha lista" />
            <BtnBox>
                <TypeBtn nameBtn='Filmes' />
                <TypeBtn nameBtn='Séries' />
                <TypeBtn nameBtn='Animes' />
            </BtnBox>
            <FavoritesContainer>
            {
               moviesData.map((item) => (
                  <MovieCard
                     key={item._id}
                     icon={false}
                     image={item.image}
                     name={item.name}
                  />

               ))
            }
            </FavoritesContainer>
            <Footer />
        </>
    )
}
