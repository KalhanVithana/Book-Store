import { combineReducers,createStore,applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducers/ItemReducer";


const reducer = combineReducers({

    
        cartReducer:cartReducer
   
})




const intialState = {



}

const middlelware =[thunk]


const store = createStore(

    reducer,
    intialState,
  composeWithDevTools(
    applyMiddleware(...middlelware)
  )

)

export default store;