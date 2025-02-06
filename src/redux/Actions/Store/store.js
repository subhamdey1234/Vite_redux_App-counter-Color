import {legacy_createStore,combineReducers} from "@reduxjs/toolkit"
import colorReducer from "../Reducer/colorReducer";
import countreducer from "../Reducer/countreducer";

//Multiple  reducers need to combone before attaching to store...

const rootredducers=combineReducers({countreducer,colorReducer});


const store=legacy_createStore(rootredducers); //Reducers as Arguments...

export default store
 
