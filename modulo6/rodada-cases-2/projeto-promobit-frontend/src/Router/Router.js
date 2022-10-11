import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailsMovie from '../Pages/detailsMovie/detailsMovie'
import PopularMovies from '../Pages/popularMovies/popularMovies'

const Router = () => {
return(
<BrowserRouter>
<Routes>
<Route index element={<PopularMovies/>}/>
<Route path='/movie/:movieId' element={<DetailsMovie/>}/>
</Routes>
</BrowserRouter>
)
}

export default Router