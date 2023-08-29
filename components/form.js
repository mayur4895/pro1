import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

const flag =   true;
 
export default function Form(){
 
return(
 <div className="container mx-auto">
     { flag? <AddUserForm></AddUserForm>:<UpdateUserForm></UpdateUserForm>}
 </div>
    )
}  