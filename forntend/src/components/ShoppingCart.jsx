import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ItemsCard from './ItemsCard'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const [items, setitems] = useState([]);
    const [search, setsearch] = useState('');

    const data = useSelector(state => state.cartReducer)
   const navigate = useNavigate();


    useEffect(async () => {

        await axios.get('http://ec2-3-84-137-227.compute-1.amazonaws.com:4000/user/get').then(res => {

            console.log(res.data)
            setitems(res.data)
        })

    }, [])



   

    const DataTables = () => {

        return seachitem.map((res, i) => {
            return <ItemsCard img={res.newbook} title={res.title} price = {res.cost}  obj={res} />
        })
    }


    const seachitem =
        items.filter(items => {

            if (!items.title) {
                return console.log("not found")
            }
            return items.title.toLowerCase().includes(search.toLowerCase());
        })





    return (
        <div>

            <nav class="navbar navbar-dark bg-dark">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" value={search} onChange={(e) => {
                        setsearch(e.target.value)
                    }} placeholder="Search" aria-label="Search" />
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={(e) => { setsearch('xsmall') }}class="btn rounded-circle m-1 btn-outline-success">Author</button>
                    <button type="button" onClick={(e) => { setsearch('small') }}class="btn rounded-circle m-1 btn-outline-success">Rating</button>
                    <button type="button" onClick={(e) => { setsearch('large') }}class="btn rounded-circle m-1 btn-outline-success">Year</button>
                    
                  
                </div>

                </form>
                <button type="button" onClick={(e) => { navigate('books') }}class="btn rounded-circle m-1 btn-outline-success">Add</button>
                
            </nav>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        DataTables()
                    }

                </div>
            </section>




        </div>

    )
}
