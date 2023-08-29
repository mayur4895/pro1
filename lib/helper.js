 const BASE_URL = "http://localhost:3000" 
 
export  const  getUsers = async()=>{

    const  res = await   fetch( `${BASE_URL}/api/users`);
    const json = await res.json(); 
    return json;
    
}



 
export  const  getUser = async(userid)=>{

    const  res = await fetch(`${BASE_URL}/api/users/${userid}`);
    const json = await res.json(); 
    if(json) return json;
    return {}
    
}


export async function addUser(formData){
    try{
        const Options ={
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData)
        }
        const res = await fetch(`${BASE_URL}/api/users`,Options)
        const json = await res.json();
        return json;
    } catch (error) {
        return error;
    }
}



export async function updateUser(userid,formData){
    try{
        const Options ={
           method:'PUT',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(formData)
        }
        const res = await fetch(`${BASE_URL}/api/users/${userid}`,Options)
        const json = await res.json();
        return json;
    } catch (error) {
        return error;
    }
}



export async function deleteUser(userid){
    try{
        const Options ={
           method:'DELETE',
           headers:{'Content-Type':'application/json'}, 
        }
        const res = await fetch(`${BASE_URL}/api/users/${userid}`,Options)
        const json = await res.json();
        return json;
    } catch (error) {
        return error;
    }
}