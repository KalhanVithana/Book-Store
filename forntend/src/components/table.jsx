import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Toast, ToastHeader } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function Table() {
    const param = useParams();
    const[book,setBook] = useState({
        title:'',
        author:'',
        cost: ''
    })
    console.log(param);

    const navigate = useNavigate();
    const handleChange = (type,value)=>{

        if(type=== 'title'){
            setBook((pre)=>{ return {...pre, title:value}})
        }
        if(type=== 'author'){
            setBook((pre)=>{ return {...pre, author:value}})
        }
        if(type=== 'cost'){
            setBook((pre)=>{ return {...pre, cost:value}})
        }

    }

    const submit = ()=> {

        console.log("form",book);
        axios.post('http://localhost:4000/user/add',book)
      
        
    }


  return (
    
    <div>
         <nav class="navbar navbar-dark bg-dark">
              
                <button type="button" onClick={(e) => { navigate('/') }}class="btn rounded-circle m-1 btn-outline-success">Home</button>
                
            </nav>
        <section class="vh-100" style={{backgroundColor:'eee'}}>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style={{borderRadius: '25px'}}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add books</p>
  
                  <form class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-pen fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" onChange={(e)=> handleChange('title',e.target.value)} />
                        <label class="form-label" for="form3Example1c">Title</label>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example3c" class="form-control" onChange={(e)=> handleChange('author',e.target.value)} />
                        <label class="form-label" for="form3Example3c">Author</label>
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-box fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example4c" class="form-control" onChange={(e)=> handleChange('cost',e.target.value)} />
                        <label class="form-label" for="form3Example4c">Cost</label>
                      </div>
                    </div>
  
            
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onClick={submit}>Add</button>
                    </div>
  
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image" />
  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
