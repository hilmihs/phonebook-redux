import { combineReducers } from "redux";
import phonebooks from "./phonebooks";

export default function rootReducer () {
    return combineReducers({
        phonebooks
    })
}