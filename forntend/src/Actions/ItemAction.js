import { Load_Item, Sucess_Add } from "../constants/ItemConstant"

export const AddTOCart = (obj)=> async(dispatch)=>{


 

    

    dispatch({type:Sucess_Add,payload:{obj}})

  
}
