import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,Form,Button,Card,Image,ListGroup} from 'react-bootstrap';
import { addToCart } from '../actions/cartAction';
import {useParams,useNavigate,useLocation} from "react-router-dom";

const CartScreen = () => {
    const {id} =  useParams();
    const history = useNavigate();
    const location = useLocation();

    const qty=location.search? Number(location.search.split('=')[1]):1
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart;
    


    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))     
        }
    },[dispatch,id,qty]);

    console.log(cartItems)
    return (
    <div>
        <h1>Siddheshsingh</h1>
    </div>
  )
};

export default CartScreen;