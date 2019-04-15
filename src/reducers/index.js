import { combineReducers } from "redux";
import courses from "./course";
import authors from "./author";

const rootReducer = combineReducers({ authors, courses });

export default rootReducer;
