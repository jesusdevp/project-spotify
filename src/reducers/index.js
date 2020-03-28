import { combineReducers } from "redux";
import { initial } from "./initial";
import player from "./playerReducer";

export default combineReducers({ player, initial });
