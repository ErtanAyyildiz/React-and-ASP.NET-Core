import ActorForm from "./ActorForm";

export default function EditActor(){
    return(
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name: 'Ertan AYYILDIZ', dateOfBirth: new Date('1996-02-12T00:00:00')}}
                onSubmit={values=>console.log(values)}/>
        </>
    )
}