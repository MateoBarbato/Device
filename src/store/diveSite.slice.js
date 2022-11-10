import { createSlice } from "@reduxjs/toolkit";
import DiveSite from "../screens/diveSites";

const initialState = {
    sites:[]
}

const sitesSlice = createSlice({
    name:'site',
    initialState,
    reducers:{
        addSite:(state,action) => {
            const newSite = new DiveSite(Date.now(),
            action.payload.title,
            action.payload.location,
            action.payload.description,
            action.payload.depth,
            action.payload.difficulty,
            );
            state.sites.push(newSite)
        },
    },
})

export const {addSite} = sitesSlice.actions;

export const saveSite = (title,location,description,depth,difficulty) => {
    return async (dispatch) => {
        try {
            dispatch(addSite({title,location,description,depth,difficulty}))
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

export default sitesSlice.reducer;