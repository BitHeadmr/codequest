import {combineReducers} from "redux"
import authreducer from "./auth"
import currentuserreducer from "./currentuser";
import usersreducer from "./users";
import questionreducer from "./question";

export default combineReducers({
    authreducer,
    currentuserreducer,
    usersreducer,
    questionreducer,
});