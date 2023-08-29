import mongoose from "mongoose";
  
 
  
 const connectMongo = async()=>{ 
   
  try {
   const {connection}= await mongoose.connect("mongodb+srv://Mayur:Mayur2002@cluster0.cemqecf.mongodb.net/?retryWrites=true&w=majority")
   if(connection.readyState == 1){
    console.log("connected");
   }
  } catch (error) {
    return Promise.reject(error)
  }
} 
 export default connectMongo;



 