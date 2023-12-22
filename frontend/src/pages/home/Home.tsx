import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer';
import TypeBtn from '../../components/buttons/TypeBtn';
import SearchBtn from '../../components/buttons/SearchBtn';
import MovieCard from '../../components/cards/MovieCard';
import { moviesData } from '../../services/moviesData.ts'
import { BtnsContainer, MovieCardContainer } from './HomeStylex'

export default function Home() {
   return (
      <>
         <Header content='Bem vindo , Usuario!'/>
         <SearchBtn />
         <BtnsContainer>
            <TypeBtn nameBtn='Filmes' />
            <TypeBtn nameBtn='Séries' />
            <TypeBtn nameBtn='Animes' />
         </BtnsContainer>
         <MovieCardContainer>
            {
               moviesData.map((item) => (
                  <MovieCard
                     key={item._id}
                     icon={true}
                     image={item.image}
                     name={item.name}
                  />

               ))
            }
         </MovieCardContainer>
         <Footer />
      </>
   )
}