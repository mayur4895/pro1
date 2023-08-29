import  mongoose, { Schema ,model,models } from "mongoose";



export const UserSchema = new Schema({
    name:String,
    avtar:String,
    email:String, 
    sallery:String,
    date:String,
    status:String
})

 
  
 let Users
 try {
    Users = mongoose.model('users')
 } catch (error) {
    Users = mongoose.model('users', UserSchema)
 }
   export default Users;
 
 


 