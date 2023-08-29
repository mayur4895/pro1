
 
import { useReducer } from "react";
import { BiAddToQueue } from "react-icons/bi";
import Success from "./success";
import Error from "./error"; 
import { useQueryClient ,useMutation} from "react-query";
import { addUser } from "@/lib/helper";
import { getUsers } from "@/controller/controller";




export default function AddUserForm(){

 
   const FormHandle = (state,event)=>{
return{
   ...state,
   [event.target.name]:event.target.value
}
   }


const queryClient = useQueryClient();
   const [FormData ,setFormData] = useReducer( FormHandle, {}); 
    const addMutation = useMutation(addUser,{
      onSuccess:()=>{
         queryClient.prefetchQuery('users',getUsers);
         <Success msg={"data added successfuly"}></Success>  
      },
    
    });

const handleSubmit =(e)=>{
   e.preventDefault();
   if(Object.keys(FormData).length == 0 ) return  console.log("not data");
     let {firstname,lastnmae,email,sallery,date,status} = FormData;
     const model = {
      name:`${firstname} ${lastnmae}`,
      avtar:`https://gravatar.com/avatar/65197023c8248be5c3c5ee5072f5132${Math.floor(Math.random() * 10)}?s=400&d=robohash&r=x`,
      email,sallery,date,status:status ?? "Active"
     }
     addMutation.mutate(model);
}

if(addMutation.isLoading) return <div>Loding</div>
if(addMutation.isError) return <Error msg={addMutation.error.message}></Error>
if(addMutation.isSuccess) return <Success msg={"data added"}></Success>
 

    return(
        <form className="grid lg:grid-cols-2 lg:w-4/6 gap-4 py-5 sm:grid-cols-1 justify-center" onSubmit={handleSubmit}>
           <div className="input-type"> 
           <input type="text" name="firstname" onChange={setFormData}  placeholder="FirstName" className="border w-full px-5 py-3 focus:outline-none rounded-md" /> 
           </div>  
           <div className="input-type"> 
           <input type="text" name="lastname"  onChange={setFormData} placeholder="LastName" className="border w-full px-5 py-3 focus:outline-none rounded-md" /> 
           </div>  
           <div className="input-type"> 
           <input type="email"  name="email" onChange={setFormData} placeholder="Email" className="border w-full px-5 py-3 focus:outline-none rounded-md" /> 
           </div>  
           <div className="input-type"> 
           <input type="text" name="salery" onChange={setFormData}  placeholder="Salery" className="border w-full px-5 py-3 focus:outline-none rounded-md" /> 
           </div>  

           <div className="input-type"> 
           <input type="date" name="date" onChange={setFormData}  className="border   px-5 py-5 focus:outline-none rounded-md" /> 
           </div>

         <div className="flex flex-row gap-10">
            <div className="form-check flex flex-row gap-1 algin-center">
               <input type="radio" name="status" onChange={setFormData} id="radioDefault1"   className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none"/>
               <label htmlFor="radioDefault1" className="inline-block  text-gray-800">Active</label>
            </div>
            <div className="form-check flex flex-row gap-1 algin-center">
               <input type="radio" name="status"onChange={setFormData} id="radioDefault2" className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none"/>
               <label htmlFor="radioDefault2" className="inline-block  text-gray-800">Inactive</label>
            </div>
         </div>

         <button className=" flex text-md-w-6/3 justify-center bg-green-400 hover:bg-green-50 hover:text-green-500 border border-green-400 gap-2  px-5 py-2 rounded-sm text-white">Add  <BiAddToQueue size={22}></BiAddToQueue>  </button>
        </form>
    )
}  