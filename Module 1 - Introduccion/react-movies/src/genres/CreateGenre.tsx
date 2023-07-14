import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";

export default function CreateGenre(){
    //const history=useHistory();
    return(
        <>
            <h3>Create Genre</h3>

            <Formik initialValues={{
                name:''
            }}
            onSubmit={value=>{
                console.log(value);
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('this is required')
            })}
            >

                <Form>
                    <TextField field="name" displayName="Name"/>

                    <Button type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cansel</Link>

                </Form>
            </Formik> 
            
        </>
    )
}