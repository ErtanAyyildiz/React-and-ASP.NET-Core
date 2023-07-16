import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function EditGenre(){
    const {id}:any= useParams();
    return(
        <>
            <h3>Edit Genre</h3>
            <GenreForm model={{name:'Action'}} 
            onSubmit={async value=>{
                // when the form is posted
                await new Promise(r=>setTimeout(r,3000));
                console.log(value);
                console.log(id);
            }}
            />
        </>
    )
}