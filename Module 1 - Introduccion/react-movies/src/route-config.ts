import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";

const routes=[
    {path: '/genres', component: IndexGenres, exact:true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},

    {path: '/', component: LandingPage, exact:true}
];

export default routes;