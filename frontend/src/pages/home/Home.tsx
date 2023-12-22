import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer';
import TypeBtn from '../../components/buttons/TypeBtn';
import SearchBtn from '../../components/buttons/SearchBtn';
import { BtnsContainer } from './HomeStylex'

export default function Home() {
   return (
      <>
         <Header />
         <SearchBtn />
         <BtnsContainer>
            <TypeBtn nameBtn='Filmes'/>
            <TypeBtn nameBtn='Séries'/>
            <TypeBtn nameBtn='Animes'/>
         </BtnsContainer>
         <Footer />
      </>
   )
}