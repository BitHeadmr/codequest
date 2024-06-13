import * as api from "../api"
export const fetchallusers=()=> async(dispatch)=>{
    try {
        const {data}=await api.getallusers();
        dispatch({type:"FETCH_USERS",payload:data});
    } catch (error) {
        console.log(error)
    }
}

export const updateprofile=(id,updatedata)=>async(dispatch)=>{
    try {
        const {data}=await api.updateprofile(id,updatedata);
        dispatch({type:"UPDATE_CURRENT_USER",payload:data});
    } catch (error) {
        console.log(error)
    }
}