import   Users  from "@/model/user"; 

export async function getUsers(req,res){ 
    try { 
         const users  = await Users.find();
         if(!users) return res.stautus(404).json("data not found");
         res.status(200).json(users);
    } catch (error) {
          console.log({error:"errror whle fetching"});
    } 
  }


  
  export async function getUser(req,res){ 
 
    try {  
      const  {userid} = req.query;  
         if(userid) {  
            const user =  await Users.findById(userid);   
             res.status(200).json(user);
              }
        return res.status(404).json({error:"not provided"});
    } catch (error) {
      res.status(404).json(error)
    } 
  }
  

  
export async function postUser(req,res){ 
 
  try { 
    const formData = req.body;  
       if(!formData) {
        return res.status(404).json({error:"not provided"});
       } 

  const User = new Users(formData);
      const registerUser =   await User.save();
      if(registerUser) res.status(200).json({message:"User registed"}); 
  } catch (error) {
    res.status(404).json(error)
  } 
}


export async function  putUser(req,res){ 
 
  try { 
    const formData = req.body;  
    const  {userid} = req.query;  
       if(userid && formData) {  
          await Users.findByIdAndUpdate(userid,formData);   
           res.status(200).json(formData);
            }
      return res.status(404).json({error:"not provided"});
  } catch (error) {
    res.status(404).json(error)
  } 
}


export async function  DeleteUser(req,res){ 
 
  try { 
  
    const  {userid} = req.query;  
       if(userid) {  
          await Users.findByIdAndDelete(userid);   
           res.status(200).json("deleted");
            }
      return res.status(404).json({error:"not provided"});
  } catch (error) {
    res.status(404).json(error)
  } 
}

 