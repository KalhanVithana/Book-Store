import React from 'react'
import { AddTOCart } from '../Actions/ItemAction';
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ItemsCard(props) {

  const navigate = useNavigate()

    const deleteObj = (id)=>{

        console.log(id);
        axios.delete('http://localhost:4000/user/delete',{data:{id}})

       window.location = '/'
    }

    
    return (
        <div className= "col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0  overflow-hidden h-100 shadow" >
            <img class="card-img-top img-flud" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h3 class="card-title">{props.title}</h3>
                <h5>{props.obj.author}</h5>
              
                                 <h5>Rs.{props.price}</h5>
            </div>
            <button className ="btn btn-dark" onClick={()=>{

               deleteObj(props.obj._id)
                
            }}>Delete</button>
            <button className ="btn btn-dark" onClick={()=>{

navigate(`books`,{replace:true,state:{id:props.obj._id}})
 
}}>Edit</button>
            
            </div>
        </div>
    )
}
