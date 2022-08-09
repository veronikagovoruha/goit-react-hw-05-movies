import { Routes, Route} from "react-router-dom"
import { lazy, Suspense } from "react";

const HomePage =  lazy(() => import("./pages/HomePage/HomePage"));
const SingleMoviePage =  lazy(() => import("./pages/SingleMoviePage"));
const MovieCastPage =  lazy(() => import("./components/MovieCast"));
const MovieSearchPage =  lazy(() => import("./pages/MovieSearchPage"));
const ReviewsPage =  lazy(() => import("./components/Reviews"));

const UserRoutes = () =>{
    return(
        <Suspense fallback={<p>...Loading</p>}>
           <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="/goit-react-hw-05-movies"  element={<HomePage />}/>
                <Route path="/movies"  element={<MovieSearchPage />}/>
                <Route path="/movies/:movieId"  element={<SingleMoviePage />}>
                <Route path="cast"  element={<MovieCastPage />}/>
                <Route path="reviews"  element={<ReviewsPage />}/>
                </Route>
                <Route path="*"  element={<HomePage />}/>
            </Routes> 
        </Suspense>
        
    )
}

export default UserRoutes;