import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
 


 const initialState =   {
    client:{toggleForm:false}
}
export  const  ReducerSlce= createSlice({
    name:"crudapp",  
    initialState,
    reducers:{
        toggleChangeAction:(state)=>{
                state.client.toggleForm = !state.client.toggleForm
        }
    }
})

export const {toggleChangeAction} = ReducerSlce.actions;

export  default ReducerSlce.reducer;