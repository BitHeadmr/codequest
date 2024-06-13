import * as api from "../api"

export const askquestion = (questiondata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postquestion(questiondata);
        dispatch({ type: "POST_QUESTION", payload: data });
        dispatch(fetchallquestion())
        navigate("/")
    } catch (error) {
        console.log(error)
    }
};

export const fetchallquestion = () => async (dispatch) => {
    try {
        const { data } = await api.getallquestions();
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletequestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deletequestion(id);
        dispatch(fetchallquestion());
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}

export const votequestion = (id, value) => async (dispatch) => {
    try {
        await api.votequestion(id, value);
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
}


export const postanswer=(answerdata)=>async(dispatch)=>{
    try {
        const{id,noofanswers,answerbody,useranswered}=answerdata;
        const {data}=await api.postanswer(id,noofanswers,answerbody,useranswered);
        dispatch({type:"POST_ANSWER",payload:data});
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
}

export const deleteanswer=(id,answerid,noofanswers)=>async(dispatch)=>{
    try {
        await api.deleteanswer(id,answerid,noofanswers);
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
};