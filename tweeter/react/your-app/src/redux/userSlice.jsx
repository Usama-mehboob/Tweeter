import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState:{
        user: null,
        otherUsers:null
    },
    reducers:{
        getUser:(state, action)=>{
            state.user = action.payload
        },
        getAllUser:(state, action)=>{
            state.getAllUser = action.payload
        }
    }
})


export default userSlice;