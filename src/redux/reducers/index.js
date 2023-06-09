import { combineReducers } from "@reduxjs/toolkit";
import ButtonDataReducers from "./ButtonDataReducers";


const reducers = combineReducers ({
        data: ButtonDataReducers
    })

export default reducers