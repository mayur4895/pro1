 
 import { toggleChangeAction } from "@/redux/reducer";
import { getUsers } from "../lib/helper";
import { BiEdit , BiBrush } from "react-icons/bi";
import { useQuery } from "react-query";
import {useSelector , useDispatch} from   "react-redux";

export default   function Table(){
 
 
 

 
const {isLoading,isError,data,error} =  useQuery('users',getUsers); 
if(isLoading) return <div>Employee is Loding...</div>
if(isError) return <div>got error {error}</div> 
 
  return (

    
    <table className=" p-5 table-auto">
        <thead>
            <tr className="bg-gray-800 ">
                <th className="px-16 py-2">
                    <span className="text-gray-200">Name</span>
                </th> 
                <th className="px-16 py-2">
                    <span className="text-gray-200">email</span>
                </th> 
                <th className="px-16 py-2">
                    <span className="text-gray-200">Salery</span>
                </th> 
                <th className="px-16 py-2">
                    <span className="text-gray-200">Birthday</span>
                </th> 
                <th className="px-16 py-2">
                    <span className="text-gray-200">Status</span>
                </th> 
                <th className="px-16 py-2">
                    <span className="text-gray-200">Action</span>
                </th> 
                
            </tr>
        </thead>
        <tbody className="bg-gray-200 min-w-full">
             {data.map((obj,i)=> <Tr {...obj} key={i}></Tr>)} 
        </tbody>
    </table>
    

  )
}
 
 
function Tr({id,avtar,name,email,salery,date,status}){ 

    const   visible = useSelector((state)=>state.app.client.toggleForm);
const dispatch = useDispatch();
const  onUpdate = ()=>{
    dispatch(toggleChangeAction())
    console.log(visible);

}

    return(
 
            <tr  className="bg-gray-100 text-center" key={id}>
                 <td className="px-16 py-2 flex flex-row items-center">
                     <img src={avtar ||"#"} className="h-8 w-8  object-cover rounded-xl"></img>
                        <span className="ml-2 font-semibold text-center whitespace-nowrap">{name || "unknown"}</span>
                 </td> 
    
                 <td className="px-16 py-2">
                  <span >{email || "unknown"}</span>
                 </td> 
    
                 <td className="px-16 py-2">
                  <span >{salery || "unknown"}</span>
                 </td> 
    
                 <td className="px-16 py-2">
                  <span>{date || "unknown"}</span>
                 </td> 
    
                 <td className="px-16 py-2">
                 <button className="cursor">  <span className={ status ==  'Inactive'?` bg-red-500 text-white px-5 rounded-2xl  py-1`:` bg-green-500 text-white px-5 rounded-2xl  py-1`}>{status}</span></button>
                 </td> 
                 <td className="px-16 py-2 flex flex-row gap-8 justify-between">
                 <button className="cursor py-1   text-center" onClick={onUpdate}> <BiEdit size={22} color="rgba(34,197,94)"></BiEdit></button>
                 <button className="cursor  py-1   text-center"> <BiBrush size={22} color="tomato"></BiBrush> </button>
                 </td>  
                </tr>
  
    )
 
  
}