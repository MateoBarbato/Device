import { createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../firebase";
import DiveSite from '../model/DiveSite'


const initialState = {
    sites:[],
};

const sitesSlice = createSlice({
    name:'site',
    initialState,
    reducers: {
        addSite : (state,action) => {
            const newSite = new DiveSite(
            Date.now(),
            action.payload.title,
            action.payload.description,
            action.payload.depth,
            action.payload.difficulty,
            )
            state.sites.push(newSite);
        },
    },
});

export const {addSite} = sitesSlice.actions;

export const saveSite = (title,description,depth,difficulty) =>{
    return async (dispatch) => {
        const response = await fetch('https://barbato-aplicaciones-default-rtdb.firebaseio.com/data.json')
        if (!response.ok) throw new Error("Something went wrong!");
        const data =  response;

        // if (!data.results) throw new Error("Something went wrong!");
        // console.log('data',data)
        // const address = data.results[0].formatted_address;
        try {
           

          dispatch(addSite({title,description,depth,difficulty}))
        } catch (err) {
            console.log(err.message)
            throw err
            
            
        }
        
    };
};


export const getSites = () => {
    
    return async (dispatch) => {
        try{
            
        }catch(err){
            console.log(err)
            throw(err)
        }
        
    }
}

export default sitesSlice.reducer;