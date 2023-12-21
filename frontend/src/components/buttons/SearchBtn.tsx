import iconSearch from '../../assets/icons/iconSearch.png'
import { SearchContainer } from './BtnStyle'

function SearchBtn() {
    return (
        <SearchContainer>
            <input type="text" name="searchBtn" id="" />
            <img src={iconSearch} alt="" />
        </SearchContainer>
    )
}

export default SearchBtn