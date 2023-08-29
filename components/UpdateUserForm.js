
 
import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "./success";
export default function UpdateUserForm(){


   const FormHandle = (state,event)=>{
return{
   ...state,
   [event.target.name]:event.target.value
}
   }


   const [FormData ,setFormData] = useReducer( FormHandle, {});
   
const handleSubmit =(e)=>{
   e.preventDefault();
   if(Object.keys(FormData).length == 0 ) return  console.log("not data");
   console.log(FormData);
}

if(Object.keys(FormData).length > 0  ) return <Success msg={"data added"}></Success>

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

         <button className=" flex text-md-w-6/3 justify-center bg-yellow-400 hover:bg-yellow-50 hover:text-yellow-500 border border-yellow-400 gap-2  px-5 py-2 rounded-sm text-white"> Update  <BiBrush size={22}></BiBrush>  </button>
        </form>
    )
}  